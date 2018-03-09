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
