<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title></title>
  </head>
  <?php
  $data = require("data.php");
   ?>
  <body>
    <table>
      <caption>Liste des Dépenses Militaires par Pays</caption>
      <thead>
        <tr>
          <th>#</th>
          <th>Pays</th>
          <th>Dépenses Militaires (M$)</th>
          <th>% du PIB</th>
        </tr>
      </thead>
      <tbody>
        <!-- work here -->
        <?php
        //functions
        function validateInput($params, $name, $min, $max, $defaultValue) {
          if(!isset($params[$name])) {
            // Return directly defaultValue if parameter is not set.
            return $defaultValue;
          }
          $value = $params[$name];
          if(is_numeric($value)
            && $value > $min
            && $value < $max) {
            // Our value is valid, return;
            return $value;
          }
          // Invalid value, return the defaultValue
          return $defaultValue;
        }
        ?>

        <?php
        $count = validateInput($_GET, 'count', 0, count($data), 15);
        $chunks = array_chunk($data, $count);
        $page = validateInput($_GET, 'page', 0, count($chunks), 0);

        //get current slice for $count elements
        $data = $chunks[$page];

        //iterate through first level of $data array
          for ($i = 0; $i < count($data); $i++) {
            $tr = "";
            //iterate through second level of $data array
            for ($j = 0; $j < count($data[$i]); $j++) {
              //add item to line
              $tr = $tr . "<td>" . $data[$i][$j] . "</td>";
            }
            //echo line
            echo "<tr>$tr</tr>";
          }
         ?>
      </tbody>
      <tfoot>
        <tr><td colspan="4">
          <!-- work here pages -->
          <?php
          //create previous button
          if ($page - 1 >= 0) {
            echo "<a href='?page=" . ($page - 1) . "&count=$count'>Previous </a>";
          }
           ?>

          <?php
          //create pages links
          for ($pageNumber = 0; $pageNumber < count($chunks); $pageNumber++) {
            echo "<a href='?page=$pageNumber&count=$count'>  " . ($pageNumber + 1) . "  </a>";
          }
           ?>

           <?php
           //create next button
           if ($page + 1 < count($chunks)) {
             echo "<a href='?page=" . ($page + 1) . "&count=$count'> Next </a>";
           }
            ?>
        </td></tr>
      </tfoot>
    </table>
  </body>
</html>
