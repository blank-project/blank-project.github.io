# Node.js > Lesson2 > Exercise1

Créer un fichier `index.js` et y insérer le contenu suivant :

```javascript
var http = require('http');

var server = http.createServer(function(request, response) {

    response.writeHead(200, {"Content-Type": "text/plain"});
    response.end("Hello World!");

});

var port = 1337;
server.listen(port);

console.log("Server running at http://localhost:%d", port);
```

Exécutez :
```bash
node index.js
```

Vous devez voir affiché dans la console :

> Server running at http://localhost:1337

Rendez vous à l'adresse [http://localhost:1337](http://localhost:1337) avec votre navigateur.

Que constatez-vous ?

Pourquoi n'a t-on pas eu besoin d'installer la dépendance `http` pour que ce code fonctionne ?
