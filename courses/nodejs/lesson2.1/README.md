# Express.js



***


## Express ?

> Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.

Express est un framework qui va nous faciliter la création d'applications Web. Il est basé sur le Pattern MVC.



***



## Le Pattern MVC

Un pattern est une manière générique de structurer du code et/ou une application.

MVC est un pattern de conception d'application comportant 3 composants relativement indépendants (peu couplés) :
- Le Modèle : les données de l'application
- La Vue : l'affichage des données du modèle à destination de l'utilisateur
- Le Contrôleur : traite les actions en provenance de la Vue et met à jour le Modèle.  
  Sélectionne la Vue appropriée pour représenter les changements d'état du Modèle.



***



Express va nous faciliter la création d'applications Web, grâce à certains concepts clés :
- les **Middlewares** (_intergiciels_)
- le **Routing**
- les **Templates**



---



## Les Middlewares

Une application web Express est constituée d'une succession de Middlewares.

Un middleware Express est une fonction JavaScript qui a accès à
 - La requête à traiter
 - La réponse à renvoyer
 - le middleware suivant dans la chaîne (souvent nommée `next`)

La requête et la réponse sont des objets JavaScript.


***


Les fonctions middleware effectuent les tâches suivantes :
 - Exécuter tout type de code.
 - Apporter des modifications aux objets de demande et de réponse.
 - Terminer le cycle de demande-réponse (renvoyer la réponse au client).
 - Appeler la fonction middleware suivant dans la pile.



***


Exemple de Middleware :

```
function(req, res, next) {
  var ip = req.ip;
  var method = req.method;
  console.log("A request from", ip, "was received using HTTP", method);
}
```

> A request from 192.168.0.1 was received using HTTP GET




---



## Le Routing

Le Routing définit comment une application répond à une requête sur un **endpoint** particulier, en associant ce endpoint à un Contrôleur.

Un endpoint est la combinaison :
- d'une URI ou d'un chemin (127.0.0.1/login)
- d'une méthode HTTP (GET, POST, ...)



***



Exemple de Routing

```
var loginController = function (req, res) {
  res.send('Got a POST request at /login')
};
app.post('/login', loginController);
```
`app` est un objet Javascript représentant l'application Express.  
Le code précédent permet d'associer les requêtes HTTP POST sur l'URL `/login` avec la fonction `loginController`



---



## Les Templates et les Moteurs de Templates

[Wikipédia](https://en.wikipedia.org/wiki/Template_processor)

Un Template est un document qui va nous permettre de générer un autre document à partir de données.

Le Moteur de Template va nous permettre de réaliser cette transformation.


***


![Template Engine](https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/TempEngGen015.svg/245px-TempEngGen015.svg.png)


***


### Configurer un moteur de Template

```javascript
app.set('views', path); // The path to the folder containing views
app.set('view engine', 'pug'); // Use pug as template engine.
```


***


### Utiliser un moteur de Template

```javascript
function(req, res, next) {
  res.render('index', { title: 'Hello World', name: 'Erwan'});
}
```

Ce code va générer le résultat de la requête en exécutant le template *index* avec les données fournies.



---



## Conclusion

Express va nous permettre de créer des Applications Web en associant à plusieurs **Routes** une chaîne de **Middlewares** différents.

Ils vont alors traiter la requête et renvoyer le résultat du traitement au client, en exécutant un **Template**.
