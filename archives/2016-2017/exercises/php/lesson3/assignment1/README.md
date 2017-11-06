# PHP > Lesson 3 > Assignment 1

Vous devez afficher un tableau contenant 100 éléments sur plusieurs pages.

- Le tableau est contenu dans `$data`.
- Vous pouvez voir la structure des données dans `data.php`
- Le script `index.php` doit utiliser un paramètre `page` et `count`.
- `page` indique le n° de page
  - `page=0` indique la première page.
  - Si `page` n'est pas défini, la valeur par défaut est 0.
- `count` indique le nombre d'élément par page.
  - Si `count` n'est pas défini, sa valeur vaut 15.
- Vous ne devez modifier QUE le fichier `index.php`, et normalement uniquement à l'interieur des balises `tbody` et `tfoot`.


## Exemple
`index.php?page=0&count=20` affiche les élements 0 à 19
`index.php?page=2&count=10` affiche les élements 20 à 29

## Bonus
Créer des liens de navigation de page en page (page suivante, page précédente) dans le footer de la page.

## Bonus 2
Créer des liens pour aller directement à une page avec un n° donné.

## Ressources
- [La fonction array_slice](http://php.net/manual/fr/function.array-slice.php)
- [$_GET](http://php.net/manual/fr/reserved.variables.get.php)
