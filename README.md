# Kasa
Créer une application web de location immobilière avec React.
Refonte totale du site pour passer à une stack complète en JavaScript avec NodeJS côté back-end, et React côté front-end. 

Contraintes fonctionnelles

Quelques précisions sur les fonctionnalités du site :

    - Pour le défilement des photos dans la galerie (composant Gallery) :
        - Si l'utilisateur se trouve à la première image et qu'il clique sur "Image précédente", la galerie affiche la dernière image. 

        - Inversement, quand l'image affichée est la dernière de la galerie, si l'utilisateur clique sur "Image suivante", la galerie affiche la première image. 

        - S'il n'y a qu'une seule image, les boutons "Suivant" et "Précédent" ainsi que la numérotation n'apparaissent pas.

    - La galerie doit toujours rester de la même hauteur, celle indiquée sur la maquette Figma. Les images seront donc coupées et centrées dans le cadre de l’image.

    - Collapse : Par défaut, les Collapses sont fermés à l'initialisation de la page. 

    - Si le Collapse est ouvert, le clic de l'utilisateur permet de le fermer.
        - Inversement, si le Collapse est fermé, un clic permet de l'ouvrir.# Getting Started with Create React App

Ce projet a été bootstrap avec [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

Ce projet a été bootstrap avec:

### `npm start`

Exécute l’application en mode développement.\
Ouvrir [http://localhost:3000](http://localhost:3000) pour l’afficher dans votre navigateur.

La page se rechargera lorsque vous apporterez des modifications.\
Vous pouvez également voir des erreurs de lint dans la console.

### `npm test`

Lance le coureur de test en mode montre interactive.\
Consultez la section sur [running tests](https://facebook.github.io/create-react-app/docs/running-tests) pour plus d'information.

### `npm run build`

Crée l’application pour la production dans le dossier « build »..\
Il intègre correctement React en mode production et optimise la construction pour les meilleures performances.

La compilation est minifiée et les noms de fichiers incluent les hachages.\
Votre application est prête à être déployée!

Consultez la section sur [deployment](https://facebook.github.io/create-react-app/docs/deployment) pour plus d'information.

### `npm run eject`

**Note: il s’agit d’une opération à sens unique. Une fois « éjecté », vous ne pouvez pas revenir en arrière.!**

Si vous n’êtes pas satisfait de l’outil de compilation et des choix de configuration, vous pouvez « éjecter » à tout moment. Cette commande supprimera la dépendance de compilation unique de votre projet.

Au lieu de cela, il copiera tous les fichiers de configuration et les dépendances transitives (webpack, Babel, ESLint, etc.) directement dans votre projet afin que vous ayez un contrôle total sur eux. Toutes les commandes, sauf « eject », fonctionneront toujours, mais elles pointeront vers les scripts copiés afin que vous puissiez les modifier. À ce stade, vous êtes seul.

Il n’est jamais nécessaire d’utiliser l’éjection. L’ensemble de fonctionnalités organisées convient aux déploiements de petite et moyenne taille, et vous ne devriez pas vous sentir obligé d’utiliser cette fonctionnalité. Cependant, nous comprenons que cet outil ne serait pas utile si vous ne pouviez pas le personnaliser lorsque vous êtes prêt pour cela.

## Learn More

Vous pouvez en savoir plus dans le [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

Pour apprendre React, consultez le[React documentation](https://reactjs.org/).

### Code Splitting

Cette section a déménagé ici: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

Cette section a déménagé ici: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

Cette section a déménagé ici: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

Cette section a déménagé ici : [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

Cette section a déménagé ici: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

Cette section a déménagé ici: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
