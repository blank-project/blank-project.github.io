<?php
  spl_autoload_register(function($name) {
      return require("class/" . $name . ".php");
  });
  require_once("_db.php");
  require_once("_login.php");
 ?>
 <ul>
   <li>menu</li>
 </ul>
