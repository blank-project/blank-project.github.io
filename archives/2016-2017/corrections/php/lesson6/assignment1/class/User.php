<?php

class User {

  private $username;
  private $id;
  private $password;
  private $email;

  public function __construct($username, $password, $email) {
    $this->username = $username;
    $this->password = $password;
    $this->email = $email;
  }

  public function setId($id) {
    $this->id = $id;
  }

  public function getId() {
    return $this->id;
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

    $errorArray = array();

    //username check
    if (strlen($this->username) < 3) {
      $errorArray["username"] = "wrong username";
    }

    if (strlen($this->password) < 5 ||
        strlen($this->password) > 25) {
          $errorArray["password"] = "password must be between 6 and 24 chars";
    }

    if (filter_var($this->email, FILTER_VALIDATE_EMAIL) === false) {
        $errorArray["email"] = "wrong email " . $this->email . " ";
    }

    return $errorArray;
  }

}

 ?>
