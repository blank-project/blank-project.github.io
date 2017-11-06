<?php
$h = 'localhost';
$db   = 'test_cours';
$username = 'root';
$password = ' ';
$charset = 'utf8';

$dsn = "mysql:host=$h;dbname=$db;charset=$charset";
$options = [
    PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
    PDO::ATTR_ERRMODE            => PDO::ERRMODE_EXCEPTION,
    PDO::ATTR_EMULATE_PREPARES   => false,
];

try {
    $_DB = new PDO($dsn, $username, $password, $options);
    echo "COUCOU JE SUIS CONNECTÉ";
} catch (PDOException $e) {
    print "Error!: " . $e->getMessage() . "<br/>";
    die();
}
 ?>
