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
  webpack: (config, { _buildId, _dev, _isServer, _defaultLoaders, webpack }) => {
    config.plugins.push(
      new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery',
        'window.jQuery': 'jquery',
      })
    );

    // Important: return the modified config
    return config;
  },
  // pageExtensions: ['.tsx'],
};

const webpack = require('webpack');