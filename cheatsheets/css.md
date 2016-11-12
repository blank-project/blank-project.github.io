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
- `font-family` : Spécifie les polices à utiliser

## Propriétés Textuelles
- `line-height` : Spécifie la hauteur de ligne
- `text-align` : Spécifie l'alignement horizontal d'un élement
- `text-decoration` : Spécifie la décoration ajoutée à un élement (ex : souligné, barré).
- `text-indent` : Spécifie l'indentation de la première ligne
- `text-transform` : Contrôle la casse du texte (majuscule, minuscules)
- `vertical-align` : Spécifie l'alignement vertical d'un élement

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
- `background-color` : Spécifie la couleur d'arrière-plan d'un élement
- `background-image` : Spécifie l'image à utiliser comme arrière-plan d'un élement
- `background-repeat` : Spécifie comment l'image doit se répéter
- `background-attachment` : Indique si l'image d'arrière plan doit être fixe ou défiler avec la page
- `background-position` : Spécifie la position de départ de l'image

## Propriétés de Liste
- `list-style-type` : Spécifie le type de puce
- `list-style-position` : Spécifie la position des puces
- `list-style-image` : Spécifie une image comme puce

## Media Queries
<!-- TODO Marin -->
