const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
   entry: {
      mainEntry: path.resolve(__dirname, "src/chapter27_drag&drop/index.js"), // Important
   },
   output: {
      path: path.resolve(__dirname, "dist"),
      filename: "[name].bundle.js"
   },
   resolve: {
      extensions: ['.ts', '.tsx', '.js', 'json'],
      alias: {
         '@': path.resolve(__dirname, 'src'),
      },
      modules: [path.resolve(__dirname, '.'), 'node_modules'],
      //? Utiliser soit l'alias pour faire référence au dossier src comme on l'a indiqué soit faire sans l'alias et faire référence au dossier racine courant avec modules pour les imports et avoir. L'option modules est plus extensible en terme de portée et de flexibilite mais alias est plus spécifique et explicite sur le départ des importations.
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
         template: path.resolve(__dirname, "src/chapter27_drag&drop/index.html") // Important
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