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
  if (!supabaseAnonKey || supabaseAnonKey === 'undefined' || supabaseAnonKey === 'null') return null;

  // Supabase anon key MUST be a valid JWT (starts with 'eyJ' and has 3 dot-separated parts)
  if (typeof supabaseAnonKey !== 'string' || !supabaseAnonKey.startsWith('eyJ') || supabaseAnonKey.split('.').length !== 3) {
    console.warn('[Supabase] Warning: NEXT_PUBLIC_SUPABASE_ANON_KEY is missing or not a valid JWT token. Verify your environment variables / secrets.');
    return null;
  }

  _supabase = createClient(supabaseUrl, supabaseAnonKey);
  return _supabase;
}

const IMAGE_EXTENSIONS = ['.jpg', '.jpeg', '.png', '.webp', '.gif', '.heic', '.bmp'];

/**
 * List all files in a storage folder path.
 * Returns an array of { name, url } for each image file found.
 * Returns empty array if Supabase is not configured.
 */
export async function listImagesInFolder(folderPath) {
  const client = getSupabase();
  if (!client) return [];

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

    const images = (data || []).filter(file => {
      const name = file.name.toLowerCase();
      return IMAGE_EXTENSIONS.some(ext => name.endsWith(ext));
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

/**
 * List subfolders inside a given path (used to discover years and events dynamically).
 * Returns array of folder name strings.
 */
export async function listFolders(folderPath) {
  const client = getSupabase();
  if (!client) return [];

  try {
    const { data, error } = await client
      .storage
      .from(BUCKET_NAME)
      .list(folderPath, {
        limit: 200,
        sortBy: { column: 'name', order: 'desc' } // newest years first
      });

    if (error) {
      console.error(`Error listing folders in ${folderPath}:`, error);
      return [];
    }

    // Folders in Supabase have id: null and metadata: null
    // Files have an id. We want items that look like folder placeholders
    // or items that don't have image extensions (i.e., they are subfolder names)
    const folders = (data || []).filter(item => {
      if (item.name.startsWith('.')) return false;
      // If it has no id, it's a folder
      if (!item.id) return true;
      // If it has an id but no extension, might still be a folder placeholder
      const hasExt = item.name.includes('.');
      return !hasExt;
    });

    return folders.map(f => f.name);
  } catch (err) {
    console.error(`Exception listing folders in ${folderPath}:`, err);
    return [];
  }
}

/**
 * Upload a file to a specific folder path in the bucket.
 * Returns { success, url, error }
 */
export async function uploadFile(folderPath, file) {
  const client = getSupabase();
  if (!client) return { success: false, error: 'Supabase not configured' };

  try {
    const filePath = `${folderPath}/${file.name}`;
    const { data, error } = await client
      .storage
      .from(BUCKET_NAME)
      .upload(filePath, file, {
        cacheControl: '3600',
        upsert: false // don't overwrite existing files
      });

    if (error) {
      console.error('Upload error:', error);
      return { success: false, error: error.message };
    }

    return {
      success: true,
      url: `${STORAGE_BASE_URL}/${filePath}`
    };
  } catch (err) {
    console.error('Upload exception:', err);
    return { success: false, error: err.message };
  }
}

/**
 * Delete a file from the bucket.
 * @param {string} filePath - Full path within the bucket, e.g. "2026/Holiday_Party/photo.jpg"
 * Returns { success, error }
 */
export async function deleteFile(filePath) {
  const client = getSupabase();
  if (!client) return { success: false, error: 'Supabase not configured' };

  try {
    const { error } = await client
      .storage
      .from(BUCKET_NAME)
      .remove([filePath]);

    if (error) {
      console.error('Delete error:', error);
      return { success: false, error: error.message };
    }

    return { success: true };
  } catch (err) {
    console.error('Delete exception:', err);
    return { success: false, error: err.message };
  }
}
