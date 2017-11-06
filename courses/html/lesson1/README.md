# HTML



---



<acronym title="HyperText Markup Language">HTML</acronym> est le langage qui permet de définir la stucture d'une page web.

Il est interprété par un navigateur. Un navigateur (ou browser / web browser en anglais) c'est quoi ? Quelques exemples :

<div id="browsers" class="fragment">
    <i title="Chrome" class="fa fa-chrome"></i>
    <i title="Firefox" class="fa fa-firefox"></i>
    <i title="Internet Explorer" class="fa fa-internet-explorer"></i>
    <i title="Safari" class="fa fa-safari"></i>
    <i title="Opera" class="fa fa-opera"></i>
</div>


***


Le HTML ne définit aucun style, mais uniquement les informations à afficher, leur sens et leur hiérarchie.

La version actuelle du langage est HTML5 (la 5e version).



---



##Comment c'est affiché par le navigateur ?
Le navigateur va interpréter le code HTML et en faire une représentation en mémoire appelée : `DOM` ou `DOM HTML`.
Vous pouvez ainsi croiser des pages web en `HTML` ou `XHTML`.


***


##Mais quelle est la différence entre les deux langages ?
Pour cela il faut prendre en compte l'interprétation du code HTML. Soit ce dernier est considéré comme un langage à part entière : HTML (Hyper Text Markup Language) et sera interprété comme tel ou comme un langage XML (Extensible Markup Language) et sera interprété par un interpreteur XML.


***


## Ça répond pas à la question !
La manière dont sera interprété le fichier changera donc entre les deux langages. Un exemple principal est : Le XML est parsé (lu ligne par ligne et interprété) et s'il y a une erreur le document ne sera pas rendu correctement, alors que le HTML est beaucoup plus permissif.


***


## Mouais, je suis pas convaincu
Le HTML a été créé dans le but spécifique d'être un langage interprété par un browser. Tandis que le XML est extensible et auto descriptif, il est plus utilisé pour stocker des données par exemple. A contrario, votre navigateur va attendre certaines balises HTML bien définies pour pouvoir les rendre correctement !


***


##Lequel on utilise du coup ?
###HTML !  <!-- .element: class="fragment" -->
C'est un langage plus permissif, et mieux interprété par les browsers modernes. C'était utilisé pour des problèmes de compatibilité entre les anciens navigateurs. La majorité de ces problèmes a été corrigé par l'arrivée de la 5e version du langage HTML.  <!-- .element: class="fragment" -->



---



## A quoi ressemble le langage HTML ?

C'est un langage utilisant des **balises** que l'on ouvre et ferme.

```
<p>
 Un <strong>paragraphe</strong> d'<em>exemple</em><br />
 avec un <a href="#">lien</a>
</p>
```
Devient :
<p>
  Un <strong>paragraphe</strong> d'<em>exemple</em><br />
  avec un <a href="#">lien</a>
</p>


***


Les **balises** HTML s'écrivent de la facon suivante :
```
<balise> CONTENU </balise>
```
Le contenu peut être du texte ou d'autres balises.

Certaines balises sans contenu peuvent s'écrire sous une forme raccourcie :
```
<balise />
```

Les balises HTML peuvent avoir des **attributs** :
```
<balise attribut1="valeur1"></balise>
```



---



## Un peu de pratique
* Créer un fichier `.html` et medz du texte à l'intérieur
* Créez un fichier `.xhtml` et mettez du texte à l'intérieur
* Maintenant visualisez les à l'intérieur de votre navigateur (pour visualiser votre page vous devez cliquer droit et ouvrir avec : Navigateur Web Chromium)



---



#The end !
