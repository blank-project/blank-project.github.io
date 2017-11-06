// Ne pas modifier ce tableau d'objets !
var animals = [{
  name : "cat",
  deadly : false,
  weight : 1.0
},{
  name : "fish",
  deadly : false,
  weight : 0.01
},{
  name : "bear",
  deadly : true,
  weight : 500,
  swag : 1
},{
  name : "wolf",
  deadly : true,
  weight : 50.0
},{
  name : "sloth",
  deadly : true,
  weight : 3.0,
  swag : "Sooo much"
},{
  name : "cockroach",
  deadly : false,
  weight : 0.001,
  swag : false
}];

/*
1.1
Ecrivez une fonction qui :
 - prend un tableau en paramètre
 - parcourt les élements du tableau
 - retourne un autre tableau contenant uniquement les animaux mortels (deadly en anglais)
 */
var getDeadly = function(pTab) {

};

console.log("Animaux mortels");
var deadlies = getDeadly(animals);
console.log(deadlies);

/*
1.2
Ecrivez une fonction qui :
 - prend un tableau et une fonction en paramètre
 - parcourt les élements du tableau
 - retourne un autre tableau contenant uniquement les éléments pour lequel la fonction a retourné true.
 */
var filter = function(pTab, pFilter) {

};

/*
1.3
Utiliser la fonction précédente pour filtrer les animaux dont le nom contient un 'a'.
*/
console.log("Animaux dont le nom contient un 'a' ");

var animalsA = filter(animals, function(pAnimal) {

});

console.log(animalsA);

/*
1.4
Calculer la somme des poids des animaux qui possèdent une propriété 'swag'.
Astuce : renseignez vous sur le mot clé 'in'
*/
console.log("Poids des Animaux ayant une propriété swag");

var weightOfSwag = function(pTab) {

};

console.log(weightOfSwag(animals));
