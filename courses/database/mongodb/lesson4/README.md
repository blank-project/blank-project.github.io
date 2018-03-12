## Mongoose


***


## Qu'est-ce que Mongoose

Mongoose est un package node qui joue le role d'ODM (Object Document Mapper). Ce package va nous permettre d'organiser notre code concernant MongoDB.

Il nous donne une API, permettant de nous connecter à une base de donnée MongoDB, créer des documents, les lire, les modifier et les supprimer.



---



## Comment l'utiliser ?


***


## Installation

Comme tout package node, il faut l'installer comme ceci : `npm install mongoose`.


***


## Require

Pour l'utiliser dans notre appli, il faut le require :

```js
var mongoose = require('mongoose');
```


***


## On est maintenant pret à l'utiliser !



---



## Utilisation de mongoose


***


## Connexion à une Base de Données

Pour se connecter à une base de données, on utilise la fonction `connect` de notre package :

```js
mongoose.connect('mongodb://localhost/dbname');
```


***


## Vérifions que l'on est bien connecté

Avant d'ouvrir une connexion, on peut ajouter des event listeners qui nous spécifient que notre connexion est bien ouverte.

```js
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
});
```


***


## Cloturer une connexion
Pour cloturer une connexion, utiliser : `mongoose.connection.close()`.



---



## Les Schémas

Un Schéma est un objet définissant la structure d'une table. Chaque Schéma possède une liste de propriétés correspondant aux valeurs que l'on veut stocker.
Il est définit comme ceci :


```js
var rectangleSchema = mongoose.Schema({
  height: Number,
  width: Number
});
```


***


## Les types de valeurs

Lorsque l'on déclare un Schéma, chaque propriété se voit attribuer un type. Voici les types disponibles :

* String
* Number
* Date
* Buffer
* Boolean
* Mixed
* ObjectId
* Array


***


## Création d'un model

Un model, est une classe créée à partir d'un Schéma. Il se créé comme ceci :

```js
var rectangleSchema = mongoose.Schema({
  height: Number,
  width: Number
});

var Rectangle = mongoose.model('Rectangle', rectangleSchema);
```



---



## L'API d'un model

Un model possède une API permettant de sauvegarder, lire, modifier et supprimer les données de la table qui y est associée.

Cette API est extrèmement similaire à celle donnée par le client `mongo` que l'on a utilisé dans le terminal.

Elle nous permet de faire ce que l'on appelle un `CRUD` (Create Read Update Delete) simplement.



---



## Sauvegarder des données
Pour sauvegarder des données, on va utiliser l'API fournie par les modèles mongoose.


***


## Première étape
Créer un nouvel objet à partir d'un modèle.

```js
var rectangle = new Rectangle({ height: 20, width: 30 });
```


***


## Deuxième étape
Sauvegarder cette instance.

```js
rectangle.save()
         .then((newRectangle) => { //if everything went well })
         .catch((err) => { //if an error occured });
```


***


## Alternative à la Deuxième étape

```js
rectangle.save(function(err, newRectangle) {
  console.log(newRectangle);
})
```


***

## Sinon !
Vous pouvez utiliser create, une API disponible directement sur le modèle, qui renvoie elle aussi une promise.

```js
Rectangle.create({ height: 20, width: 30})
         .then((newRectangle) => {})
         .catch((err) => {});
```


***


## Pour éviter le callback hell

On peut utiliser le `async-await` maintenant!

```js
(async () => {
  var saved = await rectangle.save();
  // do something
})();
```


***

## Pour la suite

Tous les examples suivants prennent en considération que vous exécutez votre requete / fonction à l'intérieur d'une fonction asynchrone.



---



## Lire des données
Pour lire des données, nous pouvons utiliser exactement les memes fonctionnalités que dans le shell, mais appliquées au model avec `find` et `findOne`.

```js
try {
  var rectangles = await Rectangle.find({});
} catch(err) {
  console.log('erreur', err);
}
```


***


## Utiliser les opérateurs
Pour utiliser les opérateurs, faites exactement comme si vous créiez une requete dans le shell.

```js
try {
  var rectangles = await Rectangle.find({
    height: { $gte: 20 }
  });
} catch(err) {
  console.log('erreur', err);
}
```


***


## Le Query Builder
Vous pouvez aussi utiliser le QueryBuilder. Il comprend les memes opérateurs que le shell ainsi qu'une clause `where` comportant, en paramètre la propriété discriminante.


```js
try {
  var rectangles = await Rectangle.find().where('height').gte(10);
} catch(err) {
  console.log('erreur', err);
}
```

*On peut enchainer les where().gte().where().lt(), etc.*



---



## Modifier un document
Pour modifier un document, on utilisera la méthode : `update` du model ainsi que l'opérateur `$set`. Le retour de la promise est un objet de cette forme là : `{ n: 1, nModified: 1, ok: 1 }`.

```js
try {
  var isUpdateOk = await Rectangle.update({ _id: id }, { $set: { height: 21 }});
} catch (err) {
  console.log('erreur', err);
}
```


***


## Autre option
Si l'on veut que le document NON modifié nous soit retourné, on peut utiliser la fonction : `findByIdAndUpdate`. Elle prend en premièr paramètre l'id de l'objet à modifier.

```js
try {
  var updatedRectangle = await Rectangle.findByIdAndUpdate('5aa697e27db33b76f73e11a8', { $set: { height: 21 }});
  console.log(updatedRectangle);
} catch (err) {
  console.log('erreur', err);
}
```



---



## Supprimer un document
Pour supprimer un document, vous devez d'abord le récupérer de la base de données. Ensuite, sur ce document, utilisez la méthode `remove`. Cette dernière retourn l'objet supprimé (au cas où ce n'était pas intentionnel).

```js
try {
  var rectangle = await Rectangle.findOne({ _id: '5aa697e27db33b76f73e11a8' });
  var deletedRectangle = await rectangle.remove();
} catch(err) {
  console.log('erreur', err);
}
```



---



## Plus d'infos sur la doc !

* [Doc API](http://mongoosejs.com/docs/api.html)
* [Guide Général](http://mongoosejs.com/docs/guide.html)
