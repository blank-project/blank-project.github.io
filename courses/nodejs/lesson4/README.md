# Les Sessions et les Cookies



---



## Les Cookies

Les cookies sont des petits fichiers stockés dans le Navigateur de l'utilisateur.

Ils permettent de sauvegarder des données au niveau du client.

Ils sont envoyés par le navigateur via des Header HTTP.

A chaque cookie est associé un nom de domaine et une date d'expiration.


***


Les cookies reçus par Express sont stockés dans la propriété `cookies` de l'objet `req`, sous la forme d'un Objet Javascript.

Express permet également de stocker de nouveaux cookies dans le Navigateur de l'utilisateur.

Pour cela on utilise la fonction `cookie` de l'objet `res` ([doc](https://expressjs.com/en/4x/api.html#res.cookie)).

Pour utiliser les cookies avec Express, il faut utiliser le middleware [cookie-parser](https://www.npmjs.com/package/cookie-parser) ou un équivalent.



***


### Envoyer un cookie

```javascript
var name = '_blank-theme';
var value = 'blue';
var options = {
  expires: new Date(Date.now() + 900000),
  httpOnly: true
};
res.cookie(name, value, options);
```


***


### Recupérer un cookie

```javascript
var cookieTheme = req.cookies['_blank-theme'];
console.log(cookieTheme);
```



---



## Les sessions

Une session permet de stocker des données de manière temporaire dans un serveur web.

C'est grâce aux session que l'on peut stocker des données de pages en page.

C'est ce qu'on appelle un stockage _non-persistant_ car si le serveur s'arrête, ou que la session expire, les données sont perdues.


***


Un _identifiant de session_ permet de faire le lien entre la session et le navigateur de l'utilisateur.

C'est un Cookie !

On utilise en général la session pour stocker l'utilisateur connecté.



***


Il faut utiliser un middleware spécifique pour activer les sessions dans Express.

Nous utiliserons [express-session](https://www.npmjs.com/package/express-session)

Celui-ci stocke les données en session dans la propriété `session` de l'objet `req`.


***


### Stocker des données en session

```javascript
req.session.username = 'U$€R';
```

### Recupérer une valeur.

```javascript
var username = req.session.username;
console.log(username);
```
