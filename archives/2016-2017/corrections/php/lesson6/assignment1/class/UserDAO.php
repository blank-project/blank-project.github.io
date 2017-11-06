<?php

class UserDAO {

  //save in db
  public function save($db, $user) {

    //prepare request
    $request = $db->prepare("INSERT INTO User (username, password, email) VALUES (:username, :password, :email)");

    //execute request
    try {
      $request->execute(array(
        "username" => $user->getUsername(),
        "password" => $user->getPassword(),
        "email" => $user->getEmail()
      ));
    } catch (PDOException $e) {
      print("error while writing in DB new user." . $e->getMessage());
      return false;
    }

    return true;
  }

  public function auth($db, $user) {
    //retrieve user from db with same username
    $userToCheck = $this->find($db, $user->getUsername());

    //check email & password matching
    if ($userToCheck["email"] == $user->getEmail() &&
        $userToCheck["password"] == $user->getPassword()) {
          //retrieve id from database
          $user->setId($userToCheck["id"]);
          //login
          return true;
    }

    //oops error
    return false;
  }

  public function find($db, $username) {

    //prepare request
    $request = $db->prepare("SELECT * FROM User WHERE (username = :username) LIMIT 1");

    //execute request
    try {
      $request->execute(array(
        "username" => $username,
      ));
      return $request->fetch();
    } catch (PDOException $e) {
      print("error while writing in DB new user." . $e->getMessage());
      return false;
    }
  }
}

 ?>
