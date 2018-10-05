# CSS



---



Le HTML sert à définir le contenu d'une page web.

<acronym title="Cascading Style Sheet">CSS</acronym> permet de définir le style d'une page web.

On va donc pouvoir modifier :
- les couleurs
- la taille de élements
- leur disposition dans la page
- comment ils s'affichent sur un ordinateur, un téléphone
- Et plein d'autres choses !

La version actuelle du langage est CSS3.



---



# A quoi ça ressemble ?


***


C'est un langage utilisant des blocs servant à appliquer un style à un élement ou plusieurs éléments HTML.
```css
elements {
  propriete1 : valeur1;
  propriete2 : valeur2;
}
```


***

```
p {
  color : red;
  font-weight : bold;
}
```

Tous les paragraphes de la page vont s'afficher :
 - en rouge (`color : red`)
 - en gras (`font-weight : bold`)


***


Exemple :

<p>
  Un paragraphe sans style
</p>

<p id="example1">
  Un paragraphe avec du style.
</p>


***


Les commentaires en CSS s'écrivent de la manière suivante : `/* */`.

```css
/*
  Mes commentaire CSS ici.
  On peut les écrire sur plusieurs lignes.
*/
```




---



# Comment ajouter le CSS sur la page ?


***


Pour ajouter du CSS à une page HTML il y a plusieurs possibilités :

- En liant une feuille de style à la page HTML
- Via un attribut **style** sur l’élément concerné
- En utilisant une balise HTML `style`



***


## Utiliser une Feuille de Style

Le CSS sera dans un fichier séparé nommé _style.css_ .

On ajoute un élement `link` dans le `head` de la page visée pour y lier la feuille de style.

```
<link href="style.css" rel="stylesheet" type="text/css" />
```

Ainsi les règles de style s'appliqueront a la page .

C'est la méthode la plus répandue pour ajouter du CSS.

On peut lier autant de feuilles de style que l'on veut !

Le navigateur ajoute automatiquement sa feuille de style, mais on peut écraser les valeurs qui y sont définies.


***


## L'attribut **style**

```
<p style="color : red; font-weight : bold;">
  Un paragraphe rouge, en gras
</p>
```
Dans ce cas on écrit juste les propriétés, car le code s'applique uniquement à cet élément.

On s'en sert en général pour modifier le CSS d'un élément au cas par cas.



***


## La balise `style`

En utilisant la balise style :
```
<style>
	mettre le CSS ici
</style>
```

C'est la méthode la moins répandue.



---



## Les propriétés CSS de base



---



### Les couleurs

- `color` : Change la couleur de police
- `background-color` : Spécifie la couleur d'arrière-plan d'un élement

On peut représenter les couleurs de différentes manières


***


#### Par nom

On peut utiliser directement le nom d'une couleur.

Ex : _red_, _blue_, _yellow_ ...

En général on utilise cette technique pour faire des prototypes.


***


#### Par code RGB

On peut également définir une couleur en utilisant le code RGB.

On va définir combien de chaque couleur primaire (Rouge, Vert, Bleu) contient notre couleur.

```
rgb(rr,gg,bb)
```

`rr`, `gg`,`bb` peuvent aller de 0 à 255.

`rgb(255,255, 0)` est un jaune vif.


***


#### Par code RGBA

Si l'on veut définir une couleur transparente, on peut rajouter ce qu'on appelle un masque alpha.

Il est défini entre 0 et 1 :
- 0 indique une couleur totalement transparente
- 1 indique une couleur totalement opaque

`rgb(255,255, 0, 0.5)` est un jaune vif semi transparent.


***


#### Par code Hexadécimal

C'est une manière plus courte d'écrire le code RGB :
`#RRGGBB` ou `#RRGGBBAA`

On écrit chaque composante (R,G,B,A) en 00 et FF

Note: expliquer la notation héxa à l'oral.



---



### Le texte

- `font-style : italic;` : Mettre en italique.
- `font-weight : bold;` : Mettre en gras.
- `text-decoration : underline;` : Mettre en souligné.



***


### Les polices

- `font-size : 1.5em;` : Spécifie la taille de police (1.5em)
- `font-family : Arial, sans-serif;` : Spécifie la police, ici Arial, avec une famille par défaut.

On peut également ajouter des polices qui ne sont pas installées sur le PC (mais on évite).

Note: 3 familles : serif, sans-serif, monospace



---



# Voilà !
La CheatSheet CSS est ici :
[Cheat Sheet CSS](https://github.com/blank-project/blank-project.github.io/blob/master/cheatsheets/css.md)
