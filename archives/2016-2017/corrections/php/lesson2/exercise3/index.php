<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title></title>
  </head>
  <body>
    <?php
      foreach ($_GET as $key => $value) {
        echo "<p>$key : $value</p>";
      }
     ?>
  </body>
</html>
