# CSS
## Le positionnement (1)
### Affichage, Disposition et Modèle de boîte



---


## La propriété "display"

La propriété **display** permet de modifier la mise en page d’un élément.

Ils peuvent être :
- masqués
- sur la même ligne que les objets précédents et suivants
- sous la forme d’un bloc  


***


### Masquer un élement

Pour masquer des élements, on utilise la valeur _none_.

```
display : none;
```

Cet élement ne prend alors plus aucune place dans la page.

Pour masquer uniquement le contenu d'un élement, on utilise `visibility : hidden;`.


***


### Afficher les élements en-ligne

Pour afficher des éléments en ligne on utilise _inline_.

Les éléments avec cette valeur :  
- ne font pas de saut à la ligne
- n’utilisent que l’espace requis en largeur pour l’affichage de leur contenu
- On ne peut pas modifier leur largeur

```
display : inline;
```


***


### Afficher les élements en bloc

Pour afficher des éléments en bloc on utilise la valeur _block_.

Les éléments avec la valeur _block_
- sont affichés les uns en dessous des autres
- utilisent toute la largeur de la page
- on peut modifier leur largeur

```
display : block;
```


***


### Mélanger bloc et ligne

Comment mélanger _block_ et _inline_ ?  
Avec la valeur _inline-block_ !

Elle permet de mettre des éléments de types bloc en ligne.

On peut ainsi modifier la largeur de l’élément

```
display : inline-block;
```



---



## Récapitulons

La propriété **display** en CSS permet de modifier la mise en page des éléments.

Nous avons vu :
- `display : none;`
- `display : inline;`
- `display : block;`
- `display : inline-block;`


***


Les éléments HTML ont tous une valeur de **display** par défaut.

De type _block_ :
- les paragraphes `<p>`
- les titres `<h1>, .., <h6>`
- ...

De type _inline_ :
- Les liens `<a>`
- les images `<img>`
- ...


***


Il existe des éléments qui n’ont aucunes propriétés à part celle de _display_ :
- l’élément `<span>` est de type _inline_
- l’élément `<div>` est de type _block_

On les utilise très souvent, en particulier comme éléments de base


***


Il existe d'autres valeurs pour la propriété **display** :
- _table_, _table-row_, _table-cell_ ... (elles sont peu utilisées)
- _flex_ (et _inline-flex_)

La propriété Flex nous permettra de gérer de manière très simple la disposition (layout) des élements d'une page.

Nous verrons plus tard comment l'utiliser



---



## Les dimensions


***


On peut utiliser le CSS pour modifier les dimensions des élements **block** et **inline-block**.

Pour cela on utilise les propriétés CSS :
- **width** : modifie la largeur de l'élement
- **height** : modifie la hauteur de l'élement


***


### CSS : Les unités

Il existe plusieurs manières d'exprimer des dimensions en CSS.

On les utilise pour les dimensions d'un élement, mais pour bien d'autres propriétés CSS (marges, bordures, etc ...).

Il existe des dimensions _absolues_ et d'autres _relatives_.


***


Les dimensions _absolues_
 - **px** : en pixels
 - **cm**, **mm**, **pt**, **in**, **pc** (pratiquement pas utilisées)


***


Les dimensions _relatives_
 - **em** : en multiples de la taille de police
 - **%** : en pourcentage d'un élement de référence (en général le conteneur)
 - **vh**, **vw** : en pourcentage de la hauteur (vh) ou largeur (vw) de l'affichage (_viewport_).
 - **vmin** : en pourcentage du plus petit entre la hauteur ou largeur du _viewport_.



---



## Le Modèle de Boîte
### (CSS Box Model)


***


![Image for CSS Box Model](CSS_Box_Model.png)
Note: Expliquer les concepts sur cette slide.



---



## La marge extérieure

La marge extérieure permet de gérer l'espacement entre les éléments.

Pour la modifier on utilise la propriété CSS **margin**.

C'est un raccourci pour éviter d'écrire séparément **margin-top**, **margin-right**, **margin-bottom**, **margin-left**.


***


On peut écrire :
- **margin** : {tous les cotés}
- **margin** : {haut et bas} {gauche et droite}
- **margin** : {haut} {droite} {bas} {gauche}

**margin** peut avoir la valeur _auto_ qui permet de centrer l’élément dans son parent en ajustant les marges automatiquement.


***


## Fusion de marges

Dans certains cas, les marges verticales des élements consécutifs peuvent "fusionner".

Cela est utile pour gérer la disposition des élements.

En revanche, cela peut surprendre dans certains cas, quand la marge "bave" en dehors d'un élements

Il est possible d'empêcher cette fusion, notamment en ajoutant une bordure ou du padding.



---



## La marge intérieure

La marge intérieure permet de gérer l'espacement entre le contenu d'un élément et sa bordure.

Pour la modifier on utilise la propriété CSS **padding**.

C'est un raccourci pour éviter d'écrire séparément **padding-top**, **padding-right**, **padding-bottom**, **padding-left**.


***


On peut écrire :
- **padding** : {tous les cotés}
- **padding** : {haut et bas} {gauche et droite}
- **padding** : {haut} {droite} {bas} {gauche}



---



## Les bordures

On peut modifier les bordures des élements en CSS.

Les éléments possèdent tous une bordure par défaut mais celle ci est invisible et de taille nulle.

Pour la modifier en CSS, on utilise la propriété **border**.


***


C'est un raccourci pour écrire séparement les éléments suivants :
- **border-width** : la dimension de la bordure.
- **border-style** : son style
- **border-color** : sa couleur

`border : {width} {style} {color}`



---



## Box Sizing

La propriété `box-sizing` sert à définir à quels élements s'appliquent les dimensions :
- `box-sizing : content-box;` : applique les dimensions au contenu
- `box-sizing : padding-box;` : applique les dimensions à l'ensemble contenu + _padding_ (peu supporté).
- `box-sizing : border-box;` : applique les dimensions à l'ensemble contenu + _padding_ + _border_


***


Quand on écrit `width : 50px`, on veut (en général) que cela s'applique à l'ensemble contenu + _padding_ + _border_.  

On utilisera donc `box-sizing : border-box;`.

Pour appliquer cela sur toute la page :

```css
html {
  box-sizing: border-box;
}
* {
  box-sizing: inherit;
}
```

Note: à expliquer à l'oral : cela permet de définir ce style partout, tout en permettant de l'écraser.
