/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["devsow.wpengine.com"], // Allow images from this domain
  },
};

module.exports = nextConfig;
