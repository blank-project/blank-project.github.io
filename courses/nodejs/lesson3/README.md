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

Express nous permet de récupérer ces données sous formes d'Objet JavaScript.  
Elles sont disponibles dans la propriété `query` de l'objet `req`.


***


### Exemples

Si l'on ouvre la page  
`search?user=Erwan&password=yoloswag`

`req.query` contient :
```
{
  user : "Erwan",
  password : "yoloswag"
}
```

Pour récuperer le paramètre **user** envoyé via l'URL :
```
var user = req.query.user;
console.log(user); // Affiche "Erwan"
```



---



## Formulaire

On peut également utiliser un [formulaire](../../html/lesson7) pour envoyer les données.

Quand on soumet le formulaire, le serveur effectue un requête HTTP GET ou POST selon la valeur de l'attribut **method** du formulaire.

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

Pour les formulaires, les données envoyées sont dans `req.body`.

Il faut ajouter un middleware pour traiter les données de formulaires, comme :
- [body-parser](https://www.npmjs.com/package/body-parser) pour les données classiques
- [multer](https://www.npmjs.com/package/multer) pour les données _mulitpart_ (notamment les fichiers).

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

`req.body` contient :
```
{
  user : "Erwan",
  password : "yoloswag"
}
```



---



## Pour résumé

Quelque soit la méthode d'envoi, les données envoyées sont disponibles sous forme d'Objets, dans des propriétés différentes de l'objet `req`.

|Source|Variable|
|:----:|:------:|
|URL|req.query|
|Formulaire|req.body|



---



## Traiter les données

## NEVER TRUST USER INPUT


***


On ne doit jamais faire confiance aux données recues !

C'est pourquoi on doit toujours vérifier que les données attendues
- ont bien été envoyées
- qu'elles sont du bons types
- qu'elles ont des valeurs cohérentes
- qu'elles n'engendrent pas de failles de sécurité.


***


Pour cela, on dispose de plusieurs possibilités :
- Utiliser la validation incluses dans les champs des formulaires
- Utiliser une validation coté Client en JavaScript
- Utiliser une validation coté Serveur


***


En général, on combine les techniques de validation coté client et coté serveur.

La validation coté Client pouvant toujours être contournée, on ajoutera au minimum une validation coté serveur.


***


Example : validation d'un email requis

On doit vérifier si :
- l'utilisateur à bien envoyé une valeur
- la valeur est bien un email
- l'email n'existe pas déjà dans une base de données


***


```javascript
function(req, res, next) {
  var errors = [], email = req.body.login;
  if (!email) {
    errors.push("Veuillez saisir un email.");
  } else if (email.indexOf('@') == -1) {
    errors.push("L'email saisi n'est pas valide.");
  } else if(countInDatabase(email) > 0) {
    errors.push("Cet email existe déja");
  }
  // Do something with errors
}
```


***


### Sécurité : les Injections

Si l'on utilise des données provenant de l'utilisateur sans faire attention à leur contenu, on peut créer des failles de sécurité.

La plus connu est la faille XSS ([Cross-Site Scripting](https://fr.wikipedia.org/wiki/Cross-site_scripting)).

Elle consiste à injecter du contenu dans une page web, en général en utilisant un champ de formulaire non protégé.
