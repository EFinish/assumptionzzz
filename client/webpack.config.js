'use strict'
const { VueLoaderPlugin } = require('vue-loader');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require('path');

module.exports = {
  entry: path.resolve(__dirname + "/app.js"),
  output: {
    filename: "client.js",
    path: path.resolve(__dirname + "/build/")
  },
  module: {
    rules: [
      {
        test: /.js?$/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"]
          }
        },
        exclude: /node_modules/
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
            options: { minimize: true }
          }
        ]
      },
      {
        test: /\.vue$/,
        loader: "vue-loader",
        options: {
          compilerOptions: {
            whitespace: "condense"
          },
          loaders: {
            css: [
              "vue-style-loader",
              {
                loader: "css-loader"
              }
            ]
          }
        }
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      template: "./index.html",
      filename: "./index.html"
    })
  ],
  watchOptions: {
    aggregateTimeout: 300,
    poll: 1000
  },
  devServer: {
    contentBase: path.join(__dirname, "build"),
    compress: true,
    port: 425
  }
};