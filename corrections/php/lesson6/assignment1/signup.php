<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Signup</title>
  </head>
  <body>
    <?php
      require("_nav.php");
    ?>
    <?php
    //check if there is a post request currently
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
      $username = isset($_POST["username"]) ? $_POST["username"] : "";
      $email = isset($_POST["email"]) ? $_POST["email"] : "";
      $password = isset($_POST["password"]) ? $_POST["password"] : "";

      $user = new User($username, $password, $email);

      if ($user->validate()) {
        $dao = new UserDAO();
        if($dao->save($_DB, $user)) {
          //login
          echo "new user created";
        } else {
          echo "nope";
        }
      } else {
        echo "user didn't pass validation";
      }
    } else {
      echo "woops no request";
    }
     ?>
    <!-- signup form -->
    <form action="signup.php" method="post">
      <div>
        <label for="input-username">Username</label>
        <input type="text" name="username" id="input-username">
      </div>
      <div>
        <label for="input-email">Email</label>
        <input type="email" name="email" id="input-email">
      </div>
      <div>
        <label for="input-password">Password</label>
        <input type="password" name="password" id="input-password">
      </div>
      <input type="submit" />
    </form>
  </body>
</html>
