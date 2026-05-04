import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://tapkdjdhyyxmsnbjbxae.supabase.co';
const supabaseAnonKey = typeof window !== 'undefined' 
  ? (process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '') 
  : (process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '');

export const STORAGE_BASE_URL = `${supabaseUrl}/storage/v1/object/public/client-images`;
export const BUCKET_NAME = 'client-images';

// Lazy-init the client — only create when actually needed, and guard against missing key
let _supabase = null;

function getSupabase() {
  if (_supabase) return _supabase;
  if (!supabaseAnonKey) return null;
  _supabase = createClient(supabaseUrl, supabaseAnonKey);
  return _supabase;
}

/**
 * List all files in a storage folder path.
 * Returns an array of { name, url } for each image file found.
 * Returns empty array if Supabase is not configured.
 */
export async function listImagesInFolder(folderPath) {
  const client = getSupabase();
  if (!client) {
    // No Supabase key configured — return empty so caller uses fallbacks
    return [];
  }

  try {
    const { data, error } = await client
      .storage
      .from(BUCKET_NAME)
      .list(folderPath, {
        limit: 100,
        sortBy: { column: 'name', order: 'asc' }
      });

    if (error) {
      console.error(`Error listing ${folderPath}:`, error);
      return [];
    }

    // Filter to only image files (exclude folders / .emptyFolderPlaceholder)
    const imageExtensions = ['.jpg', '.jpeg', '.png', '.webp', '.gif', '.heic', '.bmp'];
    const images = (data || []).filter(file => {
      const name = file.name.toLowerCase();
      return imageExtensions.some(ext => name.endsWith(ext));
    });

    return images.map(file => ({
      name: file.name,
      url: `${STORAGE_BASE_URL}/${folderPath}/${file.name}`
    }));
  } catch (err) {
    console.error(`Exception listing ${folderPath}:`, err);
    return [];
  }
}
