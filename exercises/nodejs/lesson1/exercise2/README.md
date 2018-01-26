# Node.js > Lesson1 > Exercise2

## Stand-alone

Créez un fichier `index.js` contenant :

```javascript
console.log('Hello World !');
```

Ouvrez un terminal dans le dossier où se trouve le fichier, et exécutez :

```bash
nodejs app.js
```

Vous devez voir affiché dans la console :

> Hello World !

## Client-Serveur

Modifiez le fichier `index.js` pour y insérer le contenu suivant :

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

Exécutez une nouvelle fois :
```bash
nodejs app.js
```

Vous devez voir affiché dans la console :

> Server running at http://localhost:1337

Rendez vous à l'adresse [http://localhost:1337](http://localhost:1337) avec votre navigateur.
