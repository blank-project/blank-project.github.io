<?php
  require("Personnage.php");
  $Paulin = new Personnage("Super Paulin", 100, 10);
  $Marin = new Personnage("Weak Marin", 100, 9);

  echo "Le combat légendaire entre ".$Paulin->getNom(). " vs "
    .$Marin->getNom(). " va commencer !";
    
?>
