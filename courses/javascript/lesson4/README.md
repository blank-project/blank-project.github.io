Objets et Tableaux     

Rappel : Les types Primitifs
undefined
null
Boolean vrai (true), faux (false)
Number (1, -12, 2.5)
String (“_blank”)

Les Objets


Les objets et Les propriétés
Un objet est un ensemble de propriétés.
Une propriété = un nom + une valeur (type primitif ou objet)

Un objet
var monObjet = {}; // Création
monObjet.vide = false;
monObjet[“vide”] = 12;
delete monObjet.vide;

var monPC = {
	ram : 512,
	processor : “Intel Dual Core”
}
monPC.ram = 1024; // 1Go de ram !


Des objets que vous connaissez
console
document

Les tableaux


Les Tableaux
Un tableau est un objet particulier qui possède des propriétés spéciales.

On écrit : var monTableau = [“un”, 2, {} ];
(cela équivaut quasiment à :
{
0 : “un”,
1 : 2,
2, {}
})


Les Tableaux


Executez :
var monTableau = [“un”, 2, {} ];
console.log(monTableau[0]);
console.log(monTableau.length);
monTableau.push([]);
console.log(monTableau.length);
console.log(monTableau[3]);
console.log(monTableau[4]);



La propriété Length


monTableau.length contient la taille du tableau.
console.log([].length); // 0 : vide.
On appelle index ou indice les numéros des “cases” d’un tableau :
tab[1] = “Hello”; // On met “Hello” à l’index 1

Les indices commencent à 0.

Les Méthodes
On appelle “Méthode” une fonction qui agit sur un objet.

Par exemple, la méthode push() permet d’ajouter un objet à un tableau.

var tab = [];
tab.push(“Hello _blankers”);
console.log(tab.length); //1
console.log(tab); [“Hello _blankers”]



Exercices


Exo 1
Créer un tableau et un objet contenant un éléments de chaque type.



Exo 2
Supprimez une propriété d’un objet
Retirez un élément d’un tableau.
