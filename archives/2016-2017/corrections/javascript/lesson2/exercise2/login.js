var input1 = process.argv[2], login = "admin";
var input2 = process.argv[3], password = "_blank";

console.log("Vous avez tapé : " + input1 + ", " + input2);

if (input1 == undefined || input2 == undefined) {
  console.log("Paramètre manquant");
} else if (input1 == login && input2 == password) {
  console.log("Connexion réussie");
} else if (input1 != login) {
  console.log("login erroné");
} else {
  console.log("Mot de passe érroné");
}
