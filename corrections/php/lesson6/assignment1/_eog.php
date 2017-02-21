<?php

require_once("_misc.php");
require_once("_db.php");

spl_autoload_register(function($name) {
  return require("class/" . $name . ".php");
});

session_start();

if ($_SERVER["REQUEST_METHOD"] === "GET") {
  //check if score &
  $score = isset($_GET["score"]) ? $_GET["score"] : "";
  if (isLoggedIn() && strlen($score) > 0) {
    $s = new Score($_SESSION["user"], intval($score));

    $s->save($_DB);
  }
}
 ?>
