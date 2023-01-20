const path = require('path');

module.exports = {
  webpackFinal: async (config, { configType }) => {
    // config.resolve.modules.push(path.resolve(__dirname, '../src/'));
    config.resolve = {
      ...config.resolve,
      alias: {
        src: path.resolve(__dirname, '../src/'),
        lib: path.resolve(__dirname, '../src/lib'),
        utils: path.resolve(__dirname, '../src/utils'),
        components: path.resolve(__dirname, '../src/components'),
        public: path.resolve(__dirname, '../public'),
        styles: path.resolve(__dirname, '../src/styles'),
      },
    };

    return config;
  },
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  /** Expose public folder to storybook as static */
  staticDirs: ['../public', '../src/**'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    'storybook-css-modules-preset',
    'storybook-addon-next-router',
  ],
  framework: '@storybook/react',
  core: {
    builder: '@storybook/builder-webpack5',
  },
};
