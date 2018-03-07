# Base de Données : Généralités



---



## Définition

> Une base de données est une collection de données organisées de façon à être facilement accessibles, administrées et mises à jour.

> Le dispositif comporte un système de gestion de base de données (abréviation : SGBD) : un logiciel moteur qui manipule une ou plusieurs base de données et dirige l'accès à son contenu.



---



## Relationnel ?

Une base de données **relationnelle** est une base de données où l'information est organisée dans des tableaux à deux dimensions appelés **tables**.

Ces tables peuvent êtres liées entres elles.


***


Une table est une liste d'informations pouvant être regroupées.

Exemple pour Belleville Citoyenne :
  - Une table pour les apprenants de blank
  - Une table pour les membres de l'association
  - Une table pour le matériel de l'association

***


Une table est composée de lignes et de colonnes.

Chaque colonne a un titre définissant l'information qu'elle contient. Et chaque ligne correspond à une entité.

|id|name|firstname|birthday|
|-|-|-|-|
|1|Nom1|Prénom1|1970-01-01|
|2|Nom2|Prénom2|2000-01-01|
|3|Nom3|Prénom3|2038-01-19|



---



## SQL

SQL (sigle de Structured Query Language, en français langage de requête structurée) est un langage informatique normalisé servant à exploiter des bases de données relationnelles.

SQL permet notamment de rechercher, d'ajouter, de modifier ou de supprimer des données dans les bases de données relationnelles.


***


Voir le cours sur [SQL](../../sql/)



---



## NoSQL


En ce moment une autre catégorie de **SGBD** a fait son apparition, le NoSQL (qui signifie : Not Only SQL).

Il sert à gérer les bases de données non relationnelles :
 - Documents
 - Graphes
 - Clé-Valeurs
 - Colonnes


***


## MongoDB

MongoDB est un SGBD NoSQL très connu. Il stocke les données sous forme de **documents** dans un format s'apparentant à du **JSON**

Nous allons l'étudier dans le cadre des cours de \_blank.
