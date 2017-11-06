## SQL : Introduction



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
