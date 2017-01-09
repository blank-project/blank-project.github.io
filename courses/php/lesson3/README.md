# Transmettre et Traiter des données



---



## Transmettre des données

Il existe deux manière d'envoyer des données à un serveur Web :
 - Via des paramètres de requêtes (_query string_)
 - Via un formulaire


***


### Paramètres de Requête

Pour envoyer des données dans la requête, on ajoute `?` à la fin de l'URL.  
On passe ensuite nos paramètres sous la forme `param1=value1&param2=value2`.

```
<a href="http://blank.bellevillecitoyenne.fr?user=Erwan&password=yoloswag">
  Envoyer !
</a>
```
Quand on clique sur le lien [Envoyer !](http://blank.bellevillecitoyenne.fr?user=Erwan&password=yoloswag), le serveur effectue une requête HTTP GET.


***


### Formulaire

On peut également utiliser un formulaire pour envoyer les données.
```
<form action="http://blank.bellevillecitoyenne.fr" method="POST">
  <input type="text" name="user" value="Erwan"/>
  <input type="password" name="password" value="yoloswag" />
  <input type="submit" value="Envoyer !" />
</form>
```

Quand on soumet le formulaire, le serveur effectue un requête HTTP GET ou POST selon la valeur de l'attribut **method**.
En règle générale, on utilise toujours POST pour soumettre un formulaire.



---



## Les variables globales et superglobales

En PHP, on peut définir des variables _globales_, c'est à dire accessibles partout, en utilisant le mot clé `global`.
```
  global $myGlobalVar; // Accessibles partout.
```
Les variables _superglobales_ sont accessibles partout et n'ont pas besoin d'être déclarée.



---



## Les variables superglobales

- `$_POST` : contient les données de formulaire envoyées via POST.
- `$_GET` : contient les données de requête et les données de formulaire envoyées via GET.
- `$_REQUEST` : contient les données de requêtes
- `$_SESSION` : contient les données de session.
- `$_COOKIE` : Contient les cookies.
- `$_SERVER`, `$_ENV`, `$_FILES`



## Les Cookies

`$_COOKIE`



---



## Les sessions

`session_start()`
`$_SESSION`



---
