# Objets et Tableaux



---



## Les variables complexes

Certains types de variables (ou d'objets) plus complexes nous permettent de stocker des données plus spécifiques. Ces variables complexes sont généralement considérées comme des objets.



---



## Mais qu'est-ce qu'un objet JavaScript ?



***



## Un objet en JavaScript

Un objet en JS est différent des autres langages. En effet, avec la norme EcmaScript 5.1 (celle que nous utilisons) un objet est une variable comportant des propriétés et méthodes.



***



## Déclarer un objet vide
Pour déclarer un objet vide on utilise les accolades (ou brackets) `{` et `}`.

```js
var toto = {};
```



***



## Qu'est-ce qu'une propriété ?
Une propriété est une variable attitrée à l'objet. Elle est un couple "clé-valeur" comme une variable classique sauf qu'elle est propre à ce dernier.



***



## Créer un objet avec propriétés (1/2)

Pour créer un objet directement avec une propriété on va utiliser la notation litérale. La clé de l'élément et sa valeur seront séparé par `:`. Vous pouvez déclarer plusieurs propriétés en les séparant par des `,`.

```js
var toto = {name : "_blank", purpose : "web dev"};
console.log(toto); /* output : { name : '_blank', purpose : 'web dev' } */
```



***



## Créer un objet avec propriétés (2/2)

On peut aussi accéder à une propriété d'un objet en utilisant le `.` ou les crochets `["<propriete>"]`. Si elle n'existe pas, elle sera créée, sinon modifiée.

```js
var toto = {};
toto.name = "_blank"; /* Appel de la propriété name et attribution de la valeur textuelle  "_blank" */
console.log(toto); /* output : { name : '_blank' } */
```



***



## Accèder à la valeur d'une propriété
Pour accèder à la valeur d'une propriété, on utilise le `.` ou les crochets `["<propriete>"]`.

```js
var toto = {name : "_blank", purpose : "web dev"};
console.log(toto.name);
console.log(toto["purpose"])
```



***



## Modifier une propriété
Pour modifier une propriété, on fait comme pour une variable on y accèdant comme vu au slide précédent.

```js
var toto = { name : "tata" };
toto.name = "_blank"; /* Appel de la propriété name et modification de la valeur textuelle  "_blank" */
toto["name"] = "en fait"
console.log(toto); /* output : { name : 'en fait' } */
```


***



## Supprimer une propriété
Pour supprimer une propriété on utilise le mot clé `delete` suivi du chemin d'accès à la propriété.

```js
var toto = { name : "_blank", purpose : "dev web" };
delete toto.name;
console.log(toto); /* output : {} */
```



***



## Qu'est-ce qu'une méthode ?
Une méthode est une propriété qui a pour particularité d'être une fonction. Elle est donc associée à l'objet et on peut l'appeler comme montré à la suite.

```js
var toto = {name : "_blank", purpose : "web dev"};
toto.show = function() {
    console.log("olé");
}
toto.show(); /* output : olé */;
```



***



## This
`this` est un mot clé faisant référence à la variable propriétaire du code en cours d'execution.
* Appelé dans une fonction `this` fait référence à l'objet propriétaire de la fonction
* Appelé dans un objet, `this` fait référence à l'objet



***



## Exemple
Lorsque l'on appelle la methode `show` de l'objet `toto`, on peut voir que le `this` fait référence à l'objet propriétaire de la fonction, soit `toto`.

```js
var toto = {name : "_blank", purpose : "web dev"};
toto.show = function() {
    console.log(this);
}
toto.show(); /* output : { name : '_blank', purpose : 'web dev', show : [Function] } */;
```



---



## Les tableaux



***



## Qu'est-ce qu'un tableau ?
C'est un type d'objet qui nous permet de stocker plusieurs données (usuellement de même type) dans la même variable.

Vu que le JavaScript est un langage dynamique, nous allons pouvoir manipuler ce tableau facilement.

Chaque valeur dans le tableau correspond à un "index". Cet index commence à la valeur 0 et va en s'incrémentant.



***



## Créer un tableau
Pour créer un tableau on utilisera les crochets `[` et `]`.

```js
/* Création d'un tableau vide */
var toto = [];
```



***



## Initialiser un tableau avec des données
Pour cela on va séparer les données par des virgules à l'intérieur des crochets.

```js
/* Initialisation de tableau avec des strings */
var profs_blank = ["Erwan","Yohann","Mohamed","Paulin","Marin"];
```
_ici par exemple on a initialisé un tableau avec les prénoms des professeurs de _blank_



***



## Insérer une variable dans un tableau
Pour insérer une valeur dans un tableau on utilisera deux méthodes propres aux variables de type tableau :
* `push` ajoute une valeur à la fin d'un tableau
* `unshift` ajoute une valeur au début d'un tableau

```js
var toto = ["olé"];
/* Insertion de valeur à la fin du tableau */
toto.push("_blank");
console.log(toto); /* output: [ 'olé', '_blank' ] */
/* Insertion de valeur au début du tableau */
toto.unshift("wat");
console.log(toto); /* output: [ 'wat', 'olé', '_blank' ] */
```



***



## Supprimer les valeurs d'un tableau
Pour supprimer une valeur d'un tableau on utilisera deux méthodes propres aux variables de type tableau :
* `pop` supprime la valeur à la fin d'un tableau
* `shift` supprime la valeur au début du tableau

```js
var toto = ["wat","olé","_blank"];
/* Suppression de valeur à la fin du tableau */
toto.pop();
console.log(toto); /* output: [ 'wat, 'olé' ] */
/* Suppression de valeur au début du tableau */
toto.shift();
console.log(toto); /* output: [ 'olé' ] */
```



***



## Accéder à un élément d'un tableau (ou le modifier)
Pour accéder à un élement d'un tableau, on va utiliser les crochets `[` et `]` avec l'index de l'élément que auquel on veut accéder (sa position dans le tableau).

```js
var toto = [ "olé", "_blank" ];
console.log(toto[0]); /* output : olé */
console.log(toto); /* output : [ 'olé', '_blank' ] */

```



***



## La propriété utile des tableaux
`length` vous permet d'avoir la longueur de votre tableau sous forme de nombre.
```js
var toto = [ "alley", "_blank" ];
console.log(toto.length); /* output : 2 */
```



***



## Intérer dans un tableau
Pour intérer dans un tableau nous utiliserons une boucle for :

```js
var toto = ["wat","olé","_blank"];
/* Itération ! */
for (var i = 0; i < toto.length; i++) {
    console.log(toto[i]); /* montre l'élément à l'index i du tableau */
}
```
_Ici la boucle va nous afficher les éléments du tableau un par un_



***



## Certaines méthodes utiles pour les tableaux
* `join` : Fusionne le tableau et retrouve une string
* `indexOf` : Donne l'index auquel se trouve un élément
* `splice` : Ajoute ou supprime des éléments d'un tableau
* Plus [ici](http://www.w3schools.com/jsref/jsref_obj_array.asp)



---



## Les boucles for in
On peut parcourir les objets et les tableaux à l'aide la boucle for .. in

```js
var toto = ["wat","olé","_blank"];
for(var i in toto) {
    console.log(i + " = " + toto[i]);
}
```



---



## Les autres variables complexes
Toutes sont des objets. Et partent avec des propriétés et méthodes par défaut. En voici une liste non exhaustive :
* `Date`
* `Array`
* `Function`
* `Math`
* `RegExp`
* `Objects`



***



## Créer un objet
Pour créer un objet qui est par défaut définit en JavaScript on utilise le mot clé `new`.
```js
var dotd = new Date();
console.log(dotd); /* output Thu Dec 08 2016 01:11:24 GMT+0100 (CET) */
```
_ok vous savez quand j'écris les cours maintenant ..._



***



## Exemple d'objet standard et ses méthodes : Date



***



## Date (1/2)

* getTime() : Retourne le timestamp (millisecondes écoulées depuis le 1/01/1970)
* getMilliseconds() : Retourne la milliseconde courante en nombre
* getSeconds() : Retourne la seconde courante en nombre (entre 0 et 59)
* getMinutes() : Retourne la minute courante en nombre (entre 0 et 59)
* getHours() : Retourne l'heure en nombre (en format 24h)
* getDate() : Retourne le jour en nombre (entre 1 et 31)
* getDay() : Retourne le jour de la semaine en nombre (0 - 6)
* getMonth() : Retourne le mois courrant en nombre (entre 0 et 11)



***



## Date (2/2)

* getFullYear() : Retourne l'année courante en nombre à quatre chiffres
* setTime() : Change le timestamp
* setSeconds() : Change la seconde
* setMilliseconds() : Change la milliseconde
* setMinutes() : Change la minute
* setHours() : Change l'heure
* setDate() : Change le jour en nombre (entre 1 et 31)
* setMonth() : Change le mois
* setFullYear() : Change l'année



---



## Comment utiliser les autres objets standards ?

Il faut aller voir la documentation : http://www.w3schools.com/js



---



## The end !
