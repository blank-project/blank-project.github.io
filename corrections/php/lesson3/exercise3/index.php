<?php
  if (
      !isset($_GET['test']) ||
      !isset($_GET['count']) ||
      !is_numeric($_GET['count']) ||
      $_GET['count'] <= 0
    ) {
      echo "Vos paramètres sont moisis";
  } else {
    for($i = 0; $i < $_GET['count']; $i++) {
      echo $_GET['test'] . '<br />';
    }
  }
?>
