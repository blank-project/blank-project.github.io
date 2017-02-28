<?php
  spl_autoload_register(function($name) {
      return require("class/" . $name . ".php");
  });
  require_once("_db.php");
 ?>
<nav class="navbar navbar-default bg-faded">
  <div class="container-fluid">
      <ul class="nav navbar-nav">
          <li><a href="scores.php">Scores</a></li>
          <li><a href="game.php">Games</a></li>
      </ul>
      <?php require_once("_login.php"); ?>
  </div>
</nav>
