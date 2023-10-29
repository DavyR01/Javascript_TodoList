Installation : 

- npm init -y // Création package.json
npm i -D @babel/cli @babel/core @babel/preset-env babel-loader css-loader html-webpack-plugin style-loader webpack webpack-cli webpack-dev-server

- Rajouter node_modules et dist dans le fichier .gitignore.
- Modifier le fichier package.json
- Importer le fichier de style css.
- Pour utiliser des polyfills avec webpack pour la compatibilité des navigateurs sur les fonctionnalités récentes :
   - npm i -D core-js@3 regenerator-runtime
   - Puis modifier le fichier babel.config

Astuces : 

   - Pour changer de fichier hotLoad, se rendre dans webpack.config.js et changer le nom du fichier voulu correspondant en point d'entrée : entry: path.resolve(__dirname, "src/index.js").
   Changer également le path du template HTML si nécessaire.

   - Pour build le code pour la production : exécuter la commande npm run webpack ou npx webpack

   - 