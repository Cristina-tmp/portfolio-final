/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["i.pinimg.com", "i.imgur.com", "imgur.com", "cdn.sanity.io"],
  },
};

module.exports = nextConfig;
