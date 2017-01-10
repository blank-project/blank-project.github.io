<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title></title>
  </head>
  <body>
    <ul>
      <?php
      //créer les LI
      for ($i = 0; $i < 20; $i++) {
        echo "<li id='$i' class='toto'> $i </li>";
      }
      ?>
    </ul>
  </body>
</html>

