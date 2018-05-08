# Cours structures de données et algorithmes

## Objectifs

- Comment résoudre un problème: choisir les bonnes abstractions pour représenter
  les données et concevoir les algorithmes qui vont les manipuler.
- Connaître les structures de données les plus courantes (tableaux, listes,
  dictionnaires) et l'intérêt de chacune.
- Notion de complexité.
- TP sur le traitement d'images.

## Dates

- prochain point: 1er mai, avoir une première version des cours
- 4 séances de 2 heures: 15, 22, 29 mai 2018, 5 juin 2018
- 18 h -> 20 h


## Plan

### Introduction

- On veut obtenir un résultat en applicant des opérations à des données.
- Pour que ce soit possible, il faut choisir une bonne réprésentation des données.

### Tableaux et listes

#### Description

- Les deux représentent des séquences
- tableaux: des objets de même taille rangés dans des portions contiguës de la
  mémoire
  ``|a_1|a_2|...|a_n|``
- liste: des objets éparpillés dans la mémoire, chaque élément de la liste
  maintient une référence vers le suivant.
  ``|a_1| -> |a_2| -> ... -> |a_n|``
- (plusieurs variantes: stacks, queues, deques, ...)
- certaines opérations sont faciles à faire sur des tableaux et difficiles sur
  des listes, et inversement (exemples ci-dessous).
- les ``Array`` en Javascript sont... aucun des deux

#### Random access

- Je veux accéder à ``a_i``: par exemple ``a_17``
- Dans un tableau ``t`` d'objets de taille ``s``: ``t + (i-1)*s``
- Dans une liste: je dois parcourir les ``i`` premiers éléments
- C'est plus long et plus difficile à écrire
- Et si je veux ``a_10000``? Dans un tableau l'accès se fait en temps constant,
  dans une liste en temps proportionnel à ``i``

#### Insertion à la position ``i+1``

- j'ai déja l'adresse de ``a_i``; je veux insérer ``b`` entre ``a_i`` et
  ``a_{i+1}``
- avec une liste: temps constant
- avec un tableau: je dois bouger tous les éléments suivants (et, souvent, tout
  le tableau) - c'est beaucoup plus long et difficile.
  
#### Conclusion

- Il faut choisir une structure de données adaptée à ce qu'on veut faire.
- Quelle est la structure de mes données? (par exemple notre séquence a un ordre)
- Quelles opérations je veux faire dessus (par exemple insérer un élément au milieu)
- Compromis à trouver entre performance, taille, et facilité d'utilisation.

#### Excercices

- Les listes et les tableaux sont faciles à parcourir
- Les tableaux Javascript proposent l'interface d'une séquence (même s'ils sont
  implémentés différemment).
- calculez la moyenne d'un tableau
- calculez la variance d'un tableau
- parcourez un tableau en sens inverse

### Dictionnaires

#### Introduction

- Et si je veux trouver un élément dans une liste?
- par exemple: j'ai une liste de paires [(nom, numéro de tel), ...]
- pour trouver le téléphone de "belleville citoyenne", je dois parcourir (en
  moyenne) la moitié de la liste.
- Il y a des structures de données plus efficaces pour ça. Par exemple, ce
  serait déjà plus rapide si ma liste était triée. (exercice: comment je peux
  trouver "belleville citoyenne" rapidement dans une liste triée?)
- Une classe de structures de données importante: les dictionnaires

#### Description

- aussi appelés "tableaux associatifs", "maps", ... simplement "objets" en
  Javascript.
- Ils associent des valeurs à des clés; en donnant la clé, on peut accéder
  rapidement à la valeur correspondante.
- pour mes numéros de téléphone: {nom: numéro, ...}
- et si je veux retrouver le nom à partir du numéro?

#### Implémentation

- une implémentation possible: table de hachage
- permet d'accéder à une valeur en temps constant
- par exemple je peux avoir dans mon carnet une page pour chaque lettre de
  l'alphabet.
- si on me demande un numéro, j'extrais la première lettre du nom et je trouve
  immédiatement la page correspondante.
- dans chaque page, il y a très peu de noms, donc je trouve tout de suite le
  numéro.
- si mes pages commencent à se remplir trop, j'utilise les deux premières
  lettres!
- la fonction nom -> première lettre s'appelle "fonction de hachage"
- en pratique, on utilise d'autres fonctions
- les pages s'appellent des "buckets"
- trop de buckets -> espace perdu; pas assez -> recherche plus longue.

#### Comparaison 

- quels inconvénients et avantages par rapport à d'autres structures de données
  que vous connaissez?
