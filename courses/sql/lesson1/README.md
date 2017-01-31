# SQL et base de données



---



Qu'est ce qu'une base de données ?

Une base de données est un ensemble de données organisées et structurées afin d'en faciliter l'accès et la modification.



---



Qu'est ce que <acronyme title="Structured Query Language">SQL</acronym> ?

C'est le langage de base de données le plus répandu qui permet d'interagir avec une base de donnée.



---



# Oragnisation d'une base de données


***


Une base de données est constituée de plusieurs tables. Chaque tables contiendra une série d'informations différentes.

Exemple pour Belleville Citoyenne :
  - Une table pour les apprenants de blank
  - Une table pour les membres de l'association
  - Une table pour le matériel de l'association
  - Une table pour les bénévoles


***

Une table est organisé de cette manière, en lignes et en colonnes :

| id    |     nom |   prénom     |
| ------| ----------| ---------      |
| 1     |     Nom1  |      prénom1   |
| 2     |      Nom2 |     prénom2  |
| 3     |      Nom3 |      prénom3    |


***


L'id correspond à un identifiant unique permettant de retrouver la ligne d'information voulu.

Les colonnes suivantes correspondent aux informations enregistrées en base.




---



# Comment communiquer avec la base de données ?


***


Nous allons utiliser le langage SQL pour communiquer avec notre base de données.
Les 4 commandes de bases sont :
  - INSERT pour ajouter une ligne de donnée
  - SELECT pour retrouver une ligne de donnée
  - UPDATE pour mettre à jour une ligne de donnée
  - DELETE pour supprimer une ligne de donnée



***


## INSERT

Pour ajouter une ligne de données dans la table :

```
INSERT INTO nom_de_la_table VALUE (1, 'nom1', 'prénom1')
```



***


## SELECT

Pour sélectionner des données :
```
SLECT * FROM nom_de_la_table
```



***


## UPDATE

Pour mettre à jour une ligne :
```
UPDATE nom_de_la_table SET prénom = 'prénom_mis_à_jour' WHERE condition
```


***


## DELETE

Pour supprimer une ligne de données dans la table :

```
DELETE FROM `nom_de_la_table` WHERE condition
```
