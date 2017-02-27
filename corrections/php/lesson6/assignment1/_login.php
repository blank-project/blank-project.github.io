<?php
require_once("_db.php");
require_once("_misc.php");

spl_autoload_register(function($name) {
  return require("class/" . $name . ".php");
});

session_start();

if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $username = isset($_POST["username"]) ? $_POST["username"] : "";
  $email = isset($_POST["email"]) ? $_POST["email"] : "";
  $password = isset($_POST["password"]) ? $_POST["password"] : "";

  $user = new User($username, $password, $email);
  $errors = $user->validate();

  if (count($errors) == 0) {
    $dao = new UserDAO();
    if ($dao->auth($_DB, $username, $password, $email)) {
      $_SESSION["user"] = $user;
      header("location:game.php");
    }
  }
}

if (!isLoggedIn()) {
 ?>
 <form class="form-inline" action="_login.php" method="post">
   <div class="form-group">
     <input type="text" class="form-control" name="username" placeholder="username">
     <input type="email" class="form-control" name="email" placeholder="email">
     <input type="password" class="form-control" name="password" placeholder="password">
     <div class="btn-group" role="group">
       <button type="submit" class="btn btn-success">Login</button>
       <a href="signup.php" class="btn btn-primary">Signup</a>
     </div>
   </div>
 </form>
<?php
} else {
 ?>
 <form class="navbar-form form-inline" action="_logout.php" method="post">
   <div class="form-group">
     <p><?php echo "Bienvenue " . $_SESSION["user"]->getUsername() . " ! "; ?></p>
     <button type="submit" class="btn btn-danger">Logout</button>
   </div>
 </form>
 <?php
 }
 ?>
