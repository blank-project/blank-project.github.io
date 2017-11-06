<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title></title>
  </head>
  <?php
  $data = include("data.php");
  ?>
  <body>
    <table>
      <caption>Liste des Dépenses Militaires par Pays</caption>
      <thead>
        <tr>
          <th>#</th>
          <th>Pays</th>
          <th>Dépenses militaires (M$)</th>
          <th>% du PIB</th>
        </tr>
      </thead>
      <tbody>
        <!-- Insérer ici les données en fonction des paramètres du script -->
        <?php

        function printLine($line) {
          echo "<tr>";
          for($j = 0; $j < count($line); $j++) {
              echo "<td>$line[$j]</td>";
          }
          echo "</tr>";
        }

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

        $count = validateInput($_GET, 'count', 0, count($data), 15);
        $maxPage = ceil(count($data) / $count);
        $page = validateInput($_GET, 'page', 0, $maxPage, 0);

        $start = $page * $count;
        $end = min($start + $count, count($data));
        echo "Sur la page $page on affiche les éléments de $start à $end";

        for ($i = $start; $i < $end; $i++) {
          printLine($data[$i]);
        }
         ?>
        <!-- FIN -->
      </tbody>
      <tfoot>
        <tr><td colspan="4" style="text-align: center;">
          <!-- Bonus 1 et 2 : Insérer ici les liens de navigation -->
          <?php if($page - 1 >= 0) : ?>
            <a href="index.php?page=<?php echo $page - 1 ?>&count=<?php echo $count ?>">Precedent</a>
          <?php endif ?>
          <?php for ($k = 0; $k < $maxPage; $k++) { ?>
            <a href="index.php?page=<?php echo $k ?>&count=<?php echo $count ?>"><?php echo $k + 1?></a>
          <?php } ?>
          <?php if($page + 1 < $maxPage) : ?>
            <a href="index.php?page=<?php echo $page + 1 ?>&count=<?php echo $count ?>">Suivant</a>
          <?php endif ?>
        </td></tr>
      </tfoot>
    </table>
  </body>
</html>
