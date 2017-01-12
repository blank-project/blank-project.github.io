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

Ils sont envoyés par le navigateur via des Header HTTP.

Les cookies sont stockés dans la variable `$_COOKIE`.


***


PHP permet également de stocker de nouveaux cookies dans le Navigateur de l'utilisateur.

Pour cela on utilise la fonction `setcookie()`



---



## Les sessions

Une session permet de stocker des données de manière temporaire.

Les données sont stockées dans la variable `$_SESSION`.

Pour démarrer une session, on appelle la fonction `session_start()`.
