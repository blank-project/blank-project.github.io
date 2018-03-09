# MongoDB + Node



---



## Les Drivers

Les Drivers (ou Pilotes) sont des logiciels permettant d'accéder à ressource matérielle en fournissant une API.

Exemples : drivers d'imprimantes, de bases de données.


***


### Drivers de Base de Données

Par extension, on appelle Driver de Base de Données un logiciel/librairie permettant d'accéder à une base de données dans un langage de programmation donné.


***


### Driver MongoDB pour Node.js

Le Driver officiel MongoDB pour Node.js est `mongodb`

On peut l'installer dans une application Node.js :

```bash
npm install mongodb --save
```

Il suffit ensuite de charger le module `mongodb` pour utiliser une base de données MongoDB dans une application Node.js.

```javascript
const mongodb = require('mongodb');
```



---



## Client MongoDB

Le client MongoDB supporte 2 modes :
- Un mode ES5 basé sur des Callbacks
- Un mode ES6+ basé sur des Promises


***


### Création d'un client

Pour se connecter à la base de données, on utilise la méthode `connect` de la classe `MongoClient`.

On va ensuite récupérer un Objet `Db` qui représente une base de données grâce à la méthode `db`.

C'est l'équivalent de la commande shell `use <DB>`.

[Documentation](http://mongodb.github.io/node-mongodb-native/3.0/reference/ecmascriptnext/connecting/)



***


### Lecture de Documents

Pour lire des documents, on récupère la collection grâce à la méthode `collection` de l'objet `Db`.

On récupère ensuite les documents en utilisant la méthode `find`.

[Documentation](http://mongodb.github.io/node-mongodb-native/3.0/tutorials/crud/#read-methods)



***


### Insertion de Documents

Pour insérer des documents, on récupère la collection grâce à la méthode `collection` de l'objet `Db`.

On insère ensuite les documents en utilisant la méthode `insertOne` ou `insertMany`.

[Documentation](http://mongodb.github.io/node-mongodb-native/3.0/tutorials/crud/#inserting-documents)



***


### Mise à jour de Documents

Pour mettre à jour des documents, on récupère la collection grâce à la méthode `collection` de l'objet `Db`.

On met ensuite à jour les documents en utilisant la méthode `updateOne` ou `updateMany`.

[Documentation](http://mongodb.github.io/node-mongodb-native/3.0/tutorials/crud/#updating-documents)




***


### Suppression de Documents

Pour supprimer des document, on récupère la collection grâce à la méthode `collection` de l'objet `Db`.

On supprime ensuite les documents en utilisant la méthode `deleteOne` ou `deleteMany`.

[Documentation](http://mongodb.github.io/node-mongodb-native/3.0/tutorials/crud/#removing-documents)
