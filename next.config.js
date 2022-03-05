/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    HOST: process.env.HOST,
    API_URL: process.env.API_URL
  },
  images: {
    domains: [
      'ssl-static.libsyn.com',
      'assets.pippa.io',
      'image.ausha.co',
      'thumborcdn.acast.com',
      'storage.buzzsprout.com',
      'd3wo5wojvuv7l.cloudfront.net'
    ]
  }
};

module.exports = nextConfig;
