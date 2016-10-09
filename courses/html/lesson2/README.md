# Structure d'une page HTML

Une page HTML a la structure suivante

```
<!DOCTYPE html> (sert à indiquer que l'on utilise HTML 5)
<html> (balise racine présente dans chaque page web)
	<head> (les méta-données de la page)
		<title>Le titre de la page ici</title> (le titre de la page)
  </head>
  <body>
  	Tout ce qui s'affiche dans le navigateur va ici !
	</body>
</html>
```



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




---




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


## Les listes ordonnées
```
    <ol>
      <li>Element 1</li>
      <li>Element 2</li>
      <li>Element 3</li>
    </ol>
```
><ol>
  <li>Element 1</li>
  <li>Element 2</li>
  <li>Element  3</li>
</ol>


***


## Les listes de définitions
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
