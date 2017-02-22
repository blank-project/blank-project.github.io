## SQL et base de données



---



## Qu'est ce qu'une base de données ?

Une base de données est un ensemble de données organisées et structurées afin d'en faciliter l'accès, la gestion, et la modification.



---



## Qu'est ce que <acronym title="Structured Query Language">SQL</acronym> ?

C'est le langage de base de données le plus répandu qui permet d'interagir avec une base de donnée. Ces bases de données sont dites relationnelles. Cependant ce n'est pas les seules bases de données que l'on retrouve.

En ce moment un autre langage a fait son apparition, le NoSQL (qui signifie : Not Only SQL) qui sert à gérer les bases de données non relationnelles (documents, distibuées, non relationnelles, etc.)



---



## Ok mais c'est quoi une base de données RELATIONNELLE ?

C'est une base de données où les relations entre les éléments qui la compose, sont fortes. Par exemple, un utilisateur en suit d'autres, un utilisateur a des posts, etc.

Ce sont des relations entre utilisateurs et utilisateurs, ainsi qu'entre utilisateurs et posts.



---



## Organisation d'une base de données


***


## Une base de données est constituée de plusieurs tables.

Une table est une liste d'informations pouvant être regroupées.

Exemple pour Belleville Citoyenne :
  - Une table pour les apprenants de blank
  - Une table pour les membres de l'association
  - Une table pour le matériel de l'association
  - Une table pour les bénévoles


***


## Une table est composée de lignes et de colonnes :

Chaque colonne a un titre définissant l'information qu'elle contient. Et chaque ligne correspond à une entité.

|id|nom|prénom|
|-|-|-|
|1|Nom1|prénom1|
|2|Nom2|prénom2|
|3|Nom3|prénom3|


***


## Primary key

L'id correspond à un identifiant unique permettant de retrouver la ligne d'information voulu.

C'est généralement un entier incrémenté automatiquement par la base de donnée elle même.

C'est ce que l'on appelle une `primary key`.



---



## Avant de passer à la pratique, un peu de culture !


***


## L'exécution des requêtes

Le SQL est un langage interprété !

A chaque requête que vous faites, le moteur de la base de donnée va parser cette dernière et l'exécuter via un `worker`.

Une chose à laquelle il faut faire attention est : l'écriture des requêtes. Ramenez pas la terre entière pour rien ! Le minimum, est souvent suffisant. Il ne faut pas saturer les workers.

Chaque requête est mise dans une "queue" et exécutée par un "worker". Votre requête sera exécutée lorsqu'un worker sera disponible.


***


## Qu'est-ce que le cache ?

Beaucoup de bases de données mettes les requêtes les plus utilisées en `cache`. Cela signifie qu'elles sauvegardent le résultat tant qu'il n'y a pas eu de modification sur les éléments. Parfois obsolète le cache des bases de données est maintenant remplacé par des caches applicatifs comme `redis`. Ce sont généralement des couples `clé : valeur` améliorés.


***


## N'oubliez pas

Généralement les données sont stockées à un seul endroit. Le minimum de requêtes possibles est important !


***


## Comment communiquer avec la base de données ?

Tout dépend du type de la base de donnée. Si cette dernière est relationnelle on préfèrera le SQL et sinon le NoSQL.

Dans notre cas, en SQL !



---



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
