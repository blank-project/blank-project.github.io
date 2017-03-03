<?php
  class ScoreDAO {

    public function save($db, $score) {
      //prepare request
      $request = $db->prepare("INSERT INTO Score (user_id, score, game) VALUES (:user_id, :score, :game)");

      //execute request
      try {
        $request->execute(array(
          "user_id" => $score->getUserId(),
          "score" => $score->getScore(),
          "game" => $score->getGame()
        ));
      } catch (PDOException $e) {
        print("error while writing in DB new user." . $e->getMessage());
        return false;
      }
      return true;
    }


    public function find($db, $game, $number) {
      //prepare request
      $request = $db->prepare("SELECT s.score, u.username FROM Score s JOIN User u ON s.user_id = u.id WHERE s.game = :game ORDER BY score DESC LIMIT :number");

      //execute request
      try {
        $request->execute(array(
          "game" => $game,
          "number" => $number
        ));
        $result = $request->fetchAll();
        return $result;
      } catch (PDOException $e) {
        print("error while writing in DB new user." . $e->getMessage());
        return null;
      }
    }


  }
 ?>
