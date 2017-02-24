<?php
require_once("_db.php");
require_once("_misc.php");

spl_autoload_register(function($name) {
  return require("class/" . $name . ".php");
});

if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $username = isset($_POST["username"]) ? $_POST["username"] : "";
  $email = isset($_POST["email"]) ? $_POST["email"] : "";
  $password = isset($_POST["password"]) ? $_POST["password"] : "";

  $user = new User($username, $password, $email);

  if ($user->validate()) {
    $dao = new UserDAO();
    if ($dao->auth($_DB, $username, $password, $email)) {
      session_start();
      $_SESSION["user"] = $user;
    }
  }

  header("location:game.php");
}

if (!isLoggedIn()) {
 ?>
 <form action="_login.php" method="post">
   <input type="text" name="username" placeholder="username">
   <input type="email" name="email" placeholder="email">
   <input type="password" name="password" placeholder="password">
   <input type="submit">
 </form>
<?php
} else {
 ?>
 <form action="_logout.php" method="post">
   <input type="submit" value="logout">
 </form>
 <?php
 }
 ?>
