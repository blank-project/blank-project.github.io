// Fonction qui permet de chiffrer une phrase passée en paramètre à l'aide du code de césar et de la clé de chiffrement.
function chiffrer(phrase, cle) {
  var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  // stockage de la phrase chiffrée
  var toReturn = "";

  for (var i = 0; i < phrase.length; i++) {
    // stockage de l'index initiale de la lettre dans l'alphabet
    var positionCharactere = alphabet.indexOf(phrase[i].toLowerCase());

    if (positionCharactere >= 0) {
      // stockage de l'index de la lettre initiale chiffrée
      // calcul de l'index de la lettre initiale chiffrée
      var nouvellePosition = (cle + positionCharactere) % 26;

      if (cle < 0) {
        // Si la clé est négative, calcul du nouvel index en faisant attention à ne pas sortir du tableau (% 26)
        nouvellePosition = (alphabet.length + nouvellePosition) % 26;
      }

      // stockage de la lettre initiale chiffrée
      toReturn += alphabet[nouvellePosition];
    } else {
      toReturn += phrase[i];
    }
  }

  return toReturn;
}

console.log(chiffrer("ab", 1)); // doit retourner b
console.log(chiffrer("a", 2)); // doit retourner c
console.log(chiffrer("a", 3)); // doit retourner d
console.log(chiffrer("a", -2)); // doit retourner a

function dechiffrer(phrase, cle) {
  return chiffrer(phrase, -cle);
}
