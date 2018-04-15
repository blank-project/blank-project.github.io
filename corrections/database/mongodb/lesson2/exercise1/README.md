- Lister tous les documents.
```json
{}
```
- Trouver tous les documents ayant pour id `1`
```
{ _id : 1}
```
- Trouver toutes les personnes dont le prénom est John.
```
{ "name.first" : "John" }
```
- Trouver toutes les personnes qui sont mortes.
```
{ "death" : { $exists : true } }
```
- Trouver toutes les personnes qui ne sont pas mortes.
```
{ "death" : { $exists : false } }
```

- Trouver toutes les personnes qui n'ont pas eu de récompenses (attribut `awards`).
```
{ "awards" : { $exists : false } }
```
- Trouver toutes les personnes qui ont eu une récompense de la "Free Software Foundation" (attribut `awards`).
```
{ "awards" : { $elemMatch : { "by" : "Free Software Foundation" }} }
```

- Trouver toutes les personnes nées après le 01 Janvier 1941.
```
{ birth : { $gte : ISODate("1941-01-01") } }
```

- Donner une date de naissance à Martin Odersky

```
db.exercise1.update({ name: { first: 'Martin', last: 'Odersky'}}, { $set: { birth: ISODate('1958-09-05') } })
```

- Créer une nouvelle personne appelée "Linus Torvalds", renseignez le maximum d'informations à son sujet.
``̀
db.exercise1.insert({ name: { first: "Linus", last: "Torvalds"}})
```

- Créer une nouvelle personne appelée "Steve Jobs"
```
db.exercise1.insert({ name: { first: 'Steve', last: 'Jobs' }})
```

- Ah ouais en fait non, supprimez la
̀̀̀```
db.exercise1.deleteOne({ name: { first: 'Steve', last: 'Jobs' }})
```
