<?php
// Une classe représentant un Humain.
class Humain
{
  // Attributs
  private $prenom;
  private $nom;
  private $age;

  // Constantes
  const MAJOR_AGE = 18;

  // Un constructeur avec un paramètre par défaut.
  public __construct($prenom, $nom, $age = 0) {
    $this->$prenom = $prenom;
    $this->$nom = $nom;
  }

  // Méthodes
  public function getPrenom()
  {
    return $this->$prenom;
  }

  public function getNom()
  {
    return $this->$nom;
  }

  public function getAge()
  {
    return $this->$age;
  }

  public function setAge($age)
  {
    $this->$age = $age;
  }

  public function isMinor()
  {
    return $this->$age < Humain::MAJOR_AGE;
  }

  public function hello()
  {
    echo "Je m'appelle" . $this->$prenom;
  }
}
?>
