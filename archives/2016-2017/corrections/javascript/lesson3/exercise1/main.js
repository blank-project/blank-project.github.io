function carre(n) {
  return n * n;
}

var carreDeDouze = carre(12);
console.log(carreDeDouze);

function soustraction(a, b) {
  return a - b;
}

var toto = soustraction(carre(6), carre(3));
console.log(toto);
