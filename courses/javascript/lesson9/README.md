# JavaScript : ES6+ et Programmation Orientée Objet



---



## Introduction

Jusqu'à présent, nous avons développé en ES5 (5e version du standard ECMAScript, qu'implémente JavaScript).

Depuis 2015, une nouvelle version est standardisée : ES6. Celle-ci apporte beaucoup de nouveauté dans la syntaxe et les fonctionnalités du langage.

Le support de cette version par les navigateurs augmente, mais il est souvent nécessaire de passer par un transpileur.

La version 2016 (ES7) apporte également de nouvelle fonctionnalités.



---



### Block-Scoped Variables (ES6)

En ES5, on dispose d'une seule manière de déclarer des variables : `var`.

Une variable déclarée de cette manière est accessible dans la fonction qui englobe sa déclaration.

En ES6, on peut utiliser `let` pour déclarer une variable accessible uniquement dans un bloc.


***


```javascript
if (true) {
	var test = 2;
}
console.log(test); // 2
```

```javascript
if (true) {
	let test = 2;
}
console.log(test); // ReferenceError: test is not defined
```


***


### Constantes (ES6)

En ES6, on peut définir des constantes, c'est-à-dire des variables qu'on ne peut pas ré-assigner.

```javascript
const test = 2;
test = 3; // TypeError: invalid assignment to const `test'
```


***


### Lambdas (ES6)

ES6 nous permet de définir des Lambdas (ou "Arrow Functions").

ES6 :
```
(a, b) => a + b
x => { return x + 2; }
() => Math.random()
```

ES5 :
```
function(a, b) { return a + b; }
function(x) { return x + 2; }
function() { return Math.random(); }
```


***


### Method Properties (ES6)

ES6 fournit une syntaxe raccourcie pour définir des méthodes dans un objet.

ES6 :
```javascript
obj = {
    foo (a, b) {
        …
    }
}
```

ES5 :
```javascript
obj = {
    foo: function (a, b) {
        …
    }
}
```


***


### Promises (ES6)

L'objet Promise (pour « promesse ») est utilisé pour réaliser des traitements de façon asynchrone.
Une promesse représente une valeur qui peut être disponible maintenant, dans le futur, voire jamais.

On peut chaîner les Promises.


***


#### Méthodes

- `catch(onRejected)` : Callback à utiliser en cas de rejet de la promesse.
- `then(onFulfilled [, onRejected])` : Callbacks à utiliser en cas de résolution ou de rejet de la promesse.
- `finally(onFinally)` : Callbacks à utiliser lorsque la promesse est résolue, qu'elle soit tenue ou rejetée.

On utilise en général des Lambdas pour les callbacks des Promises.


***


#### Exemple

```javascript
// Create a fulfilled promise
var p = new Promise((resolve, reject) => {
  resolve(4);
});

// Second .then throws error, .catch() still handles it
// as rejection anywhere in the processing chain of promise
p.then((val) => val + 2)
 .then((val) => { throw new Error("step 2 failed!") })
 .then((val) => console.log("got", val))
 .catch((err) => console.log("error: ", err.message));
