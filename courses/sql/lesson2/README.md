## Bases de SQL


***


## La syntaxe

Tout commence par un mot clé (généralement écrit en majuscule bien que non sensible à la casse), comme `INSERT`, `CREATE`, `DELETE`, ...

Ensuite ce sont les paramètes, cela diffère pour chaque requête.

Certaines bases de données demandent un `;` à la fin de la requête.


***


## Vu que tout fonctionne par tables :

#### Comment fait-on pour créer une table ?

On utilise le mot clé `CREATE TABLE` suivi du nom de la table, et enfin des informations concernant les colonnes.


***


## Pause exercices

Allez sur `localhost/phpmyadmin/`, et créez une base de données `test_cours`. Avec interclassement utf8_general.


***


## Pause exercices (suite)

Créez une table nommée : `blank`.

Cette dernière aura deux colonnes :
- id (primary key, not null, auto increment)
- content (varchar, 250 size, not null)

Utilisez l'interface graphique, une fois que c'est bon cliquez sur `Apreçu SQL`.


***

## Coooool ! On a une base de donnée avec une table.

...Mais maintenant on fait quoi ?


***

## SQL time


***


Nous allons utiliser le langage SQL pour communiquer avec notre base de données.
Les 4 commandes de bases sont :
  - INSERT pour ajouter une ligne de donnée
  - SELECT pour retrouver une ligne de donnée
  - UPDATE pour mettre à jour une ligne de donnée
  - DELETE pour supprimer une ligne de donnée



***


## INSERT

Pour ajouter une ligne de données dans la table :

```
INSERT INTO nom_de_la_table (colonne1, colonne2, colonne3) VALUE (1, 'nom1', 'prénom1');
```



***


## SELECT

Pour sélectionner des données :

```
SELECT * FROM nom_de_la_table;

SELECT (colonne1, colonne2) FROM nom_de_la_table;
```

__PS : ramenez pas la terre avec vous, ça peut boucher les tuyaux !__



***


## UPDATE

Pour mettre à jour une ligne :

```
UPDATE nom_de_la_table SET colonne1='nouvelle_valeur';
```


***


## DELETE

Pour supprimer une ligne de données dans la table :

```
DELETE FROM `nom_de_la_table`;
```


***


## Petit conseil

Pour les trois dernières requêtes, vous pouvez les écrire avec une clause `WHERE` !
C'est comme une condition, ceci nous permet de restreindre les lignes impactées. Et éviter de ramener la terre entière.

Ca évite aussi de modifier ou supprimer toute les lignes de table et seulement les lignes concernées !

La clause s'écrit comme ça :

```
DELETE FROM `nom_de_la_table` WHERE (colonne1='1');
```


***


## Types que l'on peu stocker

[https://mariadb.com/kb/en/mariadb/data-types/](https://mariadb.com/kb/en/mariadb/data-types/)


***


## Wait y'a pas les images ?! Et les vidéos, etc.

Ok c'est le principal soucis des bases de données, on évite de stocker les images, vidéos, medias, etc. dans une base de données. On enregistre plutôt leur chemin d'accès (qui est du coup généralement sur un autre serveur de stockage de média au fonctionnement bien différent).


***


## Pause exercices

Dans la table que l'on vient de créer, insérer une ligne avec le contenu : `_blank in the db`.
Rappelez vous, l'id sera mise toute seul.

Pour cela utilisez l'onglet SQL de `phpmyadmin`.


***


## Pause exercices (suite)

Insérez une seconde ligne, avec pour contenu `ok déjà à la deuxième ligne c'est pas pratique`.

Modifiez cette ligne pour que le contenu soit maintenant : `nan nan c'est génial`.


***


## Pause exercices (suite suite)

Supprimez cette dernière ligne.

Il ne doit maintenant rester qu'une seule ligne dans votre table. Pour vérifier, sélectionner toutes les lignes de la table.


***


## That's it !
