function exercice4() {
  var tableau = ["matin", "midi", "soir","nuit"];
  // supprimer le premier élément du tableau et le renvoyer
  console.log(tableau.shift());

  // ajouter un élément au tableau et renvoyer sa longueur
  console.log(tableau.push("nouvel élément"));

  console.log(tableau);

  var maString = tableau.join('-');
  console.log(maString);

  console.log(maString.toUpperCase());
}

exercice4();
