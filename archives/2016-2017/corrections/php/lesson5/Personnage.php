<?php
  class Personnage {
    private $nom;
    private $pv;
    private $pa;
    private $weapon;

    public function getNom() {
      return $this->nom;
    }
    public function getPv() {
      return $this->pv;
    }
    public function getPa() {
      return $this->pa;
    }
    public function getWeapon() {
      return $this->weapon;
    }
    public function setWeapon($weapon) {
      $this->weapon = $weapon;
    }
    public function __construct($nom, $pv, $pa) {
      $this->nom = $nom;
      $this->pv = $pv;
      $this->pa = $pa;
      $this->setWeapon(new Arme("Epée", 20));
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
      $degats = $this->pa;
      if ($this->getWeapon() != null) {
        $degats += $this->getWeapon()->getDegats($personnage);
      }
      $personnage->causeDommage($degats);
    }

    public function __toString()
    {
        return $this->getNom() . " (armé avec " . $this->getWeapon() . ")";
    }
  }
?>
