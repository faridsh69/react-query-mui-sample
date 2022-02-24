/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    HOST: process.env.HOST,
    API_URL: process.env.API_URL
  },
  images: {
    domains: ['thumborcdn.acast.com', 'storage.buzzsprout.com']
  }
};

module.exports = nextConfig;
