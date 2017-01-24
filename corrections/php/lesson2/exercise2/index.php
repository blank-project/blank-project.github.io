<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title></title>
  </head>
  <body>
    <?php
    $sales = array(
      "websites" => "20",
      "applications" => "2",
      "material" => "35"
    );
    echo "<h2>Sales</h2>";
    echo "<ul>";
    foreach ($sales as $key => $value) {
      echo "<li>$key : $value</li>";
    }
    echo "</ul>";
     ?>
  </body>
</html>
