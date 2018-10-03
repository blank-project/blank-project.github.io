# HTML



---



<acronym title="HyperText Markup Language">HTML</acronym> est le langage permetant de définir la stucture d'une page web.

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

Note: Parler de XHTML et d'autres langages balises



---



## A quoi ressemble le langage HTML ?

C'est un langage utilisant des **balises**.

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
* Créer un fichier avec l'extension `html` et mettez du texte à l'intérieur
* Maintenant visualisez les à l'intérieur de votre navigateur (pour visualiser votre page vous devez cliquer droit et ouvrir avec : Navigateur Web)
* Une fois sur votre page web, affichez le code source de la page
* Qu'est-ce qu'on peut observer ?
Note: Vérifier que le navigateur a bien créé une page HTML à partir d'un fichier texte. Commenter que le navigateur a corrigé nos erreurs.



---



#The end !
