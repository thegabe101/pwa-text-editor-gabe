const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');
const path = require('path');
const { InjectManifest } = require('workbox-webpack-plugin');

//this is where the bulk of the work is. need to figure out how to build the distribution folder

// TODO: Add and configure workbox plugins for a service worker and manifest file.
// TODO: Add CSS loaders and babel to webpack.

//this part is essentially boilerplate. i think this will tend to stay the same unless you are someone who changes index names and server names and whatnot
module.exports = () => {
  return {
    //here we direct our webpacks installation for future offline scenarios. we call the main and the install pack from src for each purpose
    mode: 'development',
    entry: {
      main: './src/js/index.js',
      install: './src/js/install.js'
    },
    output: {
      //here we output our bundle and directory, which will be dist for distribution from the webpack
      filename: '[name].bundle.js',
      path: path.resolve(__dirname, 'dist'),
    },
    //we need an: html plugin, an inject manifest plugin for the service worker, and im not sure what else at the moment
    //oh boy. this is going to require staring at the docs- writing this by hand after 2 days in class doesn't feel possible quite yet
    plugins: [
      new HtmlWebpackPlugin({
        template: './index.html',
        //we don't necessarily need this parameter, but it can't hurt as long as it matches our json
        title: 'jate'
      }),
      //here we build the service worker from the src folder and direct it to use that folder
      new InjectManifest({
        swSrc: './src-sw.js',
        swDest: 'src-sw.js',
      }),
      //next we must create the webpack manifest json. this is found on the docs for the webpack config js; 
      //it looks like we are missing some things from the professor demo though. the docs online nearly match except we need to add fingerprints and inject: true. 
      new WebpackPwaManifest({
        fingerprints: false,
        inject: true,
        //here we add the full name of the application (just another text editor) and provide a short-name, acronym style
        name: 'Just Another Text Editor',
        short_name: 'J.A.T.E.',
        //now we can add a description for people seeking to install
        description: 'This app is used to install an online/offline text editor.',
        //then we provide colors. im not changing these from the class demo. maybe ill change my mind later, though
        background_color: '#225ca3',
        theme_color: '#225ca3',
        //these two paths should be slashed, not including a dot, although they may function the same
        start_url: '/',
        publicPath: '/',
        icons: [
          {
            //here we can specify our webpack to include the provided logo and scale it properly depending on size requirements
            src: path.resolve('src/images/logo.png'),
            sizes: [96, 128, 192, 256, 384, 512],
            destination: path.join('assets', 'icons'),
          },
        ],
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
