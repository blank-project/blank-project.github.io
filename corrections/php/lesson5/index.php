<?php
  require("Personnage.php");
  $Paulin = new Personnage("Super Paulin", 100, 10);
  $Marin = new Personnage("Weak Marin", 100, 9);

  echo "Le combat légendaire entre ".$Paulin->getNom(). " vs "
    .$Marin->getNom(). " va commencer !<br />";

  combat($Marin, $Paulin);

  /**
  * Make 2 characters fight
  * @return the winner.
  */
  function combat($personnage1, $personnage2) {
    echo "Hajime !";
    return tirerAuSort($personnage1, $personnage2);
  }

  /**
  * Pick a character at random.
  */
  function tirerAuSort($personnage1, $personnage2) {

  }

?>
