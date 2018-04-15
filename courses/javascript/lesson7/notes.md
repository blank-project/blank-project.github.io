# Suivi des tutos grafikart

[https://www.youtube.com/watch?v=XkgiXngcpWk](https://www.youtube.com/watch?v=XkgiXngcpWk)

## 1

### initialisation
Initialiser vue js avec la variable globale Vue. Il faut cibler un élément et l'initialiser avec `new Vue({})`.

Définir le "state" de notre application avec l'option data.
```
new Vue({
  data: {
    maVariable: 'test'
  }
});
```


### directives

Pour utiliser une variable dans un attribut, il faut utiliser `v-bind` avec `:attribut` et on met le nom de la variable. On peut aussi ne pas mettre le `v-bind`.

Autre directive : `v-if`. Si la variable est définie, on peut écrire une condition.
`v-show` est similaire sauf qu'il appose `style="display: none;"` à la place de supprimer le code html
`v-else`
`v-for`

### interactions

`v-on` + evenement (click, change, focus, autre) ou `@`

pour appeler une fonction, il faut utiliser l'option `methods`
```
new Vue({
  methods: {
    myMethod: function() {
      // toutes les variables sont accessibles via this.maVariable par exemple
    }
  }
});
```

`v-model` permet de synchroniser une variable de data dans un input par exemple.
`:class` permet de fournir un objet pour créer des classes par exemple : `{success: success, error: !success}`. Ça fournira la class success si `sucess === true` et la class error si `success !== true`.

pour une checkbox : `:true-value` permet de fournir une valeur qui sera donnée lorsque la checkbox est checked et sinon `:false-value`.


## 2

### Inspection de notre vue

On peut inspecter notre instance de Vue avec
```
var v = new Vue();
console.log(v);
```

### Lifecycle

[https://vuejs.org/v2/guide/instance.html#Lifecycle-Diagram](https://vuejs.org/v2/guide/instance.html#Lifecycle-Diagram)

Il faut faire attention à tout supprimer lors de la suppression d'une instance, pour cela on peut utiliser la fonction que l'on associe à la propriété `destroyed`.

événement "mouted" => quand l'élément est disponible dans le DOM

### Propriétés

Les propriétés disponibles sont celles qui sont dans data. On a pas accès aux tableaux en utilisant l'index.

## 3

### Properties

On peut utiliser des méthods que l'on appelle des "computed". Ces méthodes ne sont appellées que lorsqu'une propriétée utilisée à l'interieure est modifiée.

```
new Vue({
  computed: {
    myMethod: function() {
      // toutes les variables sont accessibles via this.maVariable par exemple
    }
  }
});
```

On peut associer un getter et un setter aux methodes computed :
```
new Vue({
  computed: {
    myMethod: {
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

### Watchers

Ils sont uniquement appelés lorsqu'une variable est modifiée

```
new Vue({
  watch: {
    maVariableAObserver: function (value) {
      // le code ici
    }
  }
});
```

## 4

### Directives

C'est un attribut HTML qui font un comportement particulier. On peut en créer ou utiliser les pré-faites

#### Créer une directive

On peut créer des directives de manières globales

```
Vue.directive('salut', {
  // lorsque l'attribut est rajouté, 3 arguments
  // e: l'élément
  // b: le binding,
  // v: virtual node
  bind: function(el, bind, virtualNode) {
    ...
  },
  // lorsque les propriétés sont mises à jour, un update est lancé
  update: function(el, binding, virtualNode, oldVirtualNode) {

  },
  unbind: function(el, binding, virtualNode) {

  },
  componentUpdated: function(el, binding, virtualNode) {

  }
});
```
On peut aussi simplifier si on a une seule fonction pour le bind et le update, en utilisant cette notation :

```
Vue.directive('salut', function(el, bind) {
    // même fonction pour bind et pour updated
  }
});
```

```
let myDirective = function(el, bind) {

};

new Vue({
  directives: {
    salut: myDirective,
  },
});
```

### Modifiers

Permettent de préciser le comportement à adopter directement dans le HTML.

`@click.prevent` => annule l'action par défaut
`@click.stop` => Annulle le bubbling
`@click.capture` => ??
`@click.self` => Il faut vraiment cliquer sur cet élément, pas un enfant ou un parent

`v-model.lazy` => La modification est lancée lorsque l'on change de l'input
`v-model.trim` => supprime les espaces après

`@keyup.space` => Spécifie quelle touche écouter


## 5

### Filtres

Pour utiliser un filtre :
`{{ message | uppercase }}`

Pour créer un filtre :

```
Vue.filter('uppercase', function(value, param1, param2) {
  return value.toUpperCase;
});
```

Pour appeler un filter avec des paramètres : `{{ message | uppercase('aze','test')}}`

Pour appeler plusieurs filtres à la suite : `{{ message | uppercase | reverse)}}`

Pour utiliser un filtre local :

```
new Vue({
  filters: {
    myFilter: uppercase,
  },
});
```

## 6

### Les composants

Ce sont des éléments HTML particuliers (VirtualDOM). On va pouvoir créer nos éléments qui vont avoir leur propre logique.

#### Création de composants

On peut le créer de manière locale ou global, comme les filtres ou les directives.

```
Vue.component('monMessage', {
  //diverses propriétés
});
```

La principale différence avec une instance de vue, c'est le template et les props. Ce sont deux propriétés de déclaration qui permettent de spécifier le comportement du composant.

```
<!-- dans votre HTML -->
<mon-message type="success" :message="message"></mon-message>
```
```
Vue.component('monMessage', {
  //props: ce sont les propriétés passées lors de la déclaration en HTML
  props: ['type', 'message'],
  //template: c'est le template HTML qui remplacera l'élément dynamique que l'on a déclaré dans le HTML
  //ici class et messages seront remplacés par les variables passée dans le HTML
  template: `<div :class="class">{{ message }}</div>`
});
```

On peut définir le type des variables que l'on passe au composant
```
Vue.component('monMessage', {
  //props: ce sont les propriétés passées lors de la déclaration en HTML
  props: {
    type: {
      type: String,
      default: 'success'
    },
    message: [String, Number]
  },
  //template: c'est le template HTML qui remplacera l'élément dynamique que l'on a déclaré dans le HTML
  //ici class et messages seront remplacés par les variables passée dans le HTML
  template: `<div :class="class">{{ message }}</div>`
});
```

Si on veut le créer localement, il faut alors créer une variable avec la déclaration de composant et l'inclure dans la vue

```
let myComp = Vue.component('monMessage', {
  ///
});

