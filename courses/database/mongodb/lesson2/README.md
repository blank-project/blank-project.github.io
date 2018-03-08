# MongoDB



---



### Insérer des données

- `db.collection.insert(<document or array of documents>, options)` : Insère un ou plusieurs documents dans la collection _collection_



---



### Requêter des données

- `db.collection.findOne(query)` : Recherche un document en passant une requête JSON _query_
- `db.collection.find(query).prettyPrint()` : Recherche en passant une requête JSON _query_ et affiche des documents dans un format lisible.

Les [requêtes MongoDB](https://docs.mongodb.com/manual/reference/operator/query/) s'écrivent sous la forme :
```json
{
  attribute : value,
  ...
}
```

- *attribute* est le nom de l'attribut
- *value* est la valeur attendue ou un opérateur.



***



Exemple :
```
db.collection.findOne(){
  name : 'test'
})
```
va retourner tous les documents dont l'attribut _name_ a pour valeur _test_.



***


### Les opérateurs de requête

[TODO](https://docs.mongodb.com/manual/reference/operator/query/)



---



## Mettre à jour des données

- `db.collection.update(query, document)` : Remplace le document entier
- `db.collection.update({key:value},{$set : {operator:opt, class:c}})` : Sets / changes certain attributes of a given documentt
- `db.collection.update({key:value},{$unset : {operator : 1}})` : Removes an attribute from a given document

La méthode `update` ne met à jour qu'un élement.

Pour mettre à jour plusieurs élements passer l'option *multi*, ou utiliser `updateMany`



***


### Les opérateurs de mises à jour

[TODO](https://docs.mongodb.com/manual/reference/operator/update/)



---



## Supprimer des documents
- `db.collection.remove(query)` : Supprime les document vérifiant la requête _query_
