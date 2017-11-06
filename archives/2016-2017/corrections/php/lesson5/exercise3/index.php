<?php
  spl_autoload_register(function($name) {
      return require($name . ".php");
  });
  session_start();
  $Paulin = new Personnage("Super Paulin", 100, 11);
  $Marin = new Magician("Weak Marin", 20, 2);
  // Initialize scores in session.
  if (!isset($_SESSION[$Paulin->getNom()])) {
    $_SESSION[$Paulin->getNom()] = 0;
  }
  if (!isset($_SESSION[$Marin->getNom()])) {
    $_SESSION[$Marin->getNom()] = 0;
  }
  // Display scores
  echo $Marin->getNom()
   . " "
   . $_SESSION[$Marin->getNom()]
   .  " - "
   . $_SESSION[$Paulin->getNom()]
   . " "
   . $Paulin->getNom()
   . "<br />";
  $Marin->setWeapon(new Arme("Bazooka", 100));
  echo "<br />Le combat légendaire entre " .$Paulin . " vs "
    .$Marin. " va commencer !<br />";
    echo "Hajime !<br />";
  $winner = combat($Marin, $Paulin);
  echo "<br /><u>Le gagnant est " . $winner . "</u></br>";
  $_SESSION[$winner->getNom()] = $_SESSION[$winner->getNom()] + 1;
  /**
  * Make 2 characters fight
  * @return the winner.
  */
  function combat($p1, $p2) {
    $personnage1 = tirerAuSort($p1, $p2);
    $personnage2 =  ($personnage1 == $p1 ? $p2 : $p1);
    while ($personnage1->estVivant() && $personnage2->estVivant()) {
      echo $personnage1 . " attaque " . $personnage2;
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
    $random = rand(0,1);
    if($random == 0) {
      return $personnage1;
    }
    return $personnage2;
  }
?>
