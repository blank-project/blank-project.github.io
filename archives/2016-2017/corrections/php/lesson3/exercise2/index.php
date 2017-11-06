<?php
  foreach ($_GET as $key => $value) {
    echo htmlspecialchars($key)
    . " a pour valeur "
    . htmlspecialchars($value)
    . " et pour type "
    . gettype($value)
    . '<br />';
  }
?>
