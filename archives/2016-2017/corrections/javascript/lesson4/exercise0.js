// Créer un tableau "tab" contenant 3 chaines de caractères
var tab = ['Un citation "Citation"', "Je m'appelle ",'test'];

// Afficher le 2eme élément du tableau
var element2 = tab[1];
console.log(element2);
// Ou directement
console.log(tab[1]);

// Remplacer le 1er élement par "toto"
tab[0] = "toto";

// Afficher tous les éléments du tableau dans la console
// (utiliser une boucle)
for (var index = 0; index < tab.length; index++) {
    console.log(tab[index]);
}

// Créer un objet "obj" contenant une propriété 'test' avec la valeur 1
var obj = {
  test : 1
};

// Ajouter une propriété 'name' avec votre nom comme valeur
obj.name = "Erwan";
// Ou (autre syntaxe);
obj["name"] = "Erwan";

// Afficher la valeur de la propriété
console.log(obj.name);

// Afficher toutes les propriétés de l'objet avec leurs valeurs
// (utiliser une boucle)
for (var key in obj) {
  console.log("La propriété " + key + " a pour valeur " + obj[key]);
}


// Supprimer la propriété 'test'
