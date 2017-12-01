# Les Sélecteurs

Les sélecteurs sont des chaînes de caractères permettant de sélectionner des élements dans un page HTML.
Cela permet de leur appliquer du style (CSS) ou de les manipuler (JavaScript).

## Sélecteurs de base
- `element`: Séléctionne les élements _element_
- `.class` : Sélectionne les élements ayant la classe _class_
- `#id` : Sélectionne l'élement ayant l'id _id_
- `*` : Sélectionne tous les élements

## Sélecteurs d'attributs
- `[attribute]` : Sélectionne tous les élements possédant l'attribut **attribute**
- `[attribute=value]` : Sélectionne tous les élements avec un attribut **attribute** ayant la valeur _value_
- `[attribute~=value]` : Sélectionne tous les élements avec un attribut **attribute** contenant le mot _value_ dans une liste.
- `[attribute|=value]` : Sélectionne tous les élements avec un attribut **attribute** contenant un mot commençant par _value_ dans une liste
- `[attribute^=value]` : Sélectionne tous les élements avec un attribut **attribute** commençant par _value_
- `[attribute$=value]` : Sélectionne tous les élements avec un attribut **attribute** terminant par _value_
- `[attribute*=value]`: Sélectionne tous les élements avec un attribut **attribute** contenant _value_

## Combiner les sélecteurs

On utilisera pour exemple une `div` et un `p`.

- `div p` : Sélectionne tous les élements `<p>` dans un élement `<div>`.
- `div > p` : Sélectionne tous les élements `<p>` ayant pour parent un élement `<div>`.
- `div + p` : Sélectionne tous les élements `<p>` suivant immédiatement des élements `<div>` (dans le même parent).
- `div ~ p` : Sélectionne tous les élements `<p>` suivant des élements `<div>` (dans le même parent).

## Grouper les sélecteurs
- `selector1, selector2, ...` : sélectionne les éléments vérifiant _selector1_ et _selector2_ (et ainsi de suite).

## Pseudo-sélecteurs
Les pseudo sélecteurs permettent de sélectionner des élements dans un certains état.

- `:hover` : Sélectionne l'élement au survol de la souris
- `:visited` : Sélectionne les liens déja visités
- `:active` : Sélectionne les liens actifs
- `:focus` : Sélectionne l'élement ayant le focus
- `:enabled` : Sélectionne les élements activés (dans un formulaire)
- `:disabled` : Sélectionne les élements désactivés (dans un formulaire)
- `:checked` : Sélectionne les cases à cocher cochées (dans un formulaire)
- `:target` : Sélectionne l'élement qui est la cible de l'ancre courante. A utiliser avec un sélecteur d'ID.
- `:not(selector)` : Sélectionne un élement ne vérifiant pas _selector_.

## Pseudo-élements
- `::first-letter` : Sélectionne la première lettre de l'élement
- `::first-line` : Sélectionne la première ligne de l'élement
- `::before` : Permet d'ajouter du contenu avant un élement.
- `::first-line ` : Permet d'ajouter du contenu après un élement.
