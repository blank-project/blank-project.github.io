<?php
  spl_autoload_register(function($name) {
      return require("class/" . $name . ".php");
  });
  require_once("_db.php");
 ?>
<nav class="navbar navbar-default">
  <div class="container-fluid">
    <ul>
      <a href="scores.php">Scores</a>
      <a href="game.php">Games</a>
    </ul>
    <?php require_once("_login.php"); ?>
  </div>
</nav>
