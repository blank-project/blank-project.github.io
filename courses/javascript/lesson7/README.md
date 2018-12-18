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

Ce sont les principaux frameworks actuellement sur le marché. React.js est plutôt orienté sur un développement modulaire, et angular pour un développement de grosses applications web.


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


***


`data` est l'attribut qui nous permet de spécifier les variables javascript auxquelles on aura accès dans notre instance de Vue.


***


## Interpolation

Toute les variables qui sont déclarées dans l'instance de Vue sont accessibles en HTML via les doubles accolades. Par exemple, la variable message déclarée précédemment sera accessible via : `{{ message }}` dans notre HTML.

```HTML
<div id="app">
  <p>{{ message }}</p>
</div>
```


***


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
  <p v-if="afficher">olé</p>
  <p v-else>oops</p>
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


## Exercice 1

Voici un objet javascript qui vous donne le nom des profs et les jours où ils sont censé être là :
```js
profs: {
            Alex: ['Lundi','Mardi','Mercredi','Vendredi'],
            Erwan: ['Vendredi'],
            Marin: ['Lundi','Mardi','Mercredi','Jeudi']
        }
```

Faire une liste html en utilisant VueJS, chaque élément de la list doit contenir une sous liste avec les jours où les professeurs sont présents.

Afin d'afficher la clé de l'objet, et donc le nom du professeur vous pouvez vous renseigner [ici](https://vuejs.org/v2/guide/list.html#v-for-with-an-Object)



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


## Accéder à votre instance de Vue

Pour accéder à l'instance de Vue à l'intérieur des méthodes utilisez `this`.


***


## Exercice 2

Créer un compteur avec un paragraphe, et deux boutons. Le premier permettra au compteur de s'incrémenter, le second au compteur de décrémenter. Le champ texte affichera uniquement la valeur actuelle du compteur.



---



## v-model

Une composante intéressante de VueJS est son l'association d'une variable javascript à la valeur d'un champ. Elle nous servira particulièrement lorsque l'on utilisera les formulaires. La variable est nécessairement définie dans la propriété `data`.

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
  <div :class="{ valid: success, error: !success }" :class="appelDuneMethod()"></div>
</div>
```

Note: expliquer le code


***


## Exercice 3

Créez une checkbox, lorsqu'elle est cochée, un champ texte et un bouton doivent apparaitre. Ce champ texte doit etre modifiable. Lorsque l'on clique sur le bouton, une fonction que vous avez définit dans votre instance de Vue doit se déclancher et afficher une alerte contenant le texte modifié.


***


## Exercice 4

Créez un champ texte, un paragraphe qui affichera le contenu du champ texte ainsi qu'une checkbox. Lorsque la checkbox est cochée, le texte affiché doit etre de couleur rouge, sinon le texte sera noir. Vous devez utiliser le système de classes et le système de classes avec fonction.



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


***


## Exercice 5

Affichez un `console.log` pour chacune des étapes de vie de votre instance Vue.



---



## Optimisation des événements et des propriétés (computed)

Reprenons l'exemple des classes avec l'appel de fonction. Si l'on modifie le texte, la fonction computed (non impactée par ce changement) est aussi exécutée.



***

Pour palier à ce problème, on utilise des propriétés `computed`. `maProprieteComputed` suivante ne sera modifiée que si la propriété showRedColor l'est aussi, pas quand `monText` sera modifiée.

```js
new Vue({
  data: {
    showRedColor: false,
    monText: '',
  },
  computed: {
    maProprieteComputed: function() {
      if (this.showRedColor) return 'red';
      else return '';
    }
  }
});
```


***


Annexe: on peut aussi spécifié un getter et un setter pour ces propriétés.

```
new Vue({
  computed: {
    maProprieteComputed: {
      get: function() {
        //getMyVariable
      },
      set: function () {
        //modifyVariable
      }
    }
  }
});
```


***


## Exercice 6

Reprendre l'exercice avec les classes en vous assurant que la propriété computed n'est bien appelée qu'une fois que la valeur de la checkbox change.



---



## Watchers

Si vous souhaitez appeler une fonction lorsqu'une variable est modifiée, vous pouvez utiliser un watcher. C'est une fonction qui prend en paramètre la nouvelle valeur et doit obligatoirement avoir le nom de la variable a écouter.

```
new Vue({
  watch: {
    maVariableAObserver: function (value) {
      // le code ici
    }
  }
});
```


***


## Exercice 8

Créez un input text avec un `v-model` ainsi qu'un watcher sur la propriété. Si la variable prend la valeur `vue` effectuez une alert affichant `vue`.



---



## Directives

C'est un attribut HTML qui permet d'imposer un comportement particulier à notre élément HTML. On peut en créer ou utiliser les pré-faites.

Mais si, vous en connaissez déjà ! `v-model`, `v-if`, `v-else`, `v-for`, etc.


***


## Mécanisme de création d'une directive

Une directive est en fait un ensemble de fonctions qui sont déclanchées selon différents événements.

* La fonction `bind` est déclanchée au moment de l'interprétation de la directive.
* La fonction `update` est déclanchée au moment de la mise à jour de la valeure passée en paramètre.
* La fonction `unbind` est déclanchée au moment de la suppression de l'élément HTML.
* La fonction `componentUpdated` est déclanchée lorsque le composant est mis à jour (nous verrons plus tard ce qu'est un composant).


***


## Les paramètres de ces fonctions

Chacune de ces fonctions aura au minimum 3 paramètres dans l'ordre :
1. `el` qui correspond à l'élément HTML auquel est attribué la directive
2. `binding` qui correspond à un objet généré par Vue.js contenant de nombreuses informations nécessaires à la directive
3. `vnode` qui est le virtualNode, un object Vue.js permettant d'accéder à des fonctionnalités avancées.
4. `oldVNode` c'est l'ancien virtualNode avant l'update (uniquement pour update)


***


## Création d'une directive globale

On créé ici une directive `v-salut`

```
Vue.directive('salut', {
  bind: function(el, bind, virtualNode) {

  },
  update: function(el, binding, virtualNode, oldVirtualNode) {

  },
  unbind: function(el, binding, virtualNode) {

  },
  componentUpdated: function(el, binding, virtualNode) {

  }
});
```


***


## Création d'une directive avec une seule fonction de traitement

On peut éviter de spécifier chacune des fonctions et donner une fonction unique qui servira à la fois pour `bind`, `update`, `unbind` et `componentUpdated`. La syntaxe sera la suivante :

```
Vue.directive('salut', function(el, bind) {
    // même fonction pour bind et pour updated
  }
});
```


***


## Création d'une directive locale

On peut aussi créer une directive localement avec la syntaxe suivante :

```
var myDirective = function(el, bind) {

};

