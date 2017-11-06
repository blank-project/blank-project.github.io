<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>blog</title>
  </head>
  <body>
    <?php
    require_once("_db.php");
    ?>
    <hr><hr>
    <h1>First Method</h1>
    <hr><hr>
    <?php
    try {
      //prepare insert request
      $request = $_DB->prepare("SELECT * FROM exercise1");

      //execute insert request
      $request->execute();
      $posts = $request->fetch();
    } catch (PDOException $e) {
      echo "Error while getting posts from db " . $e->getMessage();
      die();
    }
    //retrieve each line while they exist
    do {
    ?>
      <h1><?php echo $posts["title"]; ?></h1>
      <p><?php echo $posts["content"]; ?></p>
      <hr/>
    <?php
    } while ($posts = $request->fetch());
     ?>
     <hr>
     <h1>Second method</h1>
     <hr><hr>
     <?php
      try {
        //prepare insert request
        $request = $_DB->prepare("SELECT * FROM exercise1");

        //execute insert request
        $request->execute();
        $posts = $request->fetchAll();
      } catch (PDOException $e) {
        echo "Error while getting posts from db " . $e->getMessage();
        die();
      }

      if (count($posts) > 0) {
        for ($i = 0; $i < count($posts); $i++) {
      ?>
        <h1><?php echo $posts[$i]["title"]; ?></h1>
        <p><?php echo $posts[$i]["content"]; ?></p>
        <hr/>
      <?php
        }
      }
      ?>
  </body>
</html>
