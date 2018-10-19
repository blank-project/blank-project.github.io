## Les fonctions



---



## Une fonction c'est quoi ?
C'est une suite d'instructions que l'on va stocker et exécuter à la demande.

À cette fonction, on peut passer des éléments concernant son exécution, c'est ce que l'on appelle des paramètres.

Chaque fonction peut retourner un résultat.



---



## Déclarer une fonction
Pour déclarer une fonction, on va utiliser le mot clé `function`, suivi du nom de la fonction, et enfin de ses paramètres entre parenthèses.

Le contenu de la fonction sera écrit entre accolades `{` et `}`.

```js
function myFunction() {
    /* code here */
}
```


***


## Appeler une fonction
Pour appeler une fonction, nous écrivons son nom et lui demandons de s'exécuter en ajoutant les parenthèses à la fin.

```js
function showOle() {
    console.log("olé");
}
showOle(); /* output : olé */
```



---



## Les paramètres c'est quoi ?
Ce sont des variables qui vont être initialisées par défaut au démarrage de l'interprétation de la fonction.

Lorsqu'on appelle celle-ci, on peut donner une valeur aux paramètres.


***


## Déclarer une fonction prenant des paramètres
Pour déclarer une fonction prenant des paramètres, nous allons écrire ces derniers entres parenthèses séparés par des virgules.

```js
function myFunction(param1, param2) {
    /* param1 et param2 sont des variables dans la fonction,
    Ils peuvent être utilisés comme n'importe quelle autre variable */
}
```
Ici la fonction a deux paramètres, _param1_ et _param2_


***


## Appeler une fonction en passant des paramètres
Pour appeler une fonction en lui passant des paramètres nous allons au moment de l'appeler, lui donner ces derniers entre parenthèses et séparés par des virgules

```js
function writeInConsole(param1, param2) {
    console.log(param1, param2);
}
writeInConsole("olé","_blank"); /* output : olé blank */
```



---



## Retourner une valeur
Pour retourner une valeur, nous allons utiliser le mot clé `return` suivi de ce que l'on souhaite retourner. Par défaut, une fonction ne retourne rien, soit, `undefined`. On ne peut retourner qu'une seule valeur en JavaScript.

```js
function returnOle() {
    return "olé";
}
console.log(returnOle()); /* output : olé */
```



---


<!-- .slide: id="exceptions" -->
## Les Exceptions

Les Exceptions sont des erreurs qui traduisent un comportement inattendu.

Le mot-clé `throw` permet de **lever** une Exception.

L'exécution de la fonction s'arrête alors.


***


```javascript
function isPositive(number) {
  if (typeof number !== 'number') {
  	throw new Error('Expected a Number');
  }
  return number >= 0;
}
```

Il est possible d'utiliser n'importe quel valeur comme Exception.

On utilise en général l'objet `Error` (on y reviendra plus tard).


***


### Traiter les Exceptions

Les mot-clés `try`, `catch` et `finally` permettent de traiter les Exceptions.

Si une exception est levée dans un bloc `try`, l’exécution du bloc s'arrête, et le bloc `catch` est exécuté.

Le bloc `finally` est facultatif et s'exécute dans tout les cas.


***


```javascript
try {
   // Cette fonction peut lever une Exception.
  var value = getValue();
  console.log(value);
} catch(e) {
  console.log('Une erreur est survenue', e)
} finally {
  console.log('Fin du traitement');
}
```



---




## La notion de scope


***


## Qu'est-ce que le scope ?
Le scope est le contexte d'exécution (fonction actuelle). Chaque variable a son scope, et n'est accessible qu'à l'intérieur de ce dernier.


***


## J'ai pas tout compris...
Prenon un exemple :

```js
/* param1 n'existe pas ici */
function plusOne(param1) {
    /* param1 existe ici, toutes les variables déclarées dans le bloc de la fonction
    ne seront accessibles qu'ici */
    return param1+1;
}
/* param1 n'existe pas ici */
console.log(plusOne(2)); /* output : 3 */
```


***


## Les variables globales et locales
* Une variable globale est accessible partout dans le code
* Une variable locale n'est accessible que dans le contexte d'exécution d'une fonction (dans son scope)



---



## Les fonctions anonymes

Il est possible de définir des fonctions sans nom : les fonctions **anonymes**.

Pour pouvoir les appeler, il faut les stocker dans des variables, ou les passer en paramètre d'autre fonctions.

```js
var anonymous = function(param1) {
  console.log("In anonymous : ", param1);
};
// On execute la fonction contenue dans la variable anonymous
anonymous('rocks');
```



---



## Les callbacks

On peut également passer des fonctions en paramètre d'autre fonctions.

C'est ce qu'on appelle un **callback**.

Cela permet de les appeler dans la fonction principale, en général à la fin d'un traitement long.


***


```js
function avecCallback(callback) {
  // Un appel à un serveur qui prend du temps à répondre.
  var result = appelServeur();
  // On appelle le callback avec la valeur result
  callback(result);
};

avecCallback(function(result) {
  // On affiche le resultat dans la console.
  console.log(result);
})
```



---



## That's all folks !
