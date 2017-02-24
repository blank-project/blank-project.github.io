<?php
  class ScoreDAO {

    public function save($db, $score) {
      //prepare request
      $request = $db->prepare("INSERT INTO Score (username, score, game) VALUES (:username, :score, :game)");

      //execute request
      try {
        $request->execute(array(
          "username" => $score->getUsername(),
          "score" => $score->getScore(),
          "game" => $score->getGame()
        ));
      } catch (PDOException $e) {
        print("error while writing in DB new user." . $e->getMessage());
        return false;
      }
      return true;
    }

  }
 ?>
