<?php
  class Score {
    private $username;
    private $score;
    private $game;

    public function __construct($user, $score, $game) {
      $this->username = $user->getUsername();
      $this->score = $score;
      $this->game = $game;
    }

    public function getUsername() {
      return $this->username;
    }

    public function getScore() {
      return $this->score;
    }

    public function getGame() {
      return $this->game;
    }
  }
 ?>
