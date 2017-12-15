# Les structures de contrôle



---



## Structures de contrôle ?
* “une structure de contrôle est une commande qui contrôle l'ordre dans lequel les différentes instructions d'un algorithme ou d'un programme informatique sont exécutées”
(Wikipédia)
* Sans structure de contrôle, on ne pourrait pas faire grand chose, elles sont essentielles et on les retrouve dans quasiment tous les langages de programmation (bien que sous différentes formes)
* Un programme Javascript est exécuté ligne par ligne. Les structures de contrôles vont nous permettre de manipuler cet ordre



---



## Les conditions
* Beaucoup de structures de contrôles sont conditionnelles, càd qu'elles dépendent de conditions
* Les conditions sont décrites en combinant des opérateurs, des variables et des constantes
* Une condition quand elle est résolue possède une valeur de type booléen (true/false, 1/0)



---



## Quelques opérateurs de comparaison
* Ils retournent des booléens
* ">" (>=) : vrai si la valeur de gauche est supérieure (ou égale) à celle de droite
* < (<=) : vrai si la valeur de gauche est inférieure (ou égale) à celle de droite
* == (===) : vrai si la valeur de gauche est (strictement, on y reviendra plus tard) égale à celle de droite
* != (!==) : vrai si la valeur de gauche n'est pas (strictement, on y reviendra plus tard) égale à celle de droite



---



* Exemples :
```js
console.log(1 > 2); // false
console.log(1 <= 1); // true
console.log(1==1); // true
console.log(1!=1); // false
```



---



## Les opérateurs logiques
* Ils permettent de combiner les conditions
* && (et logique) : vrai si la valeur de gauche et de droite sont vraies
* || (ou logique) : vrai si au moins l'une des valeurs est vrai
* ! (non logique) : vrai si la valeur fausse, faux si la valeur est vraie
* Exemples :
```js
console.log(true&&false); // false;
console.log(!(1 > 2)); // true
console.log((1==1)||(1!=1)); // true
```



---



# Structures de contrôle principales en JS



---



## if ("si") else ("sinon") 1/3
* Permet d'exécuter des parties de code différentes selon qu'une condition est vraie ou fausse
* Syntaxe :
```js
if (condition) {
    // exécuté si la condition est vraie
} [else {
    // exécuté si la condition est fausse
}]
```
* Il est possible de ne pas indiquer la partie "else"



---



## if ("si") else ("sinon") 2/3
* Exemple :
```js
var aDitBonjour = false;
if(aDitBonjour) {
	console.log("Tranquille!");
} else {
    console.log("Attention..");
}
```



---



## if ("si") else ("sinon") 3/3
* Il est possible d'imbriquer des structures de contrôle
* Exemple :
```js
var age = 20;
if(age > 65) {
	console.log("T’es trop vieux");
} else if (age >= 18){
    console.log("Tu peux rentrer");
} else {
	console.log("C’est mort");
}
```



---



## for ("pour") 1/3
* Permet d'exécuter du code pour une suite de valeur
* Cette suite de valeur peut être des entiers ou venir d'un ensemble (on le verra plus tard)
* Syntaxe générique :
```js
for (<instruction de départ> ; <condition de fin> ; <instruction exécutée à chaque passaque>) {
    //
}
```



---



## for ("pour") 2/3
* Exemple de la syntaxe avec des entiers (la plus utilisée) :
```js
for ( var i = 0 ; i < 100 ; i++ ) {
    console.log("Je compte jusqu'à " + i);
}
```



---



## for ("pour") 3/3
* Les paramètres sont optionnels, on donc créer une boucle infinie de la manière suivante : for (;;) { }
* break : permet de sortir de la boucle for
* continue : permet de passer à la passe suivante



---



## Pause exo!
* écrire un fizz buzz :
Le programme doit afficher sur la sortie tous les entiers successifs à partir de 1 jusqu'au nombre donné en paramètre, sauf :
Les multiples de 5 : afficher fizz
Les multiples de 7 : afficher buzz
* Indice : utiliser une boucle for !



---



## While (tant que) 1/2
* Permet d'exécuter du code tant qu'une condition est vraie
* Syntaxe :
```js
while (<condition>) {
    //
}
```



---



## While (tant que) 2/2
* Exemple :
```js
var i = 0;
while (i < 100) {
    console.log(i);
    i++;
}
```
* Que fait l'exemple ?



---



## do while (faire tant que)
* Une variante de while qui force l'exécution du code au moins une fois
* Syntaxe :
```js
do {
    //
} while(<condition>);

```



---



## switch
* Permet de définir des parties de codes pour différentes valeur d'une variables
* Syntaxe :
```js
swich(<variable>) {
    case <cas1>:
        // exécuté si variable vaut cas1
        break;
    case <case2>:
        // exécuté si variable vaut cas2
        break;
    default:
        // Exécuté pour toutes les autres valeurs
}
```



---



## The end



---
