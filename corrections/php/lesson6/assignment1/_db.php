<?php

//credentials
$h = "localhost";
$db = "php_assignment";
$username = "root";
$password = "";
$charset = "utf8";

//connexion string
$dsn = "mysql:host=$h;dbname=$db;charset=$charset";

//basic options
$options = [
  PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
  PDO::ATTR_ERRMODE            => PDO::ERRMODE_EXCEPTION,
  PDO::ATTR_EMULATE_PREPARES   => false,
];

try {
  //connect to DB
  $_DB = new PDO($dsn, $username, $password, $options);
} catch (PDOException $e) {
  //catch exception if needed
  print("Oops, error while connecting to DB : " . $e->getMessage());
  die();
}

 ?>
