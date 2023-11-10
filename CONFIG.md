Installation : 

- npm init -y // Création package.json
npm i -D @babel/cli @babel/core @babel/preset-env babel-loader css-loader html-webpack-plugin style-loader webpack webpack-cli webpack-dev-server

- Crée un dossier src avec un index.js et index.html.
- Rajouter node_modules et dist dans la création d'un fichier .gitignore.
- Modifier le fichier package.json
- Créer un fichier babel.config.js et le personnaliser.
- Créer un fichier webpack.config.js et le configurer.
- Importer le fichier de style css.
- Pour utiliser des polyfills avec webpack pour la compatibilité des navigateurs sur les fonctionnalités récentes :
   - npm i -D core-js@3 regenerator-runtime
   - Puis modifier le fichier babel.config

Astuces : 

   - Pour changer de fichier hotLoad, se rendre dans webpack.config.js et changer le nom du fichier voulu correspondant en point d'entrée : entry: path.resolve(__dirname, "src/index.js").
   Changer également le path du template HTML si nécessaire.

   - Pour build le code pour la production : exécuter la commande npm run webpack ou npx webpack => Cela va exécuter webpack, recupérer le webpack.config.js et build l'ensemble de l'application. Cela ajoute un fichier dist avec les différents bundles générés. Le main.bundle.js qui contient tout le script, le javascript de l'application.
   Ce build est ce que l'on va retourner au client, à l'utilisateur.

   -