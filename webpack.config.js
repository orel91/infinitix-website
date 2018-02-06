const path = require('path');
const webpack = require('webpack');

const BUILD_DIR = path.resolve(__dirname, 'src/client/public');
const APP_DIR = path.resolve(__dirname, 'src/client/app');
const LIB_DIR = path.resolve(__dirname, 'lib');

const config = {
  entry: [
    `${LIB_DIR}/skel.min.js`,
    `${LIB_DIR}/jquery.scrollex.min.js`,
    `${LIB_DIR}/util.js`,
    `${LIB_DIR}/main.js`,
    `${APP_DIR}/App.jsx`,
  ],
  plugins: [ // Allows webpack to resolve $ and jQuery without requiring jquery in each file
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      skel: `${LIB_DIR}/skel.min.js`,
    }),
  ],
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.(jsx|js)$/,
        exclude: /node_modules/,
        use: { loader: 'babel-loader' },
      },
      { test: /\.css$/, use: ['style-loader', 'css-loader'] },
      { test: /\.(eot|ttf|woff2?)(\?.*$|$)/, use: 'file-loader?name=/fonts/[name].[ext]' },
      { test: /\.exec\.js$/, use: 'script-loader' },
      { test: /\.(png|svg|jpg|gif)$/, use: ['file-loader'] },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
};

module.exports = config;
