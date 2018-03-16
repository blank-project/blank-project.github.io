# MongoDB > Leçon 2 > Exercice 1

Importer les données contenues dans `data.json` dans une base appelée `lesson2`, dans une collection appelée `exercise1`.

Ces données représente des personnes ayant contribué à l'informatique.

```
mongoimport --db lesson2 --collection exercise1 --jsonArray --file data.json
```

En utilisant le shell `mongo` pratiquez les commandes vues en cours.
Ecrivez les commandes pour :
- Lister tous les documents.
- Trouver tous les documents ayant pour id `1`
- Trouver toutes les personnes dont le prénom est John.
- Trouver toutes les personnes qui sont mortes.
- Trouver toutes les personnes qui ne sont pas mortes.
- Trouver toutes les personnes nées après le 01 Janvier 1941.
- Trouver toutes les personnes qui n'ont pas eu de récompenses (attribut `awards`).
- Trouver toutes les personnes qui ont eu une récompense de la "Free Software Foundation" (attribut `awards`).
- Donner une date de naissance à Martin Odersky
- Créer une nouvelle personne appelée "Linus Torvalds", renseignez le maximum d'informations à son sujet.
- Créer une nouvelle personne appelée "Steve Jobs"
- Ah ouais en fait non, supprimez la
