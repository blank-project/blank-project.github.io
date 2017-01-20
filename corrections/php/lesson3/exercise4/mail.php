<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>mail.php</title>
    <style>
      form {
        width:50%;
        margin:auto;
        background: lightblue;
        display:flex;
        flex-direction:column;
      }

      form > * {
        display:flex;
        flex-direction:row;
        justify-content:space-between;
        margin:5px;
      }

      .error {
        text-align:center;
        color:red;
      }
    </style>
  </head>
  <body>
    <?php
      // validation :
      // if ($_SERVER["REQUEST_METHOD"] == "POST") {
      //   $email = $_POST["destinataire"];
      //   if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
      //     $emailErr = "Rentre un email correct STP";
      //     $emailErrorClass = "error";
      //   }
      // }
      if ($_SERVER["REQUEST_METHOD"] == "POST") {
        $email = $_POST["destinataire"];
        $subject = $_POST["objet"];
        $message = $_POST["message"];
        $okmail = mail($email, $subject, $message);
        if ($okmail != true) {
          $error = "Mail not sent";
        }
      }
     ?>
    <div class="error">
     <?php
     if (isset($error)) {
       echo "<p>$error</p>" ;
     }
     ?>
    </div>
    <form action="mail.php" method="post">
      <div>
        <label for="destinataire">Destinataire</label>
        <input id="destinataire" type="text" name="destinataire" />
      </div>
      <div>
        <label for="cc">cc</label>
        <input id="cc" type="text" name="cc" />
      </div>
      <div>
        <label for="cci">cci</label>
        <input type="text" name="cci" />
      </div>
      <div>
        <label for="objet">objet</label>
        <input type="text" name="objet" />
      </div>
      <div>
        <label for="message">message</label>
        <textarea name="message" rows="8" cols="40"></textarea>
      </div>
      <input type="submit" value="Envoyer" />
      <input type="reset" value="Reset" />
    </form>
  </body>
</html>
