## Les timers



---



## C'est quoi ?

Ce sont des fonctions de bases qui nous permettent d'exécuter des fonctions à retardement :
- setInterval(function, milliseconds) : Éxécute une fonction toutes les X millisecondes.
- setTimeout(function, milliseconds) : Éxécute une fonction au bout de X millisecondes.



---



## setInterval
La fonction passée en paramètre à `setInterval` s'exécutera toutes les X millisecondes jusqu'à ce que l'on change de page ou qu'on demande explicitement son arrêt.


***


## Comment fait-on ?
```js
var interval = setInterval(myFunction, 1000); // Lance l'exécution de la fonction myfunction
// toutes les secondes
clearInterval(interval); // Stoppe l'exécution de la fonction myFunction.
```

La fonction passée en paramètre peut-être anonyme ou non. C'est ce que l'on appelle une callback.



---



## Attend c'est quoi une callback ?

Une callback est une fonction qui sera exécutée par une autre fonction. C'est généralement une fonction passée en paramètre d'un autre fonction. Cette dernière l'exécutera quand elle lors de son exécution.



---



## setTimeout
La fonction `setTimeout` set à exécuter une fonction à "retardement". Elle s'exécutera X millisecondes après le lancement de la fonction.


***


## Comment fait-on ?
```js
setTimeout(myFunction, 1000); // Lance l'exécution de la fonction myfunction
// au bout de 1 seconde
```



---



## AJAX
C'est un acronyme qui signifie : Asynchronous Javascript And XML. Au début cette technique offrait la possibilité de transférer du XML depuis une page web, mais maintenant on peut transporter autre chose (du texte par exemple).


***


## Petite information
Par défaut les requêtes sont synchrones, c'est à dire que l'on attend une réponse du serveur avant de faire quelque chose.
Cependant AJAX nous autorise à faire ceci de manière asynchrone (ou non bloquante).
On ne va pas attendre la fin de la requête pour exécuter le reste du JavaScript.


***


## Et ça sert à quoi ?
A charger des ressources sans bloquer le chargement de la page.
A faire des appels pour récupérer des notifications, messages, etc. (c'est utilisé dans les systèmes de messagerie en ligne).
AJAX sert aussi à envoyer du contenu.


***


## Comment fait-on ?
On utilise un objet JavaScript du nom de `XMLHttpRequest`.
```js
var request = new XMLHttpRequest(); //création de la requête
request.open("GET", "http://www.w3schools.com/xml/ajax_info.txt", true); //spécification de la
// requête, l'adresse et si la requête est asynchrone (non bloquante)
request.send(); //envoie de la requête
```


***


## Petit état des requêtes HTTP principales :
* GET : Récupération de contenu
* POST : Publication de contenu
* DELETE : Suppression de contenu
* PUT & PATCH : Mise à jour de contenu


***


## Ok j'ai envoyé ma requête ? Et ?
On peut récupérer le résultat si on doit attendre quelque chose en retour !
Pour cela on va passer une callback à l'objet XMLHttpRequest qui sera appelé si l'état de la requête change !

```js
request.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) { //ici on vérifie que si l'état change
    // il faut qu'il soit bon. Status : 200 signifie que la requête s'est bien passée
    // readyState : 4 signifie que la requête est finie et que la réponse est prête
        ...
    }
};
```

***


## Et au final ça donne quoi ?

```js
var request = new XMLHttpRequest(); //création de la requête
request.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) { //ici on vérifie que si l'état change
    // il faut qu'il soit bon. Status : 200 signifie que la requête s'est bien passée
    // readyState : 4 signifie que la requête est finie et que la réponse est prête
        ...
    }
};
request.open("GET", "http://www.w3schools.com/xml/ajax_info.txt", true); //spécification de la
// requête, l'adresse et si la requête est asynchrone (non bloquante)
request.send(); //envoie de la requête
```

***


## Je veux récupérer le texte de la réponse je fais comment ?

`request.responseText`. Attention cette propriété n'est remplie que lorsque la requête est terminée !


***


## Je veux envoyer des données lors de ma requête

Pour cela il faut passer en argument à la fonction send le contenu que l'on souhaite envoyer. Il faut aussi spécifier le type de contenu à l'aide de la fonction `setRequestHeader("Content-type","mime-type of your content");`.


***

## Exercices !
