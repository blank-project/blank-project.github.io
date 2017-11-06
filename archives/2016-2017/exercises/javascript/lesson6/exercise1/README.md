## JavaScript > Lesson 6 > Exercise 1

1. Créez une page HTML avec ce contenu HTML :
```html
<!DOCTYPE html>
<html>
    <head>
      <title>Counter Strike en JS (et sans armes).</title>
      <meta charset="UTF-8">
    </head>
    <body>
        <header id="main-header">
            <h1>Une boooombe !</h1>
        </header>
        <main>
            <div class="timer-wrapper">
              Il reste <span class="timer"></span> secondes
            </div>
            <div class="timer-wrapper">
              <button id="defuse">Désamorcer</button>
            </div>
        </main>
        <script type="text/javascript" src="bomb.js"></script>
    </body>
</html>
```

2. Créer un script bomb.js
3. Dans le script bomb.js :
  1. Utiliser la fonction setInterval pour afficher un compte à rebours de 30 secondes dans la console.
  2. Créer une fonction `defuse` qui arrête le compte à rebours.
  3. Au clic sur le bouton avec l'id `defuse`, arrêtez le compte à rebours en appelant votre fonction.
  4. Modifiez votre script pour afficher le temps restant dans le `span` avec la classe `timer`.
  5. Créer une fonction `explode` qui
    - retire tout les éléments du body
    - affiche **BOOM !** en gros et gras
    - change la couleur de fond du body en rouge

    Si le compte à rebours arrive à 0, appelez cette fonction.
  5. Utiliser la fonction setTimeout pour arrêter le compte à rebours au bout de 5 secondes.
