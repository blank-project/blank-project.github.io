<?php
function isLoggedIn() {
  if (empty($_SESSION["user"])) {
    return false;
  }
  return true;
}
?>
