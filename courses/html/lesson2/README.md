# Structure d'une page HTML

Une page HTML a la structure suivante

```
<!-- Ceci est un commentaire ! -->
<!DOCTYPE html> <!-- sert à indiquer que l'on utilise HTML 5 -->
<html> <!-- balise racine présente dans chaque page web -->
	<head> <!-- les méta-données de la page -->
        <meta charset="UTF-8">
		<title>Le titre de la page ici</title> <!-- le titre de la page -->
    </head>
    <body>
  	    Tout ce qui s'affiche dans le navigateur va ici !
	</body>
</html>
```


***

# L'indentation

Il s'agit de l'ajout de tabulations ou d'un nombre d'espace prédéfini dans votre code pour le rendre lisible.
Une bonne indentation ressemble a ceci :

```
<html>
	<head><!-- pour chaque élément contenu dans une autre élément on ajoute une tabulation -->
      <title>Mon titre</title><!-- lorsque que l'on a uniquement du texte on peut laisser les balises ouvrantes et fermantes sur la même ligne -->
	</head><!--les balises ouvrantes et fermantes sont au même niveau-->
   <body>
      Mon texte
   </body>
</html>
```


***


Une mauvaise identation est beaucoup moins lisibe :

```
<html>
	<head><title>Mon titre</title>
</head>
<body>
Mon texte</body> </html>
```

</br>
Vous pouvez bien sur adapter le nombre de tabulations ou d'espaces selon vos préférences .



---



# Principaux élements HTML



---




## Les paragraphes

La balise **p** sert à définir un paragraphe.
Elle est bordée par des espaces en haut en en bas, et peut contenir du texte et d'autres élements.

```
<p>Un nouveau paragraphe ! </p>
```

><p>Un nouveau paragraphe ! </p>




---



## Les titres

Les balise **h1** à **h6** servent à définir des titres.
**h1** est le plus grand et **h6** le plus petit.

<h1>Titre 1</h1>
<h6>Titre 6</h6>



---



## Les liens

La balise **a** sert à définir un lien.

```
<a href="http://www.google.com">Un lien vers Google</a>
```

><a href="http://www.google.com">Un lien vers Google</a></div>



---



## Les images

La balise **img** sert à définir une image.

```
<img src="img/sample_image.png" alt="Une image d'exemple" />
```

><img src="img/sample_image.png" alt="Une image d'exemple" />


***


L'attribut _alt_ permet de définir un texte alternatif, qui s'affiche notamment si l'image n'est pas trouvée :

><img src="img/no_image.png" alt="Une image d'exemple, qui n'existe pas" />



---



# Les listes


***


## Les listes non ordonnées (unorganized lists)
La balise **ul** sert à définir une liste, et chaque élement de la liste est représenté par une balise **li**.


```
<ul>
	<li>Element 1</li>
	<li>Element 2</li>
	<li>Element  3</li>
</ul>
```

><ul>
		<li>Element 1</li>
		<li>Element 2</li>
		<li>Element 3</li>
</ul>

Il existe également d'autres types de listes.


***


## Les listes ordonnées (organized lists)
```
    <ol>
      <li>Element 1</li>
      <li>Element 2</li>
      <li>Element 3</li>
    </ol>
```
<ol>
  <li>Element 1</li>
  <li>Element 2</li>
  <li>Element 3</li>
</ol>


***


## Les listes de définitions <br/>(description lists)
```
<dl>
  <dt>Element 1</dt>
  <dd>
  	Définition de l'élement 1
  </dd>
  <dt>Element 2</dt>
  <dd>
  	Définition de l'élement 2
  </dd>
</dl>
```
><dl>
	<dt>Element 1</dt>
	<dd>
		Définition de l'élement 1
	</dd>
	<dt>Element 2</dt>
	<dd>
		Définition de l'élement 2
	</dd>
</dl>



---



# Et pleins d'autres !

**q**, **i**, **b**, **em**, **strong**, **abbr** ...



---



# Et sinon pour commenter votre code

```html
<!-- votre commentaire -->
```


***


## Pourquoi le commenter ?

Lorsque l'on programme que ce soit sur un projet personnel ou en groupe, on a tendance à oublier pourquoi est-ce qu'on a écrit telle ou telle partie. C'est pourquoi commenter son code est essentiel, et permet de s'y retrouver même si l'on (re)prend un projet.



---



## Hierarchie HTML
Chaque balise HTML peut contenir un ou plusieurs éléments. Seul la sémantique fait foi. En effet, on ne peut avoir que des balises **li** dans une liste (ordonnée ou non), un lien **a** peut avoir un paragraphe à l'intérieur, etc.



#Voilà !

La cheatsheet HTML est ici : [Cheat Sheet HTML](https://github.com/blank-project/blank-project.github.io/blob/master/cheatsheets/html.md)
