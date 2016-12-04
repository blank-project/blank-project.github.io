# Les structures de contrôle


<!--
POPO : Copier coller de l'année dernière, à remettre en forme
On aura pas vu les tableaux donc faire des exemples sans tableau.
L'original https://docs.google.com/presentation/d/1ydbk5YCHW5x0J4lSiiKvUsq0ou-GlK4piz1QGvYZESM/edit#slide=id.gdabef6742_0_3551
-->
Les Structures de Contrôles

Qu’est ce que c’est ?
“une structure de contrôle est une commande qui contrôle l'ordre dans lequel les différentes instructions d'un algorithme ou d'un programme informatique sont exécutées”
(Wikipédia)

Un programme Javascript est éxécuté ligne par ligne. Les structures de contrôles vont nous permettre de manipuler cet ordre.

Les Différentes structures de contrôles
if .. ELSE
switch
for
while et do … while
break


Les Booléens

Les booléens
Derrière ce nom barbare se cachent deux valeurs :
true (vrai)
FALSE (FAUX)

Les Opérateurs
Les opérateurs vont nous permettre de manipuler des valeurs (booléennes ou non).
On utilise principalement des opérateurs unaires (qui agissent sur une seule variable), ou binaire (qui agissent sur 2 Variables)


Les Opérateurs Booléens
&& (AND) : TRUE si les deux élements sont TRUE
|| (OR) : TRUE si au moins un des deux élements est true
! (NOT) : Retourne l’inverse :
!TRUE -> FALSE
!FALSE -> TRUE


Les Opérateurs Qui Retournent des booleéns
> et >=
< Et <=
== et ===
in

IF .. ELSE

var aDitBonjour = false;
if(aDitBonjour) {
	alert(“Tranquille !”);
} else {
alert(“Il s’est fait niqué sa mère”);
}
if / else

var age = 20;
if(age > 65) {
	alert(“T’es trop vieux”);
} else if (age >= 18){
alert(“Tu peux mater des films chelous”);
} else {
	alert(“C’est mort”);
}
if / else

FOR

var movies = [‘Titanic’, ‘James Bond’, ‘Hulk’];
for(var i = 0; i < movies.length; i = i + 1) {
	alert(“J’ai maté ” + movies[i])
}
FOR

var movies = [
{title : ‘Titanic’, rating  : ‘nul à chier ...’},
{title : ‘James Bond’, rating  : ‘chanmé !’}
];
for(var i = 0; i < movies.length; i = i + 1) {
	var movie = movies[i], phrase;
	phrase = “J’ai maté ” + movie.title;
	phrase += “c’était ” + movie[‘rating’];
	alert(phrase);
}
FOR

WHILE et DO..WHILE

var movies = [‘Titanic’, ‘James Bond’];
var i = 0;
while(i < movies.length) {
	// FAIRE DES CHOSES
	i = i + 1;
}
While
