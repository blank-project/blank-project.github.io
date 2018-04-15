function exercice3() {
  var obj = {
    // propriété qui correspond à la date
    currentDate: new Date(),
    // définition de la méthod date pour l'objet obj
    date: function() {
      console.log("Nous sommes le",
                  this.currentDate.getDate(),
                  this.currentDate.getMonth() + 1,
                  this.currentDate.getFullYear());
                  // this fait référence à obj
                  // currentDate est une propriété de obj qui est de type objet et correspond à la Date.
                  // On peut donc utiliser ses méthodes afin de récupérer le jour, le mois et l'année actuels.
    }
  };

  // exécution de la méthode date de l'objet obj
  obj.date();
}

exercice3();
