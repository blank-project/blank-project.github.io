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



---



# Comment ajouter le CSS sur la page ?


***


Pour ajouter du CSS à une page HTML il y a plusieurs possibilités :

- En liant une feuille de style à la page HTML
- Via un attribut **style** sur l’élément concerné
- En utilisant une balise HTML `style`



***


## Utiliser une Feuille de Style

On ajoute un élement `link` dans le `head` de la page.

```
<link href="style.css" rel="stylesheet" type="text/css" />
```

Le CSS sera dans un fichier séparé nommé _style.css_.

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



# Les propriétés CSS


***


TODO
