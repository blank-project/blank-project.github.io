# MongoDB



---



### Insérer des données

- `db.collection.insert(<document or array of documents>, {keys,options})` : Insert a document or documents into collection



---



### Requêter des données

- `db.collection.findOne()` : Find one arbitrary document
- `db.collection.find().prettyPrint()` : Find all documents and using nice formatting
- `db.collection.findOne({'key':'value'})` : Find one document by corresponding attribute



***



### Les opérateurs

- `db.collection.find({key:{$<OPERATOR>:<VALUE>}})` : Find documents whose attribute 'key' matches the operator.



---



## Mettre à jour des données

- `db.collection.update({key1:value1}, {key2:value2})` : Replaces the whole document
- `db.collection.update({key:value},{$set : {operator:opt, class:c}})` : Sets / changes certain attributes of a given document
- `db.collection.update({key:value},{$unset : {operator : 1}})` : Sets / changes certain attributes of a given document
- `db.collection.update({key:value},{$unset : {operator : 1}})` : Removes an attribute from a given document



---



## Supprimer des documents
- `db.collection.remove({key:value})` : Removes the document
