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


## Exercices

- fréquences de mots

