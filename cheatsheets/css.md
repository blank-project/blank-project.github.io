# Cheat Sheet CSS

## Syntaxe générale
- `selector { property: value; [ property: value; ...] }` : Syntaxe de base d'un bloc CSS.

## Insérer des feuilles de style
- `<link rel="stylesheet" type="text/css" href="style.css" />` :	Feuille de style externe
- `<style type="text/css">selector {property: value;}</style>` :	Style interne
- `<tag style="property: value">` : Style en-ligne
- `@import url("style.css");` : Import CSS (dans une feuille de style).
- `@import url("style.css") list-of-media-queries;` : Import CSS pour une ou plusieurs Media Query.

## Propriétés générales
- `color` : Change la couleur de police
- `cursor` : Change l'apparence du curseur
- `display` : Change le mode d'affichage d'un élément
- `overflow` : Spécifie comment le contenu qui dépasse s'affiche

## Propriétés de police
- `font-style` : Spécifie le style de police (italique, ...)
- `font-weight` : Spécifie l'épaisseur des caractères (gras, ...)
- `font-size` : Spécifie la taille de police
- `font-family` : Spécifies les polices à utiliser

## Text Properties
- `line-height` : Specifies the line height
- `text-align` : Specifies the horizontal alignment of text in an element
- `text-decoration` : Specifies the decoration added to text
- `text-indent` : Specifies the indentation of the first line in a text-block
- `text-transform` : Controls the capitalization of text
- `vertical-align` : Sets the vertical alignment of an element

## Propriétés du Modèle de Boîte
- `height` : Définit la hauteur d'un élement
- `width` : Définit la largeur d'un élement
- `margin` : Définit l'espacement entre les élements
- `padding` : Définit l'espacement entre la bordure et le contenu

## Propriétés de Position
- `position` : Spécifie le type de positionnement d'un élément
- `left` : La position à gauche d'un élément
- `top` : La position en haut d'un élément
- `bottom` : La position en bas d'un élément
- `right` : La position à droite d'un élément
- `z-index` : Pour les élements qui se chevauchent, spécifie dans quel ordre
- `float` : Indique si un élement doit "flotter", et de quel coté
- `clear` : Annule le _float_

## Propriétés d'Arrière-Plan
- `background-color` : Specifies the background color of an element
- `background-image` : Specifies an image to use as the background of an element
- `background-repeat` : Specify how image should be repeated (x or y axis)
- `background-attachment` : Sets whether a background image is fixed or scrolls with the rest of the page
- `background-position` : Sets the starting position of a background image.

## Propriétés de Liste
- `list-style-type` : Specifies the type of list-item marker in a list
- `list-style-position` : Specifies if the list-item markers should appear inside or outside the content flow
- `list-style-image` : Replaces the list-item marker with an image

## Media Queries
TODO
