<?php

class User {

  private $username;
  private $password;
  private $email;

  public function __construct($username, $password, $email) {
    $this->username = $username;
    $this->password = $password;
    $this->email = $email;
  }

  public function getUsername() {
    return $this->username;
  }

  public function getPassword() {
    return $this->password;
  }

  public function getEmail() {
    return $this->email;
  }

  public function validate() {

    //username check
    if (strlen($this->username) < 3) {
      echo "wrong username";
      return false;
    }

    if (strlen($this->password) < 5 ||
        strlen($this->password) > 25) {
          echo "wrong pwd";
          return false;
    }

    if (filter_var($this->email, FILTER_VALIDATE_EMAIL) === false) {
      echo "wrong email " . $this->email . " ";
      return false;
    }

    return true;
  }

}

 ?>
