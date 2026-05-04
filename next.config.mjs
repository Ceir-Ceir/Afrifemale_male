/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true, // Required for static export (no Next.js image optimization server)
  },
};

export default nextConfig;
