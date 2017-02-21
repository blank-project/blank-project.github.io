<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title></title>
  </head>
  <body>
    <?php
    session_start();
    require_once("_nav.php");
    if (!isLoggedIn()) {
      header("location:index.php");
    }
     ?>
     <a href="hangman.php">Pendu</a>
     <a href="musicbox.php">Boite à Rythme</a>
  </body>
</html>
