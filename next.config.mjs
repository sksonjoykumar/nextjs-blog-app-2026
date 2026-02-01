/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // domains: ["utfs.io"],
   remotePatterns: [
    { protocol: "https", hostname: "utfs.io" },
    { protocol: "https", hostname: "uploadthing.com" },
  ],
  },
};

export default nextConfig; // Use this for .mjs
// module.exports = nextConfig; // Use this for .js (CommonJS)
