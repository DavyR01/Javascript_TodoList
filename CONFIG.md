Installation : 

- npm init -y // Création package.json
npm i -D @babel/cli @babel/core @babel/preset-env babel-loader css-loader html-webpack-plugin style-loader webpack webpack-cli webpack-dev-server

- Rajouter node_modules et dist dans le fichier .gitignore.
- Modifier le fichier package.json
- Importer le fichier de style css.

Astuces : 

   - Pour changer de fichier hotLoad, se rendre dans webpack.config.js et changer le nom du fichier voulu correspondant en point d'entrée : entry: path.resolve(__dirname, "src/index.js").
   Changer également le path du template HTML si nécessaire.

   - Pour build le code pour la production : exécuter la commande npm run webpack ou npx webpack

   - 