const HTMLWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const DotenvPlugin = require('dotenv-webpack');

module.exports = {
  mode: process.env.NODE_ENV,
  output: {
    filename: 'app.bundle.js',
  },
  devServer: {
    historyApiFallback: true,
    contentBase: './dist',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            rootMode: 'upward',
          },
        },
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
            query: {
              interpolate: 'require',
            },
          },
        ],
      },
      {
        test: /\.(jpg|jpeg|png|gif|bmp|svg|ico)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: () => {
                // We don't need to check whether the environment is test because we will need to
                // mock them later
                if (process.env.NODE_ENV === 'development') return '[path][name].[ext]';

                return '[hash].[ext]';
              },
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: './src/template.html',
    }),
    new CleanWebpackPlugin(),
    new BundleAnalyzerPlugin(),
    new DotenvPlugin(),
  ],
};
