
# Kasa

Créer une application web de location immobilière avec React.
Refonte totale du site pour passer à une stack complète en JavaScript avec NodeJS côté back-end, et React côté front-end.

Avant de démarrer votre travail sur ce projet, nous vous conseillons de :
    1. Lire le scénario en entier, chaque section du projet ainsi que les documents fournis.
    2. Consulter le guide des étapes clés avec des recommandations et des ressources pour organiser votre travail.
    3. Préparer une liste de questions pour votre première session de mentorat.

Kasa vous recrute en tant que développeur front-end en freelance pour développer sa nouvelle plateforme web. Kasa est dans le métier de la location d’appartements entre particuliers depuis près de 10 ans maintenant. Avec plus de 500 annonces postées chaque jour, Kasa fait partie des leaders de la location d’appartements entre particuliers en France.
L'occasion parfaite pour vous d'ajouter une belle référence à votre portfolio de freelance !

Le site de Kasa a été codé il y a maintenant plus de 10 ans en ASP.NET avec un code legacy important. Laura, la CTO, a donc lancé une refonte totale pour passer à une stack complète en JavaScript avec NodeJS côté back-end, et React côté front-end. Kasa en a également profité pour commander de nouvelles maquettes auprès de son designer habituel, qui est en freelance. Un gros chantier pour cette année !

Un point est prévu avec la CTO plus tard dans la semaine, mais pour que vous puissiez vous familiariser avec les enjeux de votre mission, vous trouvez le récapitulatif suivant dans votre boîte mail :

Objet : Brief refonte site Kasa
De : Laura
À : Moi
    Hello,
    Bienvenue ! Tu vas pouvoir nous aider à donner vie à un chantier sur lequel on travaille depuis plusieurs mois.

    Ton objectif : Démarrer le projet React et développer l’ensemble de l’application, les composants React, les routes React Router, en suivant les maquettes Figma (responsives !) et toutes les infos que je te donne ci-dessous. Et ce avec un code de qualité ! 
    Back-end / data : Le recrutement de la personne en charge du back-end n'est pas terminé et va prendre plus de temps que prévu. Du coup, il va falloir que tu fasses sans pour le moment. Je t'ai extrait les 20 dernières annonces de logements dans ce fichier JSON pour que tu puisses construire le Front qui correspond.

Contraintes techniques : Tu trouveras les coding guidelines de Kasa ici. Comme tu le verras, nous utilisons habituellement Create React App pour créer les applications React, mais tu peux utiliser un autre bundler comme Vite par exemple si tu préfères.

Voilà, j'espère que ce petit récapitulatif t'aura donné suffisamment de pistes pour aborder sereinement tes premiers jours chez nous.

Très bonne journée à toi !

Laura

Plus tard dans la journée, vous recevez un e-mail de Paul, le designer, qui vous donne plus d’informations sur le design et les fonctionnalités du site.

Objet : Fonctionnalité et design
De : Paul
À : Moi
Salut,
Bienvenue parmi nous ! Laura m’a dit de te briefer sur le design de la nouvelle version du site, alors voici les infos clés.

Design :
Voici les maquettes sur Figma pour le design d’interface. J’ai l’habitude de travailler avec la logique de composants sur Figma ; Sandra m’a dit que ça te faciliterait le travail sur React. Tu trouveras toutes les ressources dont tu as besoin directement dans la maquette (logo, icônes pour les composants, etc.). Pour cela, il suffit de cliquer sur la ressource souhaitée et de faire "Exporter" au format voulu. Sur les vignettes des logements, pour les images de couverture, j'ai mis une rectangle orange que tu peux remplacer par l'image correspondante.
Pour avoir un rendu le plus réaliste possible de l'application, utilise les prototypes du site disponibles ici. Ils te permettront notamment de voir les animations attendues sur les menus déroulants (Collapse).

Contraintes fonctionnelles
Quelques précisions sur les fonctionnalités du site :
    - Pour le défilement des photos dans la galerie (composant Gallery) :
        - Si l'utilisateur se trouve à la première image et qu'il clique sur "Image précédente", la galerie affiche la dernière image.
        - Inversement, quand l'image affichée est la dernière de la galerie, si l'utilisateur clique sur "Image suivante", la galerie affiche la première image.
        - S'il n'y a qu'une seule image, les boutons "Suivant" et "Précédent" ainsi que la numérotation n'apparaissent pas.
    - La galerie doit toujours rester de la même hauteur, celle indiquée sur la maquette Figma. Les images seront donc coupées et centrées dans le cadre de l’image.
    - Collapse : Par défaut, les Collapses sont fermés à l'initialisation de la page.
    - Si le Collapse est ouvert, le clic de l'utilisateur permet de le fermer.
        oInversement, si le Collapse est fermé, un clic permet de l'ouvrir.

Bon courage pour le développement, j’ai hâte de voir ce que ça va donner !

Paul
Ça y est, vous avez toutes les informations nécessaires, vous pouvez démarrer votre développement !
Utilisation de Sass et animations : les contraintes diffèrent selon votre parcours :
Si vous êtes étudiant sur le parcours Développeur Web, vous devez obligatoirement utiliser Sass pour générer le style CSS du site web, ainsi que mettre en place l'animation CSS du menu déroulant.
Si vous êtes étudiant sur le parcours Intégrateur Web, ceci n'est pas obligatoire puisque vous avez déjà été évalués sur un projet passé. Il est quand même recommandé de le faire afin de pratiquer sur ces compétences clés.
Pour rappel, afin de vous aider à réaliser ce projet, vous pouvez consulter ce guide d’étapes à suivre, qui contient des recommandations et des ressources pour organiser votre travail.

Compétences évaluées

- Configurer la navigation entre les pages de l'application avec React Router
- Développer des éléments de l'interface d'un site web grâce à des composants React
- Mettre en œuvre des animations CSS
- Développer une interface web avec Sass
- Initialiser une application avec Create React App

________________________________________

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
