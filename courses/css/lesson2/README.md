# Les Sélecteurs CSS



---



On a vu que le CSS consistait à appliquer des *propriétés* à des *éléments*.

Mais il va falloir définir sur quels élements on applique ces propriétés.

Pour cela, on utilise des **sélecteurs**.


***


### Les sélecteurs

Les sélecteurs vont nous permettre de "viser" un ou plusieurs éléments, ainsi que des groupes d'élements (class).

Il en existe de différentes sortes.

On peut les combiner  de différentes manières.


***


- `p`
- `a img`
- `div#example`
- `nav[horizontal] ul#main li.selected.even`

sont tous des sélecteurs qui visent des élements différents



---



# Les types de sélecteurs




***



## Le sélecteur d'élement

Si l'on écrit juste le nom d'un élement, le code CSS va viser tous les élements avec le même nom dans la page.

```
p {
  background-color : blue;
}
```
va afficher tous les paragraphes de la page avec un fond bleu


***


## Le sélecteur de classe

Le sélecteur de classe est `.` (un point).

Il sert à sélectionner tous les élements avec une certaine _class_.

`.foo` : Sélectionne les élements qui ont la class _foo_.


***


## Le sélecteur d'ID

Le sélecteur d'ID est `#` (un dièse).

Il sert à sélectionner l'élement avec un certain _id_

`#bar` : Sélectionne l’élément qui a l’ID _bar_

(Normalement, il n'y en a qu'un).


***


## Les sélecteurs d'attributs

- `[attribute]` : Sélectionne les éléments qui ont un attribut _attribute_
- `[attribute=value]` : Sélectionne les éléments qui ont un _attribut_ avec une valeur spécifique (_value_)

Il y a d'autres manières très puissantes d'utiliser les sélecteurs d'attributs (`~=`, `|=`, `^=`, `$=`, `*=`).



---



# Combiner les sélecteurs


***


On peut grouper les sélecteurs.

Pour cela, on les écrit côte-à-côte.

```
  a#monLien.maClass[data-toggle=switch]
```

Ce sélecteur va sélectionner uniquement :

Les **liens** (`a`) **AYANT** :
- pour **id** _monLien_ (`#monLien`) 
- **ET** pour **classe** _maClass_ (`.maClass`) 
- **ET** un **attribut** `data-toggle` avec une **valeur** `switch` (`[data-toggle=switch]`)


***


On peut appliquer le même style à différents sélecteurs.

Pour cela, on les sépare par des virgules (`,`).

```
  a, div.test
```

Ce sélecteur va sélectionner :

les liens (`a`) **ET** les div avec une **class** _test_ (`div.test`)


***

## Le sélecteur de descendants

On peut sélectionner les descendants d'un élement.

Pour cela on sépare les sélecteurs par un espace (` `).

```
  a.img-link img
```
Ce sélecteur va sélectionner

les images (`img`) **CONTENUES** dans les liens (`a`) qui ont une **class** _img-link_ (`.img-link`)


***


## Et d'autres plus compliqués

- _selector1_ > _selector2_ : sélectionne les enfants directs.
- _selector1_ + _selector2_ : sélectionne l'élément suivant immédiat.
- _selector1_ ~ _selector2_ : sélectionne les éléments suivants.


***


## Bonus : le sélecteur universel

On peut sélectionner tous les élements de la page avec le sélecteur `*`.
