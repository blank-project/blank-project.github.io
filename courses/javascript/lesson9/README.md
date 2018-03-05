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



## Programmation Orientée Objet
