<?php
  class Personnage {
    private $nom;
    private $pv;
    private $pa;

    public function getNom() {
      return $this->nom;
    }
    public function getPv() {
      return $this->pv;
    }
    public function getPa() {
      return $this->pa;
    }

    public function __construct($nom, $pv, $pa) {
      $this->nom = $nom;
      $this->pv = $pv;
      $this->pa = $pa;
    }

    public function estVivant() {
      return $this->pv > 0;
    }

    public function causeDommage($degats) {
      if ($degats >= $this->pv) {
        $this->pv = 0;
      } else {
        $this->pv -= $degats;
      }
    }

    public function attaquer($personnage) {
      $personnage->causeDommage($this->pa);
    }
  }
?>