new Vue({
  components: { mon-message: myComp }
});
```

Lorsque l'on créé un composant, il faut que data soit une fonction qui nous retourne des propriétés :

```
let myComp = {
  data: function() {
    return {
      data: 0
    };
  },
}
```

On peut accéder à l'élément parent dans composant enfant avec : `this.$parent`. /!\ le composant est différent du parent, il faut faire attention à en avoir aucune.

Pour communiquer avec l'élément parent, il faut que l'on communique par événements.

on utilise, `this.$emit`

Par exemple pour envoyer l'élément 'close', on utilise : `this.$emit('close')`

Pour que le parent reçoive l'événement on peu déclarer au niveau du composant parent qu'il réagira à cet événement : `<my-comp @close='myMethodToExecuteWhenClose'></my-comp>`

On peut aussi utiliser la balise slot dans le composant enfant, elle récupère le texte écrit à l'intérieur de la déclaration au moment de la création et permet de l'afficher.

```
<my-comp>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</my-comp>
```

```
Vue.component('myComp', {
  template: `
    <div>
      <p><slot>//le lorem ipsum sera là au moment du montage du composant</slot></p>
    </div>
  `
});
```

on peut aussi associer des noms aux slots, par ex :
```
<my-comp>
  <div slot="header">toto</div>
  <div slot="footer">tata</div>
</my-comp>
```

```
Vue.component('myComp', {
  template: `
    <div>
      <p>
        <slot name="header">//le toto sera là</slot>
        <slot name="footer">//le tata sera là</slot>
      </p>
    </div>
  `
});
```

Et on peut aller rechercher les slots dans le `this.$slots`.

## 7

### Best practices

Passer par une structure en HTML avant de découper en composants vue
Regarder le design pattern de Flux

Pour partager différents objets dans différents composants créer des variables globales (des objets, des classes, etc.).

FIN DE VIEW JS AVANT WEBPACK

## 8

### vue-cli
