# Dictionnaires


***


## Aujourd'hui

- La dernière fois on a vu deux structures de données importantes: les listes et
  les tableaux.

- Aujourd'hui on va parler des dictionnaires (aussi appelés maps et tableaux
  associatifs)
- Ils sont aussi très importants; ce sont les objets en javascript
- Ensuite on va se servir de chaînes de caractères, de séquences et de
  dictionnaires pour un exercice pratique: compter les fréquences de mots dans
  des documents pour les indexer.


***


## Petites révisions: variables et objets

- https://goo.gl/pgTgE3
- https://goo.gl/JWWfYz
- https://goo.gl/1PbSeG
- https://goo.gl/SffCyi
- https://goo.gl/5cCzd2
- https://goo.gl/mzueqU
- https://goo.gl/k8Qz66
- https://goo.gl/utGSVY


***


## Les dictionnaires


```
{
  "name": "Paris",
  "surface": {"value": 105.4, "unit": "km^2"},
  "population": 2241346
}
```

- https://fr.wikipedia.org/wiki/Tableau_associatif
- vous les connaissez: ce sont les objets en javascript
- ils associent des clés à des valeurs, comme un carnet d'adresses ou un index
  dans une base de données.
- ils permettent de retrouver très rapidement la valeur associée à une clé (en
  temps logarithmique si implémentés avec un heap ou rb tree, en temps
  quasi-constant si implémentés avec des tables de hachage)


***


## Implémentation: avec une table de hachage


- on a un certain nombre de "buckets" - par exemple des dossiers
- on a une "fonction de hachage" qui calcule l'indice d'un bucket pour une
  donnée à insérer - par exemple extraire la première lettre du nom si on a un
  classeur par lettre de l'alphabet.
- c'est ce qui est fait par les objets en javascript



***


## Implémentation: avec un arbre de recherche

- suppose qu'il y a une relation d'ordre définie pour le type de données qu'on
  veut ranger dedans
- les structures d'arbre binaire de recherche comme le red-black tree permettent
  de retrouver un élément en temps logarithmique


***


## Exercices: fréquences de mots

- on peut représenter un texte par la fréquence d'apparition des mots qu'il contient.
- par exemple:

"un tableau associatif est un type de données associant à un ensemble de clefs
un ensemble correspondant de valeurs" -> {'associant': 1, 'associatif': 1,
'clefs': 1, 'correspondant': 1, 'de': 3, 'données': 1, 'ensemble': 2, 'est': 1,
'tableau': 1, 'type': 1, 'un': 4, 'valeurs': 1}


***


## fréquences de mots

- on appelle ces représentations "bag of words": "sac de mots", l'ordre des mots
  est ignoré
- ces représentations sont beaucoup utilisées pour diverses applications:
  information retrieval, classification de documents, indexation, topic
  modelling, ...
- aujourd'hui on va écrire une fonction qui construit cette représentation et
  l'appliquer à des articles de wikipédia.



***


## fréquences de mots

- deux étapes:
  - découper le texte en mots ("tokenization"):

  "un tableau et un dictionnaire" -> ["un", "tableau", "et", "un", "dictionnaire"]

  - compter le nombre d'occurences de chaque mot:

  ["un", "tableau", "et", "un", "dictionnaire"] -> {"dictionnaire": 1, "et": 1, "tableau": 1, "un": 2}


***


## fréquences de mots: exercices



***


## exemple d'utilisation: topic modelling

- on prend tous les articles dans le dossier 'data' des exercices
- on compte les fréquences de mots: on obtient une matrice dont chaque ligne
  correspond à un article et chaque colonne correspond à un mot.
- on factorise cette matrice: en la décomposant en deux facteurs de rang faible,
  on obtient des facteurs latents ou "topics"


***


## exemples de topics

-mots les plus fréquents pour quelques topics:

- 'données', 'base', 'bases', 'table', 'sql', 'gestion', 'modèle', 'les',
  'transaction', 'systèmes', 'information', 'protection', 'transactions',
  'sgbd', 'langage', 'data', 'informations', 'relationnelle', 'database',
  'permet'

- 'lutte', 'kg', 'londres', 'excel', 'london', 'jeux', 'olympiques', 'épreuve',
  '2012', 'août', 'moins', 'hommes', 'lieu', 'libre', 'gréco', 'romaine',
  'femmes', '55', '11', '60'

- 'histoire', 'musée', 'historique', 'historiques', 'institut', 'société',
  'historiens', 'historiographie', 'siècle', 'historien', 'courant', 'idées',
  'contemporaine', 'française', 'sociale', 'art', 'france', 'comme', 'xxe',
  'relations'
