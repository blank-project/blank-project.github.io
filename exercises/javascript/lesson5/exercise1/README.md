## JavaScript > Lesson5 > Exercise 1

1. Créez une page HTML avec ce contenu HTML :
```html
<!DOCTYPE html>
<html>
    <head>
    </head>
    <body>
        <header id="main-header">
            <h1>Olé, ça faisait longtemps !</h1>
        </header>
        <main>
            <header>
                <h2>Vous trouvez pas ?</h2>
            </header>
            <section class="style1">
                <header>
                    <h1>Nan, on était bien en vacances !</h1>
                </header>
                <article>
                    <p>Tout à fait d'accord, moi aussi c'était tranquille !</p>
                </article>
                <footer>
                    <p><i>Mouais...</i></p>
                </footer>
            </section>
            <section class="style2">
                <header>
                    <h1>Nan, en vrai j'suis content de revenir</h1>
                </header>
                <article>
                    <p>J'espère que vous avez passé de bonnes vacances !</p>
                </article>
                <footer>
                    <p><i>Et de bonnes fêtes</i></p>
                </footer>
            </section>
            <section class="style1">
                <article>
                    <p>Et que vous avez bien mangé et bien bu !</p>
                </article>
            </section>
        </main>
        <script type="text/javascript">
        </script>
    </body>
</html>
```
2. Écrivez un script javascript qui sélectionne les éléments suivants et les afficher dans la console (avec console.log) :
  1. Récupérer ceci :
  ```html
  <header id="main-header">
      <h1>Olé, ça faisait longtemps !</h1>
  </header>
  ```
  2. Tous les headers de la page
  3. Toutes les sections de "style1"
  4. Le script
  5. Uniquement le header du main
3. Mettre le tout dans une fonction appelée exercise1
