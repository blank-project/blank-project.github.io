## Les fonctions



---



## Une fonction c'est quoi ?
C'est une suite d'instructions que l'on va stocker exécuter à la demande.

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
Pour appeler une fonction, nous appellons la fonctions et lui demandons de s'exécuter en ajoutant les parenthèses à la fin.

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
_Ici la fonction a deux paramètres, param1 et param2_


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
Pour retourner une valeur, nous allons utiliser le mot clé `return` suivi de ce que l'on souhaite retourner. Par défaut, une fonction ne retourne rien, soit, `undefined`. On ne peut retourner qu'une seule valeur en JavaScript

```js
function returnOle() {
    return "olé";
}
console.log(returnOle()); /* output : olé */
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
* Une variable locale n'est accessible que dans le contexte d'exécution d'une fonction



---



## That's all folks !
