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

Une application Vue s'initialise dans un élément HTML. Cet élément contiendra TOUTE votre application web. Ça peut être une div, un main, etc. même le body. Par convention, on utilisera une div avec pour id "app" :
`<div id="app"></div>`.


***


## Initialisons l'application

Pour initialiser l'application, créez un script et écrivez :
```javascript
var test = new Vue({
  el: '#app',
  data: function() {
    return {
      message: 'olé'
    }
  },
});
```

Note: Expliquer le code


---


`data` est l'attribut qui nous permet de spécifier les variables javascript auxquelles on aura accès dans notre instance de Vue.


---



## Interpolation

Toute les variables qui sont déclarées dans l'instance de Vue sont accessibles en HTML via les doubles accolades. Par exemple, la variable message déclarée précédemment sera accessible via : `{{ message }}` dans notre HTML.

```HTML
<div id="app">
  <p>{{ message }}</p>
</div>
```


---


## Créez votre première instance VueJS

Créez votre première instance VueJS avec un message spécifique : "Ma première instance VueJS". Vous devez initialiser une nouvelle application et afficher le message dans un paragraphe.



***



## Les directives

Les directives sont une partie essentielle du framework VueJS et permettent de définir un comportement HTML. Par exemple, définissons une variable dans notre instance avec la valeur 'ceci est un titre':

```javascript
new Vue({
  el: '#app',
  data: function() {
    return {
      monTitre: 'ceci est un titre'
    }
  }
});
```


***


Si l'on veut utiliser la variable title dans un attribut on peut utiliser la directive `v-bind:` ou juste les `:` avant le nom de l'attribut.
Par exemple :

```HTML
<div id="app">
  <p v-bind:title="monTitre">Un titre sera affiché à mon paragraphe</p>
</div>
```

ou

```HTML
<div id="app">
  <p :title="monTitre">Un titre sera affiché à mon paragraphe</p>
</div>
```


***


Une directive permet de cacher un élément : `v-show`. Pour cela on définit une propriété qui a pour valeur `true` ou `false`. Et on conditionne l'affichage de l'élément avec `v-show`. Si la propriété est à `true` alors l'élément sera affiché, sinon il sera caché avec un style inline `style="display: none;"`.

```js
new Vue({
  el: '#app',
  data: function() {
    return {
      afficher: true
    }
  }
})
```

```HTML
<div id="app">
  <p v-show="afficher">olé</div>
</div>
```


***


On peut aussi écrire des conditions avec les directives `v-if` et `v-else`. Cela fonctionne sur le même principe que le `v-show` et un `if` `else` classique. L'élément sera inséré dans le DOM ou non en fonction de la valeur de la propriété.


***


```js
new Vue({
  el: '#app',
  data: function() {
    return {
      afficher: true
    }
  }
})
```

```HTML
<div id="app">
  <p v-if="afficher">olé</div>
  <p v-else>oops</div>
</div>
```

Si `afficher === true` alors l'élément `<p v-if="afficher">olé</div>` sera inséré dans le DOM, sinon ce sera `<p v-else>oops</div>`.


***


Comme le `if` `else`, on peut aussi représenter un `for` avec vue à l'aide de la directive `v-for`.
Avec cette directive, on itèrera sur une propriété sous forme de tableau ou d'objet javascript.

Par exemple:

```js
new Vue({
  el: '#app',
  data: function() {
    return {
      profs: ['Alex','Erwan','Marin']
    }
  }
})
```

```HTML
<div id="app">
  <ul>
    <li v-for="prof in profs">{{ prof }}</li>
  </ul>
</div>
```


***


## Exercice

Voici un objet javascript qui vous donne le nom des profs et les jours où ils sont censé être là :
```{
  Alex: ['Lundi','Mardi,'Mercredi','Vendredi'],
  Erwan: ['Vendredi'],
  Marin: ['Lundi','Mardi','Mercredi','Jeudi']
}
```

Faire une liste html en utilisant VueJS, chaque élément de la list doit contenir une sous liste avec les jours où les professeurs sont présents.



---



## Interaction

VueJS facilite l'interaction. Pour cela, on utilise la directive `v-on:` ou son abbréviation `@`. On associe ensuite l'événement à une méthode définie dans l'instance de Vue. Pour définir les méthodes de l'instance, on utilise la propriété `methods`.


```html
<div id="app">
  <p @click="doThatOnClick" v-on:hover="doThatOnHover">click or hover me !</p>
</div>
```

```js
new Vue({
  el: '#app',
  methods: {
    dothatOnClick: function() {
      // todo on click
    },
    doThatOnHover: function() {
      // do that on hover
    }
  }
})
```


***


## Exercice

Créer un compteur avec un champ texte, et deux boutons. Le premier permettra au compteur de s'incrémenter, le second au compteur de décrémenter. Le champ texte affichera uniquement la valeure actuelle du compteur.



---



## v-model

Une composante intéressante de VueJS est son l'association d'une variable javascript à la valeur d'un champ texte. Elle nous servira particulièrement lorsque l'on verra les formulaires. La variable est nécessairement définie dans la propriété `data`.

```HTML
<div id="app">
  <input type="text" v-model="monTexte" />
</div>
```

```js
new Vue({
  data: function() {
    monTexte: '' //Si vous voulez lui donner une valeur initiale, indiquez le ici !
  }
});
```


***


## Les classes

On peut aussi ajouter des classes de manière dynamique. Pour cela, on utilise le `v-bind` sur la class. On peut aussi fournir un objet spécifiant la class que l'élément aura si la propriété est vraie ou fausse.


```html
<div id="app">
  <div :class="{ success: success, error: !success }" :class="myClassList"></div>
</div>
```

Note: expliquer le code



---



## Lifecycle

[https://vuejs.org/images/lifecycle.png](https://vuejs.org/images/lifecycle.png)

Chacun des événements cités ci-dessus fait référence à une méthode exécutée au moment explicité. Pour exécuter une fonction lorsque l'élément est ajouté au DOM par exemple, il faut créer une propriété `mounted` qui a pour valeur une fonction.

```js
new Vue({
  mounted: function() {
    //exécute ici quelque chose lorsque l'élément est inséré dans le DOM html
  }
});
```



---



## Optimisation des événements

Pour être certain d'exécuter une fonction que lorsqu'une propriété utilisée par cette dernière a changé et pas TOUT LE TEMPS, on utilise des méthodes computed.

Elles se déclarent comme ceci :
```js
new Vue({
  computed: {
    maMethodComputed: function() {
      //olé
    }
  }
})
```
