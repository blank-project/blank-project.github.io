<?php
  //function to test if user is logged in
  function isLoggedIn() {
    if (isset($_SESSION["username"])) {
      return true;
    }
    return false;
  }

  session_start();
  $users = require("users.php");

  //if there is a method post (post a form)
  if ($_SERVER["REQUEST_METHOD"] == "POST") {
    //retrieve username & password
    $username = isset($_POST["username"]) ? $_POST["username"] : "";
    $password = isset($_POST["password"]) ? $_POST["password"] : "";

    //if username & password match
    if (isset($users[$username]) && $users[$username] == $password) {
      //create session username which will be checked by the function isLoggedIn
      $_SESSION["username"] = $username;
    }

    // VAL (version décomposée)
    // if (isset($users[$username])) {
    //   //retrieve user password
    //   $toTestPwd = $users[$username];
    //   //test user password with password input value
    //   if ($toTestPwd == $password) {
    //     echo "Braval";
    //   }
    // }
  }

  //if not logged in create a form to login
  if (!isLoggedIn()) {
 ?>
 <nav>
  <ul>
    <li>
      <form action="_login.php" method="post">
        <label for="userid">username</label>
        <input id="userid" type="text" name="username" value="">
        <label for="pwdid">password</label>
        <input id="pwdid" type="password" name="password" value="">
        <input type="submit" name="connection" value="connexion">
      </form>
    </li>
  </ul>
</nav>
<?php
//if connected create a form to logout
} else {
 ?>
<nav>
 <ul>
   <li>
     <h1>Welcome <?php echo $_SESSION["username"]; ?></h1>     <form action="_logout.php" method="post">
       <input type="submit" name="deconnexion" value="Déconnexion">
     </form>
   </li>
   <li><a href="private.php">Go to the vip room</a></li>
 </ul>
</nav>
<?php
}
 ?>
