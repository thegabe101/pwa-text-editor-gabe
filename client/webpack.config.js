const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');
const path = require('path');
const { InjectManifest } = require('workbox-webpack-plugin');

//this is where the bulk of the work is. need to figure out how to build the distribution folder

// TODO: Add and configure workbox plugins for a service worker and manifest file.
// TODO: Add CSS loaders and babel to webpack.

module.exports = () => {
  return {
    mode: 'development',
    entry: {
      main: './src/js/index.js',
      install: './src/js/install.js'
    },
    output: {
      filename: '[name].bundle.js',
      path: path.resolve(__dirname, 'dist'),
    },
    //we need an: html plugin, an inject manifest plugin for the service worker, and im not sure what else at the moment
    //oh boy. this is going to require staring at the docs- writing this by hand after 2 days in class doesn't feel possible quite yet
    plugins: [
      new HtmlWebpackPlugin({
        template: './index.html',
        title: 'JATE'
      }),
      //here we build the server worker from the src folder and direct it to use that folder
      new InjectManifest({
        swSrc: './src-sw.js',
        swDest: 'src-sw.js',
      }),
    ],

    //here we get a CSS loader to make sure our style sheet is being loaded, and then we grab the Babel thing Joe was demonstrating.
    //I don't totally know what Babel is doing yet (or what old js versus ES6 is changing) but I do know where to find it on the docs
    module: {
      rules: [
        {
          //test uses regex to ensure only css is being targeted
          test: /\.css$/i,
          //instructs what loader to use
          use: ['style-loader', 'css-loader'],
        },
        {
          //another regex check
          test: /\.m?js$/,
          //need to make sure node_modules are excluded once they are built there
          exclude: /node_modules/,
          //here we introduce the babel loader in order to convert to old js for older browsers and machines.
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env'],
              plugins: ['@babel/plugin-proposal-object-rest-spread', '@babel/transform-runtime'],
            },
          },
        },
      ],
    },
  };
};
