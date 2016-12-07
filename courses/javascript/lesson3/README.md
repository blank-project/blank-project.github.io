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

On peut aussi accéder à une propriété d'un objet en utilisant le `.`. Si elle n'existe pas, elle sera créée, sinon modifiée.

```js
var toto = {};
toto.name = "_blank"; /* Appel de la propriété name et attribution de la valeur textuelle  "_blank" */
console.log(toto); /* output : { name : '_blank' } */
```


***


## Modifier une propriété
Pour modifier une propriété, comme dit dans le slide précédent, on utilise le `.` pour y accéder depuis l'objet. Si elle existe, elle sera modifiée.

```js
var toto = { name : "tata" };
toto.name = "_blank"; /* Appel de la propriété name et modification de la valeur textuelle  "_blank" */
console.log(toto); /* output : { name : '_blank' } */
```


***


## Supprimer une propriété
Pour supprimer une propriété on utilise le mot clé `delete` suivi du chemin d'accès à la propriété.

```
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
var toto = [ "alley", "_blank" ];
toto[0] = "olé";
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
