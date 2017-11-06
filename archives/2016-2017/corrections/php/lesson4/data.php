<?php
session_start();

$login_base = "admin";
$pwd_base = "blank";

$login = $_POST['login'];
$pwd = $_POST['pwd'];

if(isset($login) && isset($pwd) && $login==$login_base && $pwd==$pwd_base) {
  $_SESSION['login'] = $login;
  $_SESSION['pwd'] = $pwd;
  print_r $_SESSION;
  echo "ok";
} else {
  echo "pasbon";
}
 ?>
