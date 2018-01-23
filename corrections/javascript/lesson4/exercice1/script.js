function exercice1() {
  var inventaire = ["salade", "tomate", "oignons"];
  // afficher longueur du tableau
  console.log(inventaire.length);
  // afficher premier élément
  console.log(inventaire[0]);
  // ajouter un élément à la fin
  // inventaire[4] = "sauce blanche" A NE PAS FAIRE
  inventaire.push("sauce blanche");
  // afficher longueur du tableau
  console.log(inventaire.length);
  // SI BESOIN DE RÉCUPÉRER LE DERNIER ÉLÉMENT var dernierElement = inventaire.pop();
  inventaire.pop();
  // appel d'afficher
  afficher(inventaire);
}

function afficher(tableau) {
  for (var i = 0; i < tableau.length; i++) {
    console.log(tableau[i]);
  }
}

exercice1();

// var exercice1 = function() {
//   var inventaire = ["salade", "tomate", "oignons"];
// };
