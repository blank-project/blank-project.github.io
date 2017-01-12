# Transmettre et Traiter des données



---



## Transmettre des données

Il existe deux manière d'envoyer des données à un serveur Web :
 - Via des paramètres de requêtes (_query string_)
 - Via un formulaire HTML



---



### Paramètres de Requête

Pour envoyer des données dans la requête, on ajoute `?` à la fin de l'URL.

On passe ensuite nos paramètres sous la forme `param=value`

Les différents paramètres sont séparés par des  `&`.


***


```
<a href="http://example.org/index.php?user=Erwan&password=yoloswag">
  Envoyer !
</a>
```
Quand on clique sur le lien [Envoyer !](http://example.org/index.php?user=Erwan&password=yoloswag), le serveur effectue une requête HTTP GET.


***

### Avantages
- Pas obligé de créer un formulaire pour envoyer des données.

### Inconvénients
- Les paramètres sont affichés dans l'URL (ne pas envoyer de mot de passe !)
- Pas possible d'envoyer de fichier
- Taille limitée


***


### Récupérer les paramètres de requêtes

PHP va traiter ces paramètres et les rendre disponibles dans la variable `$_GET`.

C'est une variable un peu spéciale (on y reviendra).

Les paramètres seront disponibles sous forme de tableau associatif.


***


### Exemples

Si l'on appelle la page  
`index.php?user=Erwan&password=yoloswag`  
`$_GET` contient :

```
array("user" => "Erwan", "password" => "yoloswag")
```

Pour récuperer le paramètre **user** envoyé via l'URL :
```
$user = $_GET['user'];
echo $user; // Affiche "Erwan"
```



---



## Formulaire

On peut également utiliser un formulaire pour envoyer les données.

Quand on soumet le formulaire, le serveur effectue un requête HTTP GET ou POST selon la valeur de l'attribut **method**.

En règle générale, on utilise toujours POST pour soumettre un formulaire.


***


```
<form action="http://example.org/form.php" method="POST">
  <input type="text" name="user" value="Erwan"/>
  <input type="password" name="password" value="yoloswag" />
  <input type="submit" value="Envoyer !" />
</form>
```

<form action="http://example.org/form.php" method="POST">
  <input type="text" name="user" value="Erwan"/>
  <input type="password" name="password" value="yoloswag" />
  <input type="submit" value="Envoyer !" />
</form>


***


### Avantages
- Les paramètres ne sont pas affichés dans l'URL (ce n'est pas sécurisé pour autant !)
- Possible d'envoyer de fichier
- Taille (presque) illimitée

### Inconvénients
- On doit créer un formulaire.



***



### Récupérer les données

Pour les formulaires, PHP va insérer les données dans une variable `$_POST`.

Pour le reste, ça marche comme avec `$_GET` !


***



### Exemples

Si l'on soumet ce formulaire :
```
<form action="http://example.org/form.php" method="POST">
  <input type="text" name="user" value="Erwan"/>
  <input type="password" name="password" value="yoloswag" />
  <input type="submit" value="Envoyer !" />
</form>
```

`$_POST` contient :
```
array("user" => "Erwan", "password" => "yoloswag")
```



---



## Pour résumé

Quelque soit la méthode d'envoi, les données envoyées sont disponibles sous forme de Tableau Associatif, dans des variables différentes.

|Source|Variable|
|:----:|:------:|
|URL|$_GET|
|Formulaire|$_POST|
|Les 2|$_REQUEST|



***


### Les variables globales et superglobales

En PHP, on peut définir des variables _globales_, c'est à dire accessibles partout, en utilisant le mot clé `global`.

```
  global $myGlobalVar; // Accessibles partout.
```
Les variables _superglobales_ sont accessibles partout et n'ont pas besoin d'être déclarée.

`$_POST`, `$_GET` et `$_REQUEST` sont des variables superglobales.



---



## Traiter les données

## NEVER TRUST USER INPUT


***


On ne doit jamais faire confiance aux données recues !

C'est pourquoi on doit toujours vérifier que les données attendues
- ont bien été envoyées
- qu'elles sont du bons types
- qu'elles ont des valeurs cohérentes


***


Exemple :
On écrit un script PHP qui doit traiter un âge.
L'âge est envoyé par paramètre de requête dans une variable `age`
On doit vérifier :
- que le paramètre est bien envoyé : `isset($_GET['age'])`.
- que le paramètre est bien un entier `is_int($_GET['age'])`.
- que le paramètre est bien positif `$_GET['age'] > 0`.


***

L'exemple précédent est un exemple simple mais ne pas vérifier les paramètres peut conduire à des failles de sécurité !
