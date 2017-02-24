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

  public function auth($db, $username, $password, $email) {
    //retrieve user from db with same username
    $user = $this->find($db, $username);

    //check email & password matching
    if ($user["email"] == $email &&
        $user["password"] == $password) {
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
