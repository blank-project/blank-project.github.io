<?php
  require("Personnage.php");
  $Paulin = new Personnage("Super Paulin", 100, 11);
  $Marin = new Personnage("Weak Marin", 100, 9);

  echo "Le combat légendaire entre ".$Paulin->getNom(). " vs "
    .$Marin->getNom(). " va commencer !<br />";

    echo "Hajime !<br />";

  $winner = combat($Marin, $Paulin);

  echo "Le gagnant est " . $winner->getNom();

  /**
  * Make 2 characters fight
  * @return the winner.
  */
  function combat($personnage1, $personnage2) {
    while ($personnage1->estVivant() && $personnage2->estVivant()) {
      echo $personnage1->getNom() . " attaque " . $personnage2->getNom();
      $personnage1->attaquer($personnage2);
      echo "<br />Il reste " . $personnage2->getPv() . "PV à " . $personnage2->getNom() . "<br/>";
      echo "<br />";
      $temp = $personnage2;
      $personnage2 = $personnage1;
      $personnage1 = $temp;
    }
    if ($personnage1->estVivant()) {
      return $personnage1;
    }
    return $personnage2;
    // return tirerAuSort($personnage1, $personnage2);
  }

  /**
  * Pick a character at random.
  */
  function tirerAuSort($personnage1, $personnage2) {

  }

?>
