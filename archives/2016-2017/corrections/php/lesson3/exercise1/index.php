<?php
  if (isset($_GET['test'])) {
      echo "Le paramètre test a la valeur : " . htmlspecialchars($_GET['test']);
  }
?>
