# MongoDB Cheatsheet

## Documentation
[Official Website](https://docs.mongodb.com/)

## Basic Concepts & Shell Commands
`db.collection.<command>` : Db – implicit handle to the used database, collection – name of the used collection
`use <database>` : Switch to another database
`show collections` : Lists the available collections
`help` : Prints available commands and help

## Inserting Documents
-`db.collection.insert(<document or array of documents>, {keys,options})` : Insert a document or documents into collection

## Finding Documents
-`db.collection.findOne()` : Find one arbitrary document
-`db.collection.find().prettyPrint()` : Find all documents and using nice formatting
-`db.collection.findOne({'key':'value'})` : Find one document by corresponding attribute

# Finding Documents using Operators
-`db.collection.find({key:{$<OPERATOR>:<VALUE>}})` : Find documents whose attribute 'key' matches the operator.

## Updating Documents
-`db.collection.update({key1:value1}, {key2:value2})` : Replaces the whole document
-`db.collection.update({key:value},{$set : {operator:opt, class:c}})` : Sets / changes certain attributes of a given document
-`db.collection.update({key:value},{$unset : {operator : 1}})` : Sets / changes certain attributes of a given document
-`db.collection.update({key:value},{$unset : {operator : 1}})` : Removes an attribute from a given document

## Removing Documents
-`db.collection.remove({key:value})` : Removes the document
-`db.collection.remove({key:{$regex:’^USS\sE’}})` : Removes using operator

## Working with Indexes
-`db.collection.ensureIndex(keys, options)` : Creating an index
-`db.collection.dropIndex(keys, options)` : Dropping an index

## Indexes - Hints & Stats
-`db.collection.find ({key:value}).explain()` : Explains index usage
-`db.collection.stats()` : Index statistics
