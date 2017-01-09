# PHP

![PHP Logo](img/php.png)



---



## Qu'est ce que c'est ?

PHP est un langage de script et de programmation

Il est en général utilisé pour réaliser des sites web _dynamique_.

Il partage un certain nombre de caractéristiques avec JavaScript  
(haut niveau, interprété, typage dynamique).



---



## Statique VS dynamique

Un site web statique contient uniquement du code HTML et CSS.

Un site web dynamique permet d'adapter le contenu, sans forcément avoir à modifier le code source.

Il utilise d'autres technologies :
 - Un langage de programmation serveur (ici **PHP**).
 - Une base de donnnées



---




## Fonctionnement

PHP s'éxecute dans un serveur Web et interprète les pages PHP à la demande.

<figure>
  <img alt="Site web dynamique" src="img/dynamic.svg" />
  <figcaption style="font-size: smaller; font-style: italic;">
  By <a href="//commons.wikimedia.org/wiki/User:Ggia" title="User:Ggia">Ggia</a><a href="//commons.wikimedia.org/wiki/File:Esquema-proxy-internet.svg" title="File:Esquema-proxy-internet.svg">Esquema-proxy-internet.svg</a>: <a href="//commons.wikimedia.org/w/index.php?title=User:Randomicc&amp;action=edit&amp;redlink=1" class="new" title="User:Randomicc (page does not exist)">Randomicc</a> - <span class="int-own-work" lang="en">Own work</span>, <a href="http://creativecommons.org/licenses/by-sa/3.0" title="Creative Commons Attribution-Share Alike 3.0">CC BY-SA 3.0</a>, <a href="https://commons.wikimedia.org/w/index.php?curid=19280371">Link</a>
  </figcaption>
</figure>




---



## De quoi a-t-on besoin


Pour développer des sites web dynamiques, il nous faut :
- Un serveur web pour traiter les requêtes (Apache)
- PHP pour traiter les pages PHP
- Une base de données

On utilisera XAMPP, qui possède tous ces composants en un seul package.



---



## Syntaxe


Le code PHP est écrit entre les balises PHP :

```php
<?php
  // Le code PHP ici.
?>
```

On peut placer une balise PHP n'importe où dans le code HTML.

Le reste du code n'est pas interprété par PHP.



---



## L'instruction `echo`

L'instruction `echo` permet d'écrire dans la page.

Tout le texte hors des balises PHP est également écrit dans la page.

Il faut TOUJOURS terminer la ligne par un `;` !

(PHP n'est pas aussi sympa que JavaScript !)



---


## Hello World en PHP

```
<!DOCTYPE html>
<html>
<head>
  <title>PHP : Hello World</title>
</head>
<body>
<?php
  echo "Hello World";
?>
</body>
</html>
```


---


## Exercice d'application

- Installer XAMPP sur vos poste puis le lancer
- Trouver l'emplacement dans le File System servi par Apache
- Ajouter un fichier helloworld.php contenant le code la page précédente
- Afficher helloworld.php dans un navigateur
