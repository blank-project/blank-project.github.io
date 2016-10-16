# Les Attributs HTML



---



Les attributs HTML s'écrivent en général de la manière suivante :

```
<balise attribut1="valeur1" attribut2="valeur">Contenu</balise>
```
Il existe une forme courte pour certains attributs :
```
<balise attribut>Contenu</balise>
```


***


- Tous les élements HTML peuvent avoir des attibuts.  
- Ils servent à fournir des informations additionelles sur la balise.  
- On écrit toujours les attributs dans la balise ouvrante.



---



## href

L'attribut **href** sert à définir la cible d'un lien HTML (**a**).

```
<a href="http://www.google.com">Un lien vers Google</a>
```



---



## src

L'attribut **src** sert à définir l'emplacement d'une image ou d'un média (audio/vidéo).

```
<img src="/img/mon_image.jpeg" />
```
Si l'image n'est pas trouvée, on peut utiliser l'attribut **alt** pour afficher un texte à la place.



---



## title

L'attribut **title** sert à définir une indication sur un élement, qui s'affiche au passge de la souris (_hover_).

```
<p title="Une indication s'affiche !">
  Un paragraphe avec un attribut title.
</p>
```
><p title="Une indication s'affiche !">
  Un paragraphe avec un attribut title.
</p>




---



## class

L'attribut **class** sert à identifier un groupe d'éléments possédant des caractéristiques communes.

On ajouter plusieurs _classes_ à un élement en les séparant par des espaces.


```
<p class="class1 class2">
  Un paragraphe avec un attribut class.
  Cet attribut définit deux classes : class1 et class2.
</p>
```

Cet attribut sera utilisé pour identifier des groupes d'élements en CSS ou en JavaScript.



---



## id

L'attribut **id** sert à identifier un élément spécifique.  

```
<p id="paragraphe1234">
  Un paragraphe avec un attribut id.
</p>
```

Cet attribut sera utilisé pour identifier des élements en CSS ou en JavaScript.

L'id d'un élément doit être unique sur la page.
