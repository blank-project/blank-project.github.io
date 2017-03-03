<?php
session_start();

require_once("_db.php");
require_once("_misc.php");

$errors = array();

spl_autoload_register(function($name) {
    return require("class/" . $name . ".php");
});

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $username = isset($_POST["username"]) ? $_POST["username"] : "";
    $email = isset($_POST["email"]) ? $_POST["email"] : "";
    $password = isset($_POST["password"]) ? $_POST["password"] : "";

    $user = new User($username, $password, $email);
    $errors = $user->validate();

    if (count($errors) == 0) {
        $dao = new UserDAO();
        if ($dao->auth($_DB, $user)) {
            $_SESSION["user"] = $user;
            header("location:game.php");
        }
    }

    //if user not logged in
    if (empty($_SESSION["user"])) {
      header("location:index.php");
    }
}

if (!isLoggedIn()) {
?>
    <form class="navbar-form navbar-right" action="_login.php" method="post">
        <div class="form-group">
          <input type="text" class="form-control" name="username" placeholder="username">
        </div>
        <div class="form-group">
          <input type="email" class="form-control" name="email" placeholder="email">
        </div>
        <div class="form-group">
          <input type="password" class="form-control" name="password" placeholder="password">
        </div>
        <div class="btn-group" role="group">
            <button type="submit" class="btn btn-success">Login</button>
            <a href="signup.php" class="btn btn-primary">Signup</a>
        </div>
    </form>
<?php
} else {
?>
    <form class="navbar-form navbar-right" action="_logout.php" method="post">
            <a href="#"><?php echo "Bienvenue " . $_SESSION["user"]->getUsername() . " ! "; ?></a>
            <button type="submit" class="btn btn-danger">Logout</button>
    </form>
<?php
}
?>
