<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title></title>
    <?php
    require_once("_head.php");
     ?>
  </head>
  <body>
    <?php
    require_once("_nav.php");
     ?>
    <?php
    if (!isLoggedIn()) {
      header("location:index.php");
    }
     ?>
     <a href="hangman.php">Pendu</a>
     <a href="musicbox.php">Boite à Rythme</a>
  </body>
</html>
