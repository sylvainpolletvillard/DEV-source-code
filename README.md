# Projet

Projet généré par [Angular CLI] version 1.3.1 

## Execution

Il est impératif de lancer un `npm-install` pour créer le dossier node_modules.
Lancer avec `ng serve` et ouvrir dans le navigateur à l'URL http://localhost:4200/` .  
Ouverture du navigateur automatique avec `ng serve -o`.

## Créer un composant 

Lancer `ng generate component component name` pour générer un composant.

## Créer un service 

Lancer `ng generate component service name` pour générer un composant.

## Build

Lancer `ng build --prod --output-path docs --base-href https://creamng.github.io/Library/` pour build
le projet. Le dossier /docs contiendra le contenu à mettre dans le repo "Library" pour être disponible sur 
la page Git.

De plus, il est nécessaire de copier-coller le fichier "/docs/index.html" et de le renommer en "/docs/404.html" en n'oubliant
pas d'écraser au préalable l'ancien fichier.


## Tests unitaire

Lancer `ng test` pour executer les tests unitaires (aucun de créer pour le moment)

## Code Highlight

Le seul plugin JS utilisé est prettify.js permettant de structurer le `code` affiché sur la page.
Afficher du code sur la page, nous procédons de la manière suivante : 
- ` <div class="code">'
  `  <!--?prettify lang=html linenums=true?--> `avec commme choix html, css, javascript( pour les .ts)
  `   <pre class="prettyprint linenums"> `
  `     <code> `
- Il faut penser à modifier les éléments spéciaux comme ceci :   
           {     by   &#123;
           }     by   &#125;
           <     by   &#x3C;
           >     by   &#x3E;
           "     by   &#x22;
 (les trois derniers peuvent être générer avec https://mothereff.in/html-entities
 
## Credits

Worldline - 2017 - CreamNG 


