// Ne pas modifier ce tableau !
var words = ["lorem","ipsum", "dolor", "sit", "amet", "LOREM","IPSUM", "DOLOR", "SIT", "AMET"], input = [], count = 50;
for (var i = 0; i < count; i++) {
  var index = Math.random() * words.length;
  index = parseInt(index);
  input.push(words[index]);
}
input = input.join(" ");

console.log("La phrase de départ est : " + input);

/*
2
Ecrivez une fonction qui et
 - prend une chaine de caractère en paramètre
 - compte le nombre de fois ou apparait chaque mot, quelque soit la casse (minuscule ou majuscule).
 - retourne un objet qui associe a chaque mot le nombre de fois ou il apparait.
 Indice : utiliser les fonction 'split' et 'toLowerCase' d'une chaine de caractère.
 */
var getFrequency = function(pInput) {
  // On récupère un tableau de mots grace à split.
  var words = pInput.split(" "), result = {};
  for (var i = 0; i < words.length; i++) {
    var word = words[i].toLowerCase();
    if (word in result) {
      result[word] = result[word] + 1;
    } else {
      result[word] = 1;
    }
  }
  return result;
};

console.log("Fréquence des mots");
var freq = getFrequency(input);

for (var word in freq) {
  console.log(word + " apparaît " + freq[word] + " fois");
}