new Vue({
  directives: {
    salut: myDirective,
  },
});
```



---



## Modifiers

Afin de modifier le comportement de certaines directives, on peut aussi lui spécifier ce que l'on appelle des modifiers.

Par exemple, on peut modifier le comportement par défaut d'un événement comme ceci :

```
<a href="http://blank.bellevillecitoyenne.fr" @click.prevent="toto">MonLien</a>
```


***


## Liste de modifiers pour les événéments

Des modifiers existent juste pour les événements et en voici la liste :
* `.prevent` : Annule l'action par défaut.
* `.stop` : Annule le bubbling.
* `.capture` : Force la capture de l'événement sur le bubbling.
* `.self` : Il faut vraiment cliquer sur cet élément pour déclencher l'événement, cliquer sur un enfant ne fonctionnera pas.


***


## Liste des modifiers pour les models

* `.lazy` : La modification est lancée lorsque l'on sort de l'input.
* `.trim` : Supprime les espaces à la fin de la chaine de caractères.


***


## Modifiers pour les écoutes de touches

* `@keyup.space` : Spécifie quelle touche écouter, en l'occurence la touche espace
* `@keyup.65` : Spéficifie d'écouter la touche avec le code 65


***


## Enchainement de modifiers

On peut ajouter plusieurs modifiers à la suite. Par exemple pour stopper la propagation d'un événement et spécifier que c'est sur cet élément uniquement et non ses enfants que l'on écoutera le click, on utilisera : `@click.prevent.self`




---



## Filtres

Un filtre est une fonction qui modifiera la valeur d'une variable à la volée.

Ils s'appliquent uniquement lors de l'interpolation d'une variable et ne peut pas s'appliquer sur les attributs.



***


## Appliquer un filtre

Pour appliquer un filtre on utilise un pipe suivi d'un espace et du nom du filtre, par exemple : `| uppercase`


***


## Définition d'un filtre global

Pour définir un filtre global, on utilise la notation suivante :


```
Vue.filter('uppercase', function(value) {
  return value.toUpperCase;
});
```


***


## Définition d'un filtre local

Pour définir un filtre localement, on utilise la notation suivante :

```
new Vue({
  filters: {
    uppercase: function(value) {
        return value.toUpperCase();
    },
  },
});
```


***


## Appel et définition d'un filtre avec paramètres


***


### Appel

Les filtres peuvent prendre des paramètres suplémentaires. Pour cela, on lui passera de cette manière suivante :

`{{ message | uppercase('param1','param2')}}`


***


### Définition


Pour définir un filtre prenant des paramètres supplémentaires, on les rajoute à la définition de la fonction comme ceci :

```js
Vue.filter('uppercase', function(value, param1, param2) {
    // do something
});
```
