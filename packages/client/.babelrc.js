module.exports = {
  plugins: [
    [
      'babel-plugin-module-resolver',
      {
        root: ['.'],
        alias: {
          'client-redux': './src/redux',
          'client-pages': './src/pages',
          'client-components': './src/components',
          'client-assets': './src/assets',
          'client-misc': './src/misc',
        },
      },
    ],
  ],
};
