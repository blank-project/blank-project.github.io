<?php
class Magician extends Personnage {
  //redefine function causeDommage
  public function causeDommage($degats) {
    // one time out of two, absorbe damages
    if (rand(0,1) == 0) {
      echo "<br>Hell YEAHHH " . $this->getNom() . " a absorbé l'attaque !<br>";
      return;
    }
    if ($degats >= $this->pv) {
      $this->pv = 0;
    } else {
      $this->pv -= $degats;
    }
  }
}
 ?>