// => error: step 2 failed!
```


***


### Async-Await (ES7)

L'utilisation du mot-clé `await` dans une fonction `async` permet d'écrire du code asynchrone comme si il était synchrone.

`await` suspend l’exécution d'une fonction `async` jusqu'à la résolution d'une **Promise**.

Si la Promise est rejetée, l'expression `await` lève une [Exception](../lesson3/#/exceptions).


***


Sans `async-await`
```javascript
function fetch() {
	// Récupère une valeur après 2 secondes.
	resolvePromiseAfter2Seconds("data")
	.then(data => {
		console.log(data);
	})
	.catch(e => {
		console.log('Error during promise resolution');
	});
}
```


***


Avec `async-await`
```javascript
async function fetch() {
		// Récupère une valeur après 2 secondes.
		try {
			var data = await resolvePromiseAfter2Seconds("data");
			console.log(data);
		} catch(e) {
			console.log('Error during promise resolution');
		}
}
```



---



## Programmation Orientée Objet en JavaScript


***


## Qu'est-ce que la Programmation Orientée Objet - POO (OOP en anglais) ?
C'est un paradigme de programmation qui permet d'organiser son code et d'assurer la lisibilité et maintenance de son code.
Le concept se base sur la notion d'"object" et de "class".


***


## Qu'est-ce qu'un objet ?
Un objet est une donnée qui a un type, ainsi que des attributs auxquelles sont associées des valeurs ou des fonctions.
- Si la valeur associée est une fonction, alors cet attribut sera une *méthode*
- Sinon, l'attribut sera appelé propriété


***


## Oh, ça me fait penser à un objet JavaScript !
Exacement, sauf qu'il y a la notion de classe. Chaque objet est d'un certain type, aussi appelé "class". C'est l'autre terme fondamental.


***


## Qu'est-ce qu'une classe ?
Une classe est un moule servant à créer des objets dont les méthodes seront similaires mais les propriétés seront différentes. Par convention, le nom de classe commence par une majuscule.


***


## Des exemples?


***


## Parlons gateaux
Une classe pourrait se comparer à un moule à gateau. Tous les gateaux qui sortiront de ce moule auront la meme forme cependant ils pauvent avoir une composition ou un gout différent. Typiquement, ils auront des propriétés différentes mais ils seront tous de type gateau. Chaque gateau sera donc un objet qui aura pour classe "Gateau"


***


## Un autre exemple ? Parlons voiture !
On peut voir une classe comme une usine de voitures. Chaque voiture qui sortira de l'usine aura des propriétés différentes (couleur, forme, habillage, moteur, etc.) cependant elles auront des méthodes similaires (avancer, reculer, tourner, etc.). Chaque voiture sera un objet qui aura pour classe "Voiture".



---



## Maintenant que le concept est clair, passons au JavaScript !


***


## Comment créer une classe ?
Pour créer une classe on utilise le mot clé `class`.

Exemple :

```js
class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
}
```


***


## Les constructeurs

Chaque class a ce que l'on appelle un constructeur. C'est la fonction qui va etre appelée lorsque l'on va demander une création d'un objet, à partir de cette dernière. Ce processus est ce que l'on appelle une *instanciation*.

Chaque objet qui est créé à partir de cette classe est ce que l'on appelle une *instance*.

Ils peuvent avoir des paramètres qui seront transmis lors de la création d'un objet.

***


## Créer un objet à partir d'une class

Pour créer un objet à partir d'une classe, on utilise le mot clé `new`.

```js
class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
}

var monRectangle = new Rectangle(20, 30); // { height: 20, width: 30 }
```


***


## Organisation du code

Lorsque l'on créé une classe, toutes les propriétés doivent etre définies dans le constructeur sous la forme : `this.propertyName`. `this` faisant référence à l'objet instancié.

Les méthodes quant à elles sont définies comme le constructeur :

```js
class Rectangle {
  constructor() {
    // code here
  }

  // nouvelle méthode
  area() {
    // code here
  }
}
```


***


## Getters & Setters

Pour chacune des propriétés de notre objet, on définit ce que l'on appelle des `getter` et `setter`. Ce sont des méthodes spéciales faites respectivement pour récupérer ou modifier les propriétés.


***

## Définir un Getter / Setter

```js
class Rectangle {
  constructor() {
    this.height = 20;
  }

  // définition du getter de height
  get height() {
    return this.height;
  }

  // définition d'un setter de height
  set height(value) {
    // code permettant de vérifier que la nouvelle valeur correspond au format de la propriété
    this.height = value;
  }
}
```


***


## Utilisation d'un Getter

Pour utiliser un getter, il suffit juste d'appeler la propriété pour en faire quelque chose :

```js
var monRectangle = new Rectangle();

console.log(monRectangle.height); // ici le getter que l'on a définit plus haut sera utilisé
```


***


## Utilisation d'un Setter

```js
var monRectangle = new Rectangle();

monRectangle.height = 30; // ici le setter que l'on a définit plus haut sera utilisé
```


***


## Le concept d'héritage

Dans certains cas, on peut avoir besoin de créer une autre classe possédant les memes méthodes de base. Typiquement, nous pouvons créer une classe `Animal` dont hériteront plein d'autre classes comme `Chien`, `Chat`, etc.


***


## Hériter d'une classe

L'héritage de classe se fait lors de la définition de celle-ci avec le mot clé `extends`.

```js
class Animal {
  // code here
}

class Cat extends Animal {
  // Le code de la classe Animal sera inséré ici et vous pouvez
  // surcharger des méthodes
}
```


***


## Les méthodes static

Une méthode `static` permet de pouvoir exécuter la méthode d'une classe sans l'instancier. Elle se définit comme suit :

```js
class Rectangle() {
  // code here
  static area(side1, side2) {
    return side1 * side2;
  }
}
```


***


## Utilisation d'une méthode static

Partons du code écrit ci-dessus. Pour exécuter la méthode static, il faut l'appeler directement, sans instancer d'objet.

```js
var area = Rectangle.area(20,30);
```


***


## Bonnes pratiques & Annectodes

La POO est un paradigme permettant d'organiser son code. Les méthodes, correspondant à un type d'objet seront alors toutes regroupées au meme endroit.

Lorsque vous devez créer plein de données du meme type, essayer de réflechir en classe et objets, cela permettra d'organiser votre code correctement.

Le JavaScript est un langage tout objet, c'est à dire que TOUT est un objet (les variables, les fonctions, les tableaux, etc.).
