var you = {
  firstName : "Erwan",
  lastName : "OSOUF",
  birthday : new Date(1990, 02, 02, 0, 0, 0),
  getAge : function() {
    var current = new Date();
    var ageInMillis = current.getTime() - this.birthday;
    var age = Math.floor(ageInMillis / (365 * 24 * 60 * 60 * 1000));
    return age;
  },
  presentation : function() {
    console.log("Je m'appelle " + this.firstName + " " + this.lastName);
    console.log("J'ai " + this.getAge() + " ans");
    console.log("Je sais développer en " + this.skills.join(" et "));
  },
  skills : ['none']

}

var skills = you.skills;
// Retirer 'none' du tableau skills
skills.pop();

// Ajouter "CSS" et "JavaScript" au tableau Skills
skills.push("CSS", "Javascript");

// Ajouter "HTML" au début du tableau skills.
skills.unshift("HTML");

// Ecrivez la fonction getAge() qui retourne votre age.
// C'est fait wesh

// Implémenter la fonction présentation.
// Doit ecrire dans la console
// "Je m'appelle <firstName> <lastName> et j'ai <getAge()> ans,
// Je sais coder en <Affichez vos competences>
you.presentation();

// BONUS : On ecrit une fonction pour ajouter des compétences.
you.learn = function(pSkill) {
  this.skills.push(pSkill);
}
you.learn("PHP"); // SOON
you.presentation(); // Va afficher PHP en plus dans les compétences.
