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
    //validate functions
    function validate_email($p, $key) {
      if (isset($p[$key])) {
        $p[$key] = filter_var($p[$key], FILTER_SANITIZE_EMAIL);
      }
      if (filter_var($p[$key], FILTER_VALIDATE_EMAIL)) {
        return true;
      }
      return false;
    }

    function validate_input($p, $key, $min, $max) {
      if (isset($p[$key]) && $p[$key] >= $min && $p[$key] <= $max) {
        return true;
      }
      return false;
    }
     ?>
    <?php
      if ($_SERVER["REQUEST_METHOD"] == "POST") {
        //validate inputs
        $email_ok = validate_email($_POST, "destinataire");
        $subject_ok = validate_input($_POST, "objet", 5, 50);
        $message_ok = validate_input($_POST, "message", 50, 140);

        //check if validation is ok
        if ($email_ok && $subject_ok && $message_ok) {
          //send mail
          $okmail = mail($_POST["destinataire"],
                          $_POST["objet"],
                          $_POST["message"]);

          //if mail errored
          if (!$okmail) {
            $error = "Mail not sent";
          }
        } else {
          //if validation failed
          $error = "Wrong parameters : ";
          //if email errored
          if (!$email_ok) {
            $error .= "<li> Mail must be a valid email.</li>";
          }
          //if subject errored
          if (!$subject_ok) {
            $error .= "<li> Subject must be at least 5 but under 50 chars.</li>";
          }

          //if message errored
          if (!$message_ok) {
            $error .= "<li>Message must be at least 20 but under 140 chars</li>";
          }
        }
      }
     ?>
    <div class="error">
     <?php
     if (isset($error)) {
       echo "<ul>$error</ul>";
     }
     ?>
    </div>
    <form action="mail.php" method="post">
      <div>
        <label for="destinataire">Destinataire</label>
        <input id="destinataire"
        class="<?php
        if (isset($email_ok) && !$email_ok) {
          echo 'error';
        }
        ?>"
        type="text" name="destinataire" value="<?php if (isset($_POST['destinataire'])) {
          echo $_POST['destinataire'];
        }?>" />
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
        <input type="text" name="objet" value="<?php if (isset($_POST['objet'])) {
          echo $_POST['objet'];
        }?>"/>
      </div>
      <div>
        <label for="message">message</label>
        <textarea name="message" rows="8" cols="40" value="<?php if (isset($_POST['message'])) {
          echo $_POST['message'];
        }?>"></textarea>
      </div>
      <input type="submit" value="Envoyer" />
      <input type="reset" value="Reset" />
    </form>
  </body>
</html>
