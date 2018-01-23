function exercice5() {
  var maString = "Le javascript c'est trop bien !";

  console.log(maString.substr(0, maString.length / 2));
  // console.log(maString.slice(0, maString.length / 2));

  // console.log(maString.substr(0, maString.length / 2).split(' ').reverse().join(' '));

  var monTableau = maString.substr(0, maString.length / 2).split(' ');

  console.log(monTableau.reverse().join(' '));
}

exercice5();
