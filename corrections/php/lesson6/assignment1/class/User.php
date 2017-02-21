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

  //save in db
  public function save($db) {

    //prepare request
    $request = $db->prepare("INSERT INTO User (username, password, email) VALUES (:username, :password, :email)");

    //execute request
    try {
      $request->execute(array(
        "username" => $this->username,
        "password" => $this->password,
        "email" => $this->email,
      ));
    } catch (PDOException $e) {
      print("error while writing in DB new user." . $e->getMessage());
      return false;
    }

    return true;
  }

  public function auth($db) {
    //retrieve user from db with same username
    $user = $this->find($db);

    //check email & password matching
    if ($user["email"] == $this->email &&
        $user["password"] == $this->password) {
          //login
          return true;
    }

    //oops error
    return false;
  }

  public function find($db) {

    //prepare request
    $request = $db->prepare("SELECT * FROM User WHERE (username = :username) LIMIT 1");

    //execute request
    try {
      $request->execute(array(
        "username" => $this->username,
      ));
      return $request->fetch();
    } catch (PDOException $e) {
      print("error while writing in DB new user." . $e->getMessage());
      return false;
    }
  }
}

//examples
//$toto = new User("toto","pwd","toto@tata.fr");
//$tutu = new User("tutu","pwd","toto@tutu.fr");


 ?>
