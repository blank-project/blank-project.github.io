# Transmettre et Traiter des données



---



## Transmettre des données

Il existe deux manière d'envoyer des données à un serveur Web :
 - Via des paramètres de requêtes (_query string_)
 - Via un formulaire



---



### Paramètres de Requête

Pour envoyer des données dans la requête, on ajoute `?` à la fin de l'URL.

On passe ensuite nos paramètres sous la forme `param=value`

Les différents paramètres sont séparés par des  `&`.


***


```
<a href="http://blank.bellevillecitoyenne.fr/index.html?user=Erwan&password=yoloswag">
  Envoyer !
</a>
```
Quand on clique sur le lien [Envoyer !](http://blank.bellevillecitoyenne.fr/index.html?user=Erwan&password=yoloswag), le serveur effectue une requête HTTP GET.



---



### Formulaire

On peut également utiliser un formulaire pour envoyer les données.

Quand on soumet le formulaire, le serveur effectue un requête HTTP GET ou POST selon la valeur de l'attribut **method**.

En règle générale, on utilise toujours POST pour soumettre un formulaire.


***


```
<form action="http://blank.bellevillecitoyenne.fr" method="POST">
  <input type="text" name="user" value="Erwan"/>
  <input type="password" name="password" value="yoloswag" />
  <input type="submit" value="Envoyer !" />
</form>
```

<form action="http://blank.bellevillecitoyenne.fr" method="POST">
  <input type="text" name="user" value="Erwan"/>
  <input type="password" name="password" value="yoloswag" />
  <input type="submit" value="Envoyer !" />
</form>



---



## Récupérer des données

Quelque soit le mode de transfert des données, PHP va nous permettre de les récupérer et de les traiter.

Elles sont disponibles sous forme de Tableau Associatif, dans des variables différentes.

|Source|Variable|
|:----:|:------:|
|URL|$_GET|
|Formulaire|$_POST|
|Les 2|$_REQUEST|




***


### Exemples

Pour récuperer le paramètre **user** envoyé via l'URL :
```
$user = $_GET['user'];
```
Pour récuperer le paramètre **password** envoyé via un formulaire :
```
$password = $_POST['password'];
```
Pour récuperer le paramètre **test**, quelque soit la méthode d'envoi :
```
$test = $_REQUEST['test'];
```


***


### Les variables globales et superglobales

En PHP, on peut définir des variables _globales_, c'est à dire accessibles partout, en utilisant le mot clé `global`.

```
  global $myGlobalVar; // Accessibles partout.
```
Les variables _superglobales_ sont accessibles partout et n'ont pas besoin d'être déclarée.



---



## Les variables superglobales

`$_POST`, `$_GET` et `$_REQUEST` sont des variables superglobales.
Il en existe d'autres :
- `$_SESSION` : contient les données de session.
- `$_COOKIE` : Contient les cookies.
- `$_SERVER`, `$_ENV`, `$_FILES` : à vous de chercher !



---



## Traiter les données

## NEVER TRUST USER INPUT


***


---



## Les Cookies

Les cookies sont des petits fichiers stockés dans le Navigateur de l'utilisateur.

Ils sont envoyés par le navigateur via des Header HTTP.

Les cookies sont stockés dans la variable `$_COOKIE`.

PHP permet également de stocker de nouveaux cookies dans le Navigateur de l'utilisateur.



---



## Les sessions

`session_start()`
`$_SESSION`
