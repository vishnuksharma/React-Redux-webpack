const path = require("path");
const HtmlWebpackPlugin  = require("html-webpack-plugin");

module.exports = {
    entry: "./src/index.js",
    output: {
        path: path.join(__dirname, "dist"),
        filename: "bundle.js",
        publicPath: "/"
    },
    module: {
        rules:[
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                    // options: { presets: ["es2015"] }
                }
            },
            {
              test: /\.scss/,
              use: [
                {
                  loader: "style-loader" // creates style nodes from JS strings
                },
                {
                  loader: "css-loader" // translates CSS into CommonJS
                },
                {
                  loader: "sass-loader" // compiles Sass to CSS
                }
              ]
              // loader: 'style-loader!css-loader!sass-loader'
          }
        ]
    },
    devServer: {
      historyApiFallback: true,
    },
    plugins:[
        new HtmlWebpackPlugin({
            template: "./public/index.html"
        })
    ]
};