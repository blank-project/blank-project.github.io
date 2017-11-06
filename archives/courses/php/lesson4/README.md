# Les Sessions et les Cookies



---



Dans le cours précédent nous avons vu 3 **variables superglobales** : `$_POST`, `$_GET` et `$_REQUEST`.

Il en existe d'autres :
- `$_COOKIE` : Contient les cookies.
- `$_SESSION` : contient les données de session.
- `$_SERVER`, `$_ENV`, `$_FILES` : à vous de chercher !



---



## Les Cookies

Les cookies sont des petits fichiers stockés dans le Navigateur de l'utilisateur.

Ils permettent de sauvearder des données au niveau du client.

Ils sont envoyés par le navigateur via des Header HTTP.

A chaque cookie est associé un nom de domaine et une date d'expiration.


***

Les cookies reçus par PHP sont stockés dans la variable `$_COOKIE`, sous la forme d'un tableau associatif.

PHP permet également de stocker de nouveaux cookies dans le Navigateur de l'utilisateur.

Pour cela on utilise la fonction `setcookie()`.

Les Cookies doivent être envoyés AVANT le code HTML, sinon vous aurez une erreur `headers already sent`.


***


### Envoyer un cookie

```
<?php
$cookie_name = '_blank-theme';
$cookie_value = 'blue';
$expire = time() + (7 * 24 * 60 * 60); // Expire la semaine prochaine
setcookie($cookie_name, $cookie_value, $expire)
?>
```


***


### Recupérer un cookie

```
<?php
$cookie_name = '_blank-theme';
$cookie_value = 'default';
if (isset($_COOKIE[$cookie_name])) {
  $cookie_value = $_COOKIE[$cookie_name];
  echo "Theme : $cookie_value";
}
?>
```



---



## Les sessions

Une session permet de stocker des données de manière temporaire.

C'est grâce aux session que l'on peut stocker des données de pages en page.

C'est ce qu'on appelle un stockage _non-persistant_ car si le serveur s'arrête, ou que la session expire, les données sont perdues.


***


Un _identifiant de session_ permet de faire le lien entre la session et le navigateur de l'utilisateur.

C'est un Cookie ! Par défaut il se nomme `PHPSESSID`.

On utilise en général la session pour stocker l'utilisateur connecté.



***


Pour démarrer une session, on appelle la fonction `session_start()`.

Les données sont stockées dans la variable `$_SESSION`, sous forme de tableau associatif.

Il faut appeler `session_start()` avant d'accéder à  `$_SESSION`.

Pour effacer toutes les données de session, on utilise `session_destroy()`.


***


### Stocker des données en session

```
<?php
session_start();
$user = ...; // récupère un utilisateur.
if ($user != null) {
  $_SESSION['user'] = $user;
} else {
  echo 'Wrong login or passowrd';
}
?>
```


***


### Recupérer une valeur.

```
<?php
session_start();
if (isset($_SESSION['user'])) {
  $user = $_SESSION['user'];
  echo "Bienvenue $user";
} else {
  echo 'Wrong login or passowrd';
}
?>
```
