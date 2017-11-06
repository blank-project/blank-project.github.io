## Connexion à une base de données en PHP


***


## Pour cela on va utiliser ce que l'on appelle un DAAL : PDO

DAAL : Database Access Abstraction Layer
PDO : PHP Data Objects

Ce n'est pas le plus simple, mais c'est le plus sécurisé et maintenable. Il n'abstrait pas beaucoup et est intégré de base en PHP.


***


## Se connecter à une base de données

```php
$h = 'localhost';
$db   = 'test_cours';
$username = 'root';
$password = 'le_mot_de_passe_utilisé';
$charset = 'utf8';

$dsn = "mysql:host=$h;dbname=$db;charset=$charset";
$options = [
    PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
    PDO::ATTR_ERRMODE            => PDO::ERRMODE_EXCEPTION,
    PDO::ATTR_EMULATE_PREPARES   => false,
];

try {
    $_DB = new PDO($dsn, $username, $password, $options);
} catch (PDOException $e) {
    print "Error!: " . $e->getMessage() . "<br/>";
    die();
}
```

Note: expliquer le code et SURTOUT le try catch


***


## Bonnes pratiques

Généralement le code que vous voyez ci-dessus est exécuté dans une page partielle et est incluse sur les autres pages en `require_once`.

La base de donnée peut être requêtée via la variable `$_DB`.


***


## Maintenant les requêtes

Pour créer une requête on va utiliser les fonctions `prepare` et `execute` de notre objet.


***


## Préparer une requête

Pour préparer une requête on va utiliser `prepare` qui protège des injections SQL. Évitez au maximum la fonction `query` de PDO lorsqu'elle contient des variables php.

```php
$request = $_DB->prepare('SELECT * FROM blank WHERE id=:id AND content=:content);
```
 Ici on prépare la requête à accueillir deux paramètres, un nommé `id`, et l'autre `content`.


***


## Exécuter la requête

C'est à ce moment que l'on va remplacer les paramètres.

```php
$request->execute(['id' => $id, `content` => $content]);
```


***


## Récupérer le contenu !

```php
$results = $request->fetch();
```


***


## Éxécuter des requêtes sans attente de contenu (INSERT, UPDATE, DELETE)

```php
$request = "UPDATE blank SET content = :content WHERE id = :id";
$_DB->prepare($request)->execute(array("content" => $content, "id" => $id));
```


***


## Récupérer le nombre de lignes affectées

```php
$request = $_DB->prepare("DELETE FROM blank WHERE content = :content");
$request->execute(array("content" => $content));
$rowsDeleted = $request->rowCount();
```


***


## Pause exercices
Créez un fichier php se connectant à la base de données créée lors du premier cours de base de données.


---


## Pause exercices (suite)

Insérez une seconde ligne dans la table `blank`, avec pour contenu `ok déjà à la deuxième ligne c'est pas pratique`.

Modifiez cette ligne pour que le contenu soit maintenant : `nan nan c'est génial`.


***


## Pause exercices (suite suite)

Supprimez cette dernière ligne.

Il ne doit maintenant rester qu'une seule ligne dans votre table. Pour vérifier, sélectionner toutes les lignes de la table.


***


## Un goût de déjà vu ?


Naaaaaaaan.
