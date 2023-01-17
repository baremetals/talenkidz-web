/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['storage.googleapis.com', 'firebasestorage.googleapis.com'],
  },
  i18n: {
    locales: ['en'],
    defaultLocale: 'en',
    // localeDetection: false,
  },
  // pageExtensions: ['.tsx'],
};
