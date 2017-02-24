<?php
  require_once("_db.php");

  spl_autoload_register(function($name) {
    return require("class/" . $name . ".php");
  });

?>
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Scores</title>
  </head>
  <body>
    <?php
    if (isset($_REQUEST['game'])) {
      $game = $_REQUEST['game'];
      $dao = new ScoreDAO();
      $scores = $dao->find($_DB, $game, 5);
      echo "<h1>Scores pour $game</h1>";
      echo "<table><tr><th>Utilisateur</th><th>Score</th></tr>";
      foreach ($scores as $score) {
        echo "<tr><td>" . $score["username"] ."</td><td>" . $score["score"] ."</td></tr>";
      }
      echo "</table>";
    } else {
      echo "<h1>Scores pour :</h1>";
      ?>
      <form action="scores.php">
        <select name="game">
          <option value="hangman">hangman</option>
          <option value="musicbox">musicbox</option>
        </select>
        <button type="submit">Go !</button>
      </form>
      <?php
    }
    ?>
    <a href="game.php">Game</a>
    <a href="scores.php">Scores</a>
  </body>
</html>