- En pratique les ``Array`` javascript sont implémentés comme ça -> pratiques,
  mais pas du tout adaptés pour faire du calcul numérique.
  -> interface != implémentation
  
### Application: fréquence des mots dans un texte.

- Ici on voit comment combiner les possibilités de différentes structures de
  données pour résoudre un problème concret.
- On va compter combien de fois chaque mot apparaît dans un document ou un corpus
  de texte.
- Une fois le texte tokenizé, il est représenté comme une séquence de mots (une
  liste de strings).
- On stocke le nombre de fois que chaque mot est apparu dans un dictionnaire.
- ce genre de représentation "bag of words" pour un document est très utilisé,
  par exemple pour l'information retrieval.
- si on veut des images: dessiner des word clouds? (https://github.com/jasondavies/d3-cloud)


### Comment représenter une matrice?

#### C'est quoi une matrice?

- un tableau à deux dimensions
- sert à beaucoup de choses, par exemple ...

#### Première idée: une liste de listes

- pas efficace
- pas pratique: si je veux extraire une colonne?

#### Mieux: un tableau + des itérateurs

- on peut utiliser une structure de données efficace, et proposer des
  abstractions, une interface qui la rend facile à utiliser.
- matrice ``n x m``:
  - un tableau de taille ``n * m``
  - parcourir la ligne i: ``for k = i * m; k != (i + 1) * m; k++``
  - parcourir la colonne j: ``for k = j; k != n * m + j; k += m``

#### Est-ce que c'est la meilleure représentation pour tous les cas d'utilisation?

- par exemple: sparse matrices
- une façon de les stocker -- Compressed Sparse Row:

    * un tableau contient les valeurs
    * un tableau contient les indices de la colonne de chaque valeur
    * un tableau indique où commence chaque ligne dans les tableaux précédents.
    * permet des opérations matrice x vecteur rapides
    * ne permet pas des changements de sparsité rapides ...

- encore une fois, il n'y a pas de structure de données qui soit bonne dans
  l'absolu; tout dépend de la nature des données et de ce qu'on veut faire avec.
  
  
#### Et nos fréquences de mots

- une fois calculées, on peut les stocker dans une matrice.
- en la factorisant (éventuellement avec une pénalité), on obtient des 'topics'

### Images

- une image en noir et blanc, c'est une matrice.
- une image en couleur c'est 3 ou 4 matrices (un tenseur d'ordre 3)
- en les représentant comme ça, on peut facilement faire beaucoup d'opérations
  sur les images: les parcourir, faire des opérations d'algèbre linéaire, des
  convolutions, des fft...
  
#### Petits exercices

- les outils nécessaires ont déjà été faits pour vous
- calculer l'histogramme d'une image (même chose que les fréquences de mots mais
  avec des couleurs à la place des mots)
- seuiller une image
- miroir d'une image (parcourir en sens inverse)
- ré-échantillonner, rotations, transformations affines?

#### Filtres

- convolution d'une image avec un noyau (faire une animation pour expliquer)
- appliquez vos filtres: noir et blanc, blur, détection de bords, ...
- à quoi ça sert: débruiter, downsampling sans aliasing, extraction de
  descripteurs, (réseaux de neurones) ...
- votre cerveau fait la même chose avec le signal qu'il reçoit de vos yeux


# Le cours peut probablement s'arrêter ici


## Graphes

### Description et exemples

- graphe: des noeuds reliés par des arêtes
- arêtes orientées ou non (directed vs undirected)
- labels sur les arêtes ou non (graph vs multigraph).

- réseaux sociaux, réseaux d'énergie, métro, graphe de calcul, ...
- arbres de décision, arbres de recherche, DOM, ...

### Représentations possibles

- liste de noeuds, liste d'arêtes
- sparse matrix (sparse tensor for multigraph)
- ...
- représentations spécifiques pour les DAG

### Arbres binaires

- parcours
- recherche
- insertion
- exemple: arbres de décision, boosting, random forest
- exercice et application: labyrinthe?

### Application

- exemple: plus court chemin dans un graphe
- algorithme de Dijkstra 
- introduire la programmation dynamique
- trouver le chemin du métro au cours de _blank

### Ouverture: exemple de matrices, images et graphes ensemble

- On peut représenter un graphe comme une matrice binaire creuse
- Le spectre de la matrice Laplacienne du graphe peut être utiliser pour faire
  du clustering (clustering spectral)
- On peut utiliser cette méthode pour segmenter une image
- montrer un exemple
