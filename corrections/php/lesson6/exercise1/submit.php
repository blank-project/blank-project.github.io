<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>submit your blog post</title>
  </head>
  <?php

  require_once("_db.php");

  if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $t = isset($_POST["title"]) ? $_POST["title"] : "";
    $c = isset($_POST["content"]) ? $_POST["content"] : "";

    //if i have a title and a content then, save it to db
    if ($t && $c) {
      try {
        //prepare insert request
        $request = $_DB->prepare("INSERT INTO exercise1 (title, content) VALUES (:title, :content)");

        //execute insert request
        $request->execute(array("title" => $t, "content" => $c));
      } catch (PDOException $e) {
        echo "Error while writing post in db " . $e->getMessage();
        die();
      }
    }

  }

   ?>
  <body>
    <form action="submit.php" method="post">
      <input type="text" name="title" placeholder="title">
      <textarea name="content" rows="8" cols="40" placeholder="content"></textarea>
      <input type="submit" />
    </form>
  </body>
</html>
