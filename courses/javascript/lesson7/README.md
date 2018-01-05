# VueJS

![VueJS Official Logo](img/vue.png)



---



## Qu'est-ce que c'est ?


***


## Un framework front-end

C'est un ensemble cohérent de fonctions et de fonctionnalités forçant l'utilisation d'une _organisation_ (fichiers, code, etc.) facilitant le développement d'une application front-end.

Le framework nous donne un _cadre_ de développement contrairement à une bibliothèque (ou library) qui est juste un ensemble de fonctions.


***


## Pourquoi Vue.js ?

Vue.js est un framework MVVM progressiste. Il est souvent comparé à React.js ou Angular bien qu'il ne soit pas si proche du premier.

Il permet de créer de manière progressive (en ajoutant, ou modifiant du code petit à petit) des applications web, maintenables, testables. Cette flexibilité est possible avec React.js mais reste compliquée avec Angular par exemple.


***


## Pour info, tu parles de React.js et Angular.js, c'est quoi ?

Ce sont les frameworks principaux du marché. React.js est plutôt orienté sur un développement modulaire, et angular pour un développement de grosses applications web.


***


## Vue.js c'est une version simplifiée de quelque chose?

Non ! C'est un framework MVVM plus léger qu'Angular mais offrant une modularité intéressante. Il y a peu de contrainte.


***


## MVVM ?

Model - View - ViewModel !

![MVVM](mvvm.png)


Note: https://012.vuejs.org/guide/


***


## Et avec des mots ?

C'est une architecture avec le découpage suivant :
- Model : Ce sont les données que l'on affiche !
- View : C'est le DOM, la représentation en JS de la page html
- ViewModel : C'est le lien entre le Model et la View, il peut prendre plusieurs formes mais ici c'est généralement ce que l'on appelle un "composant".


***


## Plus d'infos :

[ici !](https://vuejs.org/v2/guide/)



---



## Passons au vif du sujet

Afin d'utiliser VueJS, la première étape est d'inclure le framework. Vous pouvez inclure la dernière version en incluant ce lien dans votre `head` : [https://cdn.jsdelivr.net/npm/vue](https://cdn.jsdelivr.net/npm/vue).


***


## Créer une application Vue

Une application Vue s'initialise dans un élément HTML. Cet élément contiendra TOUTE votre application web (ça peut être une div, un main, etc. même le body. Par convention, on utilisera une div avec pour id "app" :
`<div id="app"></div>`.


***


## Initialisons l'application

Pour initialiser l'application, créez un script et écrivez :
```javascript
var test = new Vue({
  el: '#app',
  data: function() {
    return {}
  },
});
```

Note: Expliquer le code



---



## Ok et maintenant ?
