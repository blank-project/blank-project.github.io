# Node.js > Lesson1 > Exercise3

## Créer une application
En utilisant `npm init`, créez une nouvelle application appelée **test-npm** Node.js dans un dossier dédié.

Que constatez-vous une fois le programme terminé ?

## Ajouter du code

Créez un fichier `index.js` contenant :

```javascript
console.log('Hello World !');
```

## Ajout d'un dépendance

Nous allons utiliser la librairie [chalk](https://github.com/chalk/chalk) pour ajouter de la couleur à l'affichage dans la console.

Exécuter `npm install chalk --save`

Que constatez-vous :
 - dans le dossier de votre application ?
 - dans le fichier `package.json` ?


## Utilisation de la dépendance

Chargez dans votre programme le paquet `chalk` en utilisant la fonction `require`.

Utilisez `chalk` pour afficher 'Hello World' en rouge.
