<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title></title>
  </head>
  <body>
    <?php
    $username = isset($_POST["username"]) ? $_POST["username"] : "";
    $password = isset($_POST["password"]) ? $_POST["password"] : "";

    if ($username == "_blank" && $password == "olé") {
      echo "<p>MOUAHAHAHAHA</p>";
    } else {
      echo "EUHHH ? T'es qui ?";
    }
    ?>
  </body>
</html>
