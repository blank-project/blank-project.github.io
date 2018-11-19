# CSS
## CSS Avancé



---



## Autres Propriétés CSS

- `border-radius` : créer des coins arrondis.
- `box-shadow` : permet de définir une ombre.
- `min-width`, `max-width` : spécifie la largeur minimum et maximum.
- `min-height`, `max-height` : spécifie la hauteur minimum et maximum.
- `opacity` : spécifie l'opacité d'un élément.
- `resize` : permet de redimensionner un élément.



---



## Pseudos-classes

Les pseudos classes sont des sélecteurs permettant de viser des élements dans un certain **état**.

Ils commencent par `:`.

- `:hover` : l'élément sur lequel est placé la souris.
- `:visited` : un lien déja visité.
- `:focus` : le champ de formulaire qui a le focus.
- `:target` : la cible de l'ancre courante.
- ... (voir la CheatSheet Sélecteurs).



---



## Pseudos-éléments

Les pseudos éléments sont des sélecteurs permettant de viser une partie d'un élément.

Ils commencent par `::`.

- `::before` et `::after` : Permet d'ajouter du contenu avant ou après l'élement avec `content`.
- `::first-letter` : la première lettre d'un élement contenant du texte.
- `::first-line` : la première ligne d'un élement contenant du texte.
- ... (voir la CheatSheet Sélecteurs).



---



## Cascade et Héritage


***


### Les règles de Cascade

Les feuilles de style s'appliquent dans l'ordre suivant :
- Navigateur
- Feuille de style de l'utilisateur
- Feuille de style importées ou liées à la page
- Style Interne (balise `<style>`)
- Style en-ligne (attribut **style**)


***


Quand on définit plusieurs fois la même propriété pour un élement (avec une valeure différente), il existe des règles de priorité.

On appelle cela la spécificité.

Du moins important au plus important :
- élement (0, 0, 0, 1)
- .class (0, 0, 1, 0)
- \#id (0, 1, 0, 0)
- style en-ligne (1, 0, 0, 0)

On compte le nombre de sélécteurs de chaque catégorie.


***


méthode pour vérifier quelle propriété prime :
- On regarde la spécificité
- Puis on regarde de quelle feuille de style vient la propriété
- Puis on regarde dans quel ordre sont déclarées les propriétés dans la feuille de style.


***


### La valeur `!important`

La valeur `!important` permet de forcer une propriété à s'appliquer.

Si deux propriétés ont la valeur `!important`, on reprend les règles de priorité vues précédemment.



---



### L'héritage

Chaque propriété CSS peut être héritée ou non.

Si elle est héritée, les éléments fils récupèrent la même valeur de la propriété.

- la propriété `color` est héritée
- la propriété `display` n'est pas héritée.


***


### Les valeurs `initial` et `inherit`

La propriété `inherit` permet de forcer l'héritage pour les propriétés non-heritées.

La valeur `initial` permet de redonner à un élément sa valeur par défaut.



---



## Les transitions


<div class="demo transition"></div>


***


`transition: background-color 2s, height 4s;`

La propriété `transition` permet d'appliquer des _transitions_ sur des changements de valeurs de propriétés CSS.



---



## Les animations


<div class="demo animation"></div>


***


### Définir une animation

La **règle** `@keyframes` permet de définir une animation.

```
@keyframes example {
    0%   {background-color: red;}
    25%  {background-color: yellow;}
    50%  {background-color: blue;}
    100% {background-color: green;}
}
```


***



### Appliquer une animation

La propriété `animation` permet d'appliquer des _animations_ définie avec `@keyframes`.

`animation: example 5s linear 0s infinite;`

On écrit **animation** : _name duration timing-function delay iteration-count direction fill-mode play-state_;



---



## Les transformations

Il est possible d'appliquer des transformations 2D et 3D sur des éléments.

Pour cela on utilise la propriété `transform`, associée à une fonction.


***


### Translation


<div class="demo translation"></div>

`transform: translate(50px, 75px);`


***


### Rotation


<div class="demo rotation"></div>

`transform: rotate(27deg);`


***


### Zoom


<div class="demo scaling"></div>

`transform: scale(1.5, 1.5);`



---



## Les imports CSS

La **règle** `@import` permet d'importer des feuilles de styles les unes dans les autres.
