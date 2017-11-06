<?php
  class Score {
    private $userId;
    private $score;
    private $game;

    public function __construct($user, $score, $game) {
      $this->userId = $user->getId();
      $this->score = $score;
      $this->game = $game;
    }

    public function getUserId() {
      return $this->userId;
    }

    public function getScore() {
      return $this->score;
    }

    public function getGame() {
      return $this->game;
    }
  }
 ?>
