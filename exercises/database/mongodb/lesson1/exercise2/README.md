# MongoDB > Leçon 1 > Exercice 2

## Les bases

Lancer le shell MongoDB : `mongo` dans un terminal.

Si vous avez une erreur du type :

```
2018-03-07T20:15:27.606+0100 W NETWORK  [thread1] Failed to connect to 127.0.0.1:27017, in(checking socket for error after poll), reason: Connection refused
2018-03-07T20:15:27.612+0100 E QUERY    [thread1] Error: couldn't connect to server 127.0.0.1:27017, connection attempt failed :
```

Il faut démarrer le service MongoDB :
```
sudo service mongod start
```

Vous devez maintenant voir quelque chose ressemblant à

```
MongoDB shell version v3.4.10
connecting to: mongodb://127.0.0.1:27017
MongoDB server version: 3.4.10
>
```

On vient de se connecter au serveur MongoDB tournant sur l'IP 127.0.0.1 sur le port 27017 en utilisant le protocole mongodb.

On peut maintenant envoyer des commandes à ce serveur. Mais lesquelles ?

```
> help
```

Les lignes intéressantes sont :
```
show dbs                     show database names
show collections             show collections in current database

use <db_name>                set current database
db.foo.find()                list objects in collection foo
db.foo.find( { a : 1 } )     list objects in foo where a == 1
```

## C'est parti !

Avec MongoDB, pas besoin de créer une Base de Données, ni une Collection. Elles seront créées automatiquement à l'insertion des données.

Listons les bases de données :
```
> show dbs
```

On va donc se rendre dans la base de données **test** (qui n'existe pas encore) :

```
> use test
```

Listons les bases de données :
```
> show dbs
```
On remarque que ceci n'a pas créé de base de données.

## Les collections

Listons les collections :
```
> show collections
```

Il n'y a pas de collections.
Pour accéder à une collection, on écrit db.nomDeMaCollection.

```
db.test.help()
```

Regardons ce qu'il y a dans la collection :

```
db.test.find()
```

Il n'y a rien !

On insère des données dedans :
```
db.test.insertOne({ name : "_blank", skills : ["HTML", "CSS", "JavaScript", "Node.js"]})
```

On cherche les données que l'on vient d'insérer :
```
db.test.find()
```

Si l'on relance
```
> show dbs
```
ou
```
> show collections
```


On remarque que l'insertion de données a eu pour effet de créer la base de données et la collection associée.
