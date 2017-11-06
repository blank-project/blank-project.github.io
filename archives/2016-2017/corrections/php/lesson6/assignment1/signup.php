<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Signup</title>
    <?php
    require_once("_head.php");
     ?>
  </head>
  <body>
    <?php
    require_once("_db.php");
    require_once("_misc.php");

    spl_autoload_register(function($name) {
      return require("class/" . $name . ".php");
    });
    ?>
    <?php
    //check if there is a post request currently
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
      $username = isset($_POST["username"]) ? $_POST["username"] : "";
      $email = isset($_POST["email"]) ? $_POST["email"] : "";
      $password = isset($_POST["password"]) ? $_POST["password"] : "";

      $user = new User($username, $password, $email);

      $errors = $user->validate();

      echo "<ul style='padding:2em;color:red;'>";

      if (count($errors) == 0) {
        $dao = new UserDAO();
        //check if user already exists
        $checkuser = $dao->find($_DB, $user->getUsername());
        if ($checkuser["username"] !== $user->getUsername()) {
          //save in db
          if($dao->save($_DB, $user)) {
            //auth user
            if ($dao->auth($_DB, $user)) {
              session_start();
              $_SESSION["user"] = $user;
              header("location:game.php");
            }
          }
        } else {
          echo "<li>User already exists</li>";
        }
      } else {
        for ($i = 0; $i < count($errors); $i++) {
          echo "<li>" . $errors[$i] . "</li>";
        }
      }
      echo "</ul>";
    }
     ?>
    <!-- signup form -->
    <form style="padding:2em;" class="form" action="signup.php" method="post">
      <div class="form-group">
        <h1>Signup Form !</h1>
      </div>
      <div class="form-group">
        <label for="input-username">Username</label>
        <input type="text" class="form-control" name="username" id="input-username">
      </div>
      <div class="form-group">
        <label for="input-email">Email</label>
        <input type="email" class="form-control" name="email" id="input-email">
      </div>
      <div class="form-group">
        <label for="input-password">Password</label>
        <input type="password" placeholder="min 6chars." class="form-control" name="password" id="input-password">
      </div>
      <div class="form-group" style="text-align:center;">
        <button class="btn btn-success" style="width:100%" type="submit">Signup !</button>
      </div>
    </form>
  </body>
</html>
