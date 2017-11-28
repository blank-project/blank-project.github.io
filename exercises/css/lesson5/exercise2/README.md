# CSS > Media Queries > Exercice 2

Créer un site avec un jumbotron, un menu , 2 barres latérales (un sommaire, une publicité), un footer.
Le contenu principal de la page doit contenir 4 articles avec chacun une image.

`(header>h1{HEADER})+(nav>ul>li{Item $}*5)+(div.wrapper>(main>(article#article$>(h2{Titre $}+p>(img+{lorem100})))*4)+(aside.summary>(ul>(li>a[href="#article$"]{Article $})*4))+(aside.ads>h2{Publicité}))+footer>h3{FOOTER}`, pour générer avec le plugin `emmet` à installer sur atom

```
<header>
  <h1>HEADER</h1>
</header>
<nav>
  <ul>
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Item 3</li>
    <li>Item 4</li>
    <li>Item 5</li>
  </ul>
</nav>
<div class="wrapper">
  <main>
    <article id="article1">
      <h2>Titre 1</h2>
      <p><img src="" alt="">lorem100</p>
    </article>
    <article id="article2">
      <h2>Titre 2</h2>
      <p><img src="" alt="">lorem100</p>
    </article>
    <article id="article3">
      <h2>Titre 3</h2>
      <p><img src="" alt="">lorem100</p>
    </article>
    <article id="article4">
      <h2>Titre 4</h2>
      <p><img src="" alt="">lorem100</p>
    </article>
  </main>
  <aside class="summary">
    <ul>
      <li><a href="#article1">Article 1</a></li>
      <li><a href="#article2">Article 2</a></li>
      <li><a href="#article3">Article 3</a></li>
      <li><a href="#article4">Article 4</a></li>
    </ul>
  </aside>
  <aside class="ads">
    <h2>Publicité</h2>
  </aside>
</div>
<footer>
  <h3>FOOTER</h3>
</footer>
```

- Donner des couleurs vives aux éléments de structure (`<header>`, `<main>`, `<footer>` ...) pour pouvoir bien les identifier.

Quand la largeur de l'écran est supérieure à 900px :
- Faire un layout à 3 colonnes : sommaire à gauche, contenu (articles au milieu), publicité à droite.
- Faire un menu horizontal

Quand la largeur de l'écran est inférieure à 900px et supérieure à 600px :
- Rendre le menu vertical
- Faire un layout à  2colonnes en cachant le sommaire.

Quand la largeur de l'écran est inférieure à 600px :
- Cacher le menu
- Afficher la publicité en premier puis le contenu, les uns sous les autres.
10
