<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title></title>
  </head>
  <body>
    <?php
    $students = array("Abdou","Alfou","Val","Rezzak","Laurent","Badis","Léo","Mike","Marc","Aline","Amin","Jennifer");
    for ($i = 0; $i < count($students); $i++) {
      echo "<p>$students[$i]</p>";
    }
     ?>
  </body>
</html>
