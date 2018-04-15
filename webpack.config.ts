import path = require('path');
import webpack = require('webpack');
import HtmlWebpackPlugin = require('html-webpack-plugin');
import CleanWebpackPlugin = require('clean-webpack-plugin');


const DIST = path.resolve(__dirname, 'dist');

const config = (
  env: any,
  {mode}: webpack.Configuration
): webpack.Configuration => ({
  entry: [
    './src/index.tsx'
  ],
  output: {
    filename: '[name]-[hash].bundle.js',
    path: DIST,
    publicPath: '/'
  },
  devServer: {
    contentBase: DIST
  },
  ...(mode === 'development' && {devtool: 'source-map'}),
  resolve: {
    extensions: ['.ts', '.tsx', '.js']
  },
  plugins: [
    new CleanWebpackPlugin([DIST]),
    new HtmlWebpackPlugin({
      title: 'Tetris!',
      template: 'index.html'
    }),
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'awesome-typescript-loader'
      }
    ]
  }
});

export default config;
