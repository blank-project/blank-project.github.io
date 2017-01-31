<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title></title>
  </head>
  <body>
    <?php
      session_start();

      if (!isset($_SESSION["compteur"])) {
        $_SESSION["compteur"] = 1;
      } else {
        $_SESSION["compteur"]++;
      }

      echo $_SESSION["compteur"];
    ?>
  </body>
</html>
