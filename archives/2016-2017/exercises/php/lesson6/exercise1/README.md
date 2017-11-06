## PHP > Lesson6 > Exercise1

- Créez une page web `index.php` contenant deux liens, un vers une page `blog.php` et l'autre vers une page `submit.php`.

- Créez une base de donnée php_exercises

- Créez une table exercise1 contenant :
  - id : primary key not null auto increment
  - title : TINYTEXT 250 not null unique
  - content : MEDIUMTEXT not null

- Page partielle `_db.php` qui nous servira à nous connecter à la base exercise6. Elle sera inclue dans toutes les autres pages.

- La page `submit.php` contiendra un formulaire avec deux champs :
  - `title` : Text
  - `content` : TextArea

- Ce formulaire pointera sur cette même page, et elle sauvegardera en base de données si :
  - le titre fait au moins 3 caractères et moins de 255
  - le contenu fait au moins 250 caractères

- La page `blog.php` affichera les articles de blogs les uns à la suite des autres :
  - À vous de faire en sorte que ça soit joli !

- Bonus : Afficher les 5 premiers et permettre de voir les suivants avec le système de pages que l'on a vu.
