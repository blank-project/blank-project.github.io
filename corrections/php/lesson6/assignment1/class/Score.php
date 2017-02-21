<?php
  class Score {
    private $username;
    private $score;

    public function __construct($user, $score) {
      $this->username = $user->getUsername();
      $this->score = $score;
    }

    public function save($db) {
      //prepare request
      $request = $db->prepare("INSERT INTO Score (username, score) VALUES (:username, :score)");

      //execute request
      try {
        $request->execute(array(
          "username" => $this->username,
          "score" => $this->score,
        ));
      } catch (PDOException $e) {
        print("error while writing in DB new user." . $e->getMessage());
        return false;
      }

      return true;
    }
  }
 ?>
