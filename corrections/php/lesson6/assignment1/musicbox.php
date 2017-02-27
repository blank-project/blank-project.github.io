<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>musicbox</title>
    <?php
    require_once("_head.php");
     ?>
    <link rel="stylesheet" type="text/css" href="assets/css/musicbox.css"/>
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
    <button id="play">Play</button>
    <button id="restart">Restart</button>
    <span id="score">
    </span>
    <div class="container">
      <div class="input" data-key-code="65">
        A
      </div>
      <div class="input" data-key-code="90">
        Z
      </div>
    </div>
    <div class="samples">
      <audio data-key-code="65" src="assets/samples/kick.mp3"/>
      <audio data-key-code="90" src="assets/samples/saxo.mp3"/>
    </div>
    <script type="text/javascript" src="assets/js/_misc.js"></script>
    <script type="text/javascript" src="assets/js/musicbox.js"></script>
  </body>
</html>
