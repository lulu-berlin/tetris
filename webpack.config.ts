import * as path from 'path';
import * as webpack from 'webpack';
import * as HtmlWebpackPlugin from 'html-webpack-plugin';


const DIST = path.resolve(__dirname, 'dist');

const config: webpack.Configuration = {
  entry: [
    './src/index.tsx'
  ],
  output: {
    filename: '[name].bundle.js',
    path: DIST,
    publicPath: '/'
  },
  devtool: 'source-map',
  devServer: {
    contentBase: DIST
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js']
  },
  plugins: [
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
};

export default config;
