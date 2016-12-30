# CSS > Le positionnement (2) > Exercice 1

Créer un site avec une bannière, un menu, 2 barres latérales (un sommaire, une publicité), un footer.
Le contenu principal de la page doit contenir 4 articles avec chacun une image.

`(header>h1{HEADER})+(nav>ul>li{Item $}*5)+(div.wrapper>(main>(article#article$>(h2{Titre $}+p>(img+{lorem100})))*4)+(aside.summary>(ul>(li>a[href="#article$"]{Article $})*4))+(aside.ads>h2{Publicité}))+footer>h3{FOOTER}`

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
