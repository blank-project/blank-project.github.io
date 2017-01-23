<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>toto</title>
  </head>
  <?php
  $data = require("data.php");
   ?>
  <body>
    <?php
    $prenom = isset($_POST["firstname"]) ? $_POST["firstname"] : "";

    /* equivaut à l'opérande ternaire du dessus */
    /*
    if (isset($_POST["firstname"])) {
      $prenom = $_POST["firstname"];
    } else {
      $prenom = "";
    }
    */

    if ($prenom) {
      echo $prenom . " " . $data[$prenom][0];
    } else {
      foreach ($data as $key => $value) {
        echo "$key<br>";
      }
    }
     ?>
    <form action="index.php" method="post">
      <input type="text" name="firstname" />
      <input type="submit" />
    </form>
  </body>
</html>
