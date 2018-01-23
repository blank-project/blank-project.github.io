function afficher(obj) {
  for (var key in obj) {
    console.log(key, obj[key]);
  }
}

function exercice2() {
  var exemple = {
    firstname: "Marin"
  };
  console.log(exemple.firstname);
  // console.log(exemple["firstname"]);

  exemple.firstname = "Alex";
  // exemple["firstname"] = "Alex";

  console.log(exemple.firstname);

  exemple.lastname = "Craste";

  console.log(exemple.lastname);

  console.log(exemple);

  afficher(exemple);
}

exercice2();
