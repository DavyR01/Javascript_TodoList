const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
   entry: {
      mainEntry: path.resolve(__dirname, "src/chapter24_canvas/index.js"), // Important
   },
   output: {
      path: path.resolve(__dirname, "dist"),
      filename: "[name].bundle.js"
   },
   module: {
      rules: [
         {
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
               loader: "babel-loader"
            }
         },
         {
            test: /\.css$/i,
            use: ["style-loader", "css-loader"]
         },
         {
            test: /\.(png|jpe?g|gif)$/i,
            use: [
               {
                  loader: 'file-loader',
                  // ou 'url-loader' si vous préférez
               },
            ],
         },
      ]
   },
   plugins: [
      new HtmlWebpackPlugin({
         template: path.resolve(__dirname, "src/chapter24_canvas/index.html") // Important
      })
   ],
   devtool: "source-map",
   mode: "development",
   devServer: {
      static: path.resolve(__dirname, './dist'),
      open: true,
      watchFiles: ['./src/**'], // Important
      port: 4005,
      hot: true,
   }
};