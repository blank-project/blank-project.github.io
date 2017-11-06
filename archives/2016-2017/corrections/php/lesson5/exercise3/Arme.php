<?php
  class Arme {
    private $nom;
    private $degats;
    
    public function __construct($nom, $degats) {
      $this->nom = $nom;
      $this->degats = $degats;
    }
    public function getDegats($target) {
      // For now simply return the degats
      // later the degats will depend on the target.
      return $this->degats;
    }
    public function getNom() {
      return $this->nom;
    }
    public function __toString()
    {
        return $this->getNom();
    }
  }
?>
