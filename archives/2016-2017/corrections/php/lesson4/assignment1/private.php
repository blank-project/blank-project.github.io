<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>PRIVATE</title>
  </head>
  <body>
    <?php require("_login.php"); ?>
    <?php
    //if not logged in
    if (!isLoggedIn()) {
      header("location:index.php");
    }
    ?>
    <h1>PRIVATE CLUB</h1>
  </body>
</html>
