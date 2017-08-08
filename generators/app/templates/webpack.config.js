// dependencies
const path = require('path');
const webpack = require('webpack');
const NgAnnotatePlugin = require('ng-annotate-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
var LiveReloadPlugin = require('webpack-livereload-plugin');

const pkg = require('./package.json');

// Environment
const ON_DEV = process.env.NODE_ENV === 'development' || !process.env.NODE_ENV;
const ON_TEST = process.env.NODE_ENV === 'test';
const ON_PROD = process.env.NODE_ENV === 'production';

// Webpack Plugins
const plugins = [
  new webpack.optimize.OccurrenceOrderPlugin(),

  new NgAnnotatePlugin({
    add: true,
    remove: false,
  }),

  // expose global variables
  new webpack.DefinePlugin({
    ON_DEV,
    ON_TEST,
    ON_PROD,
    'process.env': {
      NODE_ENV: JSON.stringify(process.env.NODE_ENV),
    },
  }),

  new HtmlWebpackPlugin({
    dev: ON_DEV,
    pkg: pkg,
    template: 'index.ejs',
    inject: 'body', // Inject all scripts into the body
    filename: 'index.html',
  }),
];

if (ON_PROD) {
  plugins.push(new webpack.optimize.UglifyJsPlugin({
    sourceMap: true,
    output: { comments: false },
    compress: { warnings: false }
  }));
} else {
  plugins.push(new webpack.HotModuleReplacementPlugin());
  plugins.push(new LiveReloadPlugin());
}


module.exports = {
  cache: true,

  context: path.resolve(__dirname, './src'),

  stats: 'errors-only',

  entry: './index.js',

  // where 3rd-party modules can reside
  resolve: {
    modules: ['node_modules', 'bower_components'],
  },

  output: {
    // where to put standalone build file
    path: path.resolve(__dirname, './dist'),
    publicPath: '',
    filename: 'bundle.js',
    sourceMapFilename: 'bundle.map',
    libraryTarget: 'umd',
  },

  plugins,

  // dependencies listed here will NOT be bundled into the app, even if you `require` them.
  externals: {
    angular: {
      root: 'angular',
      commonjs: 'angular',
      commonjs2: 'angular',
      amd: 'angular',
    },
    lodash: {
      root: '_',
      commonjs: 'lodash',
      commonjs2: 'lodash',
      amd: 'lodash',
    },
    jquery: {
      root: '$',
      commonjs: 'jquery',
      commonjs2: 'jquery',
      amd: 'jQuery',
    },
  },


  // what loaders to use based on file type.
  module: {
    rules: [{
        enforce: 'pre',
        test: /\.js$/,
        loader: 'eslint-loader',
        exclude: /(node_modules|bower_components)/,
      },
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
          cacheDirectory: true,
          presets: ['es2015'],
          plugins: ['angularjs-annotate', 'transform-runtime', 'add-module-exports'],
        },
      },
      {
        test: /\.(scss|sass|css)$/,
        loader: 'style-loader!css-loader!sass-loader'
      },
      {
        test: /\.html$/,
        loader: 'raw-loader'
      },
      {
        test: /\.(png|jpeg|gif).*$/,
        loader: 'file-loader?name=/[name].[ext]?[hash]'
      },
      {
        test: /\.(woff|ttf|eot|svg).*$/,
        loader: 'file-loader?name=/[name].[ext]?[hash]'
      },
    ],
  },

  devtool: ON_PROD ? 'source-map' : 'cheap-module-eval-source-map',

  devServer: {
    contentBase: 'dist/',
    noInfo: false,
    hot: false,
    inline: false,
  },
};
