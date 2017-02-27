<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Pendu</title>
    <link rel="stylesheet" href="assets/css/hangman.css"/>
    <?php
    require_once("_head.php");
     ?>
  </head>
  <body>
    <?php
    require_once("_nav.php");
     ?>
     <?php
     if (!isLoggedIn()) {
      header("location:signup.php");
    }
     ?>
    <div class="game">
      <div id="hangman-table">
      </div>
      <div>
        <button id="newgame">new game</button>
        <button id="restart">restart</button>
      </div>
      <span id="lives">
      </span>
      <span id="lettersRemaining">
      </span>
      <span id="lettersPlayed">
      </span>
      <span id="word"></span>
    </div>
    <script type="text/javascript" src="assets/js/_misc.js"></script>
    <script type="text/javascript" src="assets/js/hangman.js"></script>
  </body>
</html>
