## Les Composants

Ce concept est essentiel pour assurer la maintenabilité de votre application. Il s'inspire des modules (code résolvant une problématique définie, indépendant qui peut etre réutilisé de nombreuse fois dans une application), et comme ce dernier, encapsule une logique réutilisable.

Il prend la forme d'éléments HTML, définit en JavaScript.


***


## Dans quel cas l'utiliser ?

Un composant encapsule une logique et un template HTML. On l'utilise principalement lorsqu'on est susceptible de réutiliser une logique (écran de connexion utilisateur, item de liste, etc.).


***


## Comment l'utiliser ?

Un composant permet d'étendre les éléments HTML de base pour encapsuler du code réutilisable. Ils s'utilisent donc comme un élément HTML et s'appellent dans le code HTML :

```html
<my-component></my-component>
```


***


## Quelle est la différence avec une instance de Vue ?

Le composant aura deux propriétés supplémentaires par rapport à une instance de Vue :
* `props` : Sous forme de tableau, elle spécifie quelles variables seront passées à notre composant lors de son initialisation.
* `template` : Contient le template HTML.

Il aura le meme cycle de vie qu'une instance de Vue.


***


## C'est quoi un template HTML ?

Un template est une structure HTML qui remplacera l'élément HTML servant à appeler le composant.



---



## Création d'un composant

On peut créer un composant de manière globale ou locale (comme pour les filtres et les directives).

Lorsqu'on leur donne un nom, ce dernier sera en `camelCase` et il sera appelé en `kebab-case`.

***


## Création d'un composant global

Pour créer un ocmposant global, on utilisa la meme notation que vue précédemment:

```
Vue.component('monMessage', {
  template: '<div><p>{{ maPropriete }}</p></div>',
  props: ['maPropriete'],
  // autres propriétés (methods, directives, filters, computed, data, etc.)
});
```


***


## Création d'un composant local

Pour créer un ocmposant global, on utilisa la meme notation que vue précédemment:

```
var monMessage = {
  template: '<div><p>{{ maPropriete }}</p></div>',
  props: ['maPropriete'],
  // autres propriétés (methods, directives, filters, computed, data, etc.)
};

new Vue({
  components: { monMessage: monMessage }
});
```


***


## Les données d'un composant

Lorsque l'on utilise des composants, il faut faire attention à l'intégrité des données, et en particulier de la propriété `data`. En effet, si l'on veut qu'elle soit différente pour chaque instance du composant, il faut que ce soit une fonction qui retourne les valeurs souhaitées, comme ceci :

```
var myComp = {
  data: function() {
    return {
      data: 0
    };
  },
}
```



---



## Communication entre composants enfants et parents


***


## Accéder au parent dans un composant enfant

Pour accéder au parent dans un composant fils, on peut utiliser `this.$parent`.


***


## Comment communiquer entre composants ?

![https://vuejs.org/images/props-events.png](https://vuejs.org/images/props-events.png)


***


## Communication parent -> enfant
Pour communiquer dans le sens descendant, on passe des attributs à notre appel de composant. Ces attributs peuvent etre littéraux ou dynamiques :

`<my-component attr-literal="1"></my-component>`
`<my-component :attr-dynamic="1"></my-component>`

```js
Vue.component('myComponent', {
    template: '',
    props: ['attrDynamic', 'attrLiteral']
});
```


***


Ci-dessus, la valeur de l'attribut `attrDynamic` au sein du composant sera `1` (number), tandis que la valeur de `attrLiteral` sera `"1"` (string). On utilisera les attributs dynamiques (avec `v-bind`) pour passer une variable javascript.


***


## Communication enfant -> parent

La communication dans l'autre sens se fait à l'aide d'événements émis par l'enfant.


***


## Émission d'événements

Pour émettre un événement, on utilise `$emit` comme ceci : `this.$emit('nomDeLevenement')`.


***


## Écoute d'événements

On utilise le meme procédé que pour les événements HTML et vu précédemment :


```html
<my-component @nomDeLevenement='maFonction'></my-component>
```



---



## Slots


***


## Slot simple

On peut aussi utiliser un concept nommé `slot` qui permet de passer du texte lors de l'appel HTML.


```html
<my-component>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</my-component>
```


***


## Utilisation d'un slot simple

Pour utiliser un slot simple, ce sera dans le template avec l'élément HTML custom `<slot></slot>`, par exemple :

```
Vue.component('myComp', {
  template: '<div><p><slot>//le lorem ipsum sera là au moment du montage du composant</slot></p></div>'
});
```


***


## Slots nommés

Pour passer la donnée textuelle dans un slot nommé on utilise l'attribut HTML `slot`.

```
<my-comp>
  <div slot="header">toto</div>
  <div slot="footer">tata</div>
</my-comp>
```


***


## Utilisation d'un slot nommé

```
Vue.component('myComp', {
  template: '<div><p><slot name="header">//le toto sera là</slot><slot name="footer">//le tata sera là</slot></p></div>'
});
```


***


On peut aussi accéder aux slots du composant via le JavaScript avec la propriété `$slots` : `this.$slots`.



---



## Informations & bonnes pratiques


***


Passez du temps à réflechir à votre structure HTML avant d'effectuer la scission des composants.


***


Vous pouvez inclure des composants dans des composants, et c'est meme recommandé. Faites attention à ne pas découper les composants trop gros ou trop petits (on a tendance à vouloir faire du sashimi généralement...).


***


Pour partager des informations entre composants, créez des variables globales.


***


Regardez le design pattern de Flux.
