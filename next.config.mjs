/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["utfs.io"],
  },
};

export default nextConfig; // Use this for .mjs
// module.exports = nextConfig; // Use this for .js (CommonJS)
