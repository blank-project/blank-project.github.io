# Bases de PHP

![ElePHPant Logo](img/elephpant.png)



---



## Variables

Pour déclarer une variable en PHP on préfixe son nom par `$`.

```
$test = "Coucou";
```



---



## Types

Comme JavaScript pour les types primitifs :
 - Chaînes de caractère (`string`)
 - Nombres (`int` et `float`)
 - Booléens (`bool`)
 - Null



---



## Types

 ```php
 <?php
$test = "Coucou";
$age = 22;
$blank = true;
$nothing = null;
?>
```



---




## Commentaires

Comme en JavaScript, on dispose de commentaires sur une seule ligne :
```
// Commentaire
```
ou sur plusieurs :

```
/* Mon commentaire commence ici
Continue
et s'arrête ici ! */
```



---



## Opérations

On dispose de toutes les opérations sur les nombres que l'on connaît : `+`, `-`, `*`, `/`, `%`.

```php
<?php
echo 2 * 2 + 9 / 3 - 1;
// Affiche 6
?>
```



---



## Opérations

On peut remplacer directement les variables dans un chaîne de caractères :

```php
<?php
$what = "_blank";
echo "$what is cool !";
// Affiche "_blank is cool"
?>
```

/!\\ Cela ne marche qu'entre double-quotes.  
Pour concaténer des chaînes de caractère, on utilise `.`.

```php
<?php
$what = "_blank";
echo $what . ' is cool !';
?>
```



---



## Tableaux

Comme en JavaScript, on dispose de Tableaux.

On les crée grâce à la fonction `array()`.

Ils s'utilisent comme en JavaScript.

 ```php
<?php
$test = array("_blank", "is", "cool");
$test[2] = "super cool";
echo $test[2];
?>
```



---



## Tableaux associatifs

On peut aussi créer des _tableaux associatifs_.

C'est l'équivalent des objets en JavaScript.

```php
<?php
$test = array(
  "name" => "_blank",
  "cool" => true,
  "age" => 2
);
echo $test['name'] . ' is cool ? ' . $test['cool'];
?>
```



---



## Structures de contrôle

Les conditions et les boucles s'écrivent comme en JavaScript.

On dispose des mêmes opérateurs : `<`, `>`, `<=`, `>=`, `==`, `&&`, `||`, `!`.



---



## Structures de contrôle

Dans une condition ou une boucle, on peut fermer la balise `php` pour éviter d'avoir à utiliser tout le temps `echo`.

```php
<?php if($user != null) { ?>
 <h1>Connexion réussie</h1>
 <p>Bienvenue, <?php echo $user; ?> !</p>
<?php } else { ?>
  <h1>Connexion échouée</h1>
<?php } ?>
```


***


On peut écrire cela de manière plus concise :
```
<?php if($user != null) : ?>

<?php else : ?>

<?php endif ?>
```
On a pas besoin de mettre des blocs `{ }`.
Il faut terminer la condition par `endif`.


---



## Structures de contrôle

La boucle `foreach` permet de parcourir facilement un tableau ou un tableau associatif.

```
<?php
$test = array("name" => "_blank", "cool" => true);
foreach ($test as $value) {
  echo $value;
}
foreach ($test as $key => $value) {
  echo $key . ' -> ' . $value;
}
?>
```



---



## Fonctions

Pour créer des fonctions, c'est (encore) comme en JavaScript.

En revanche, on ne peut pas mettre des fonctions dans des variables.

```php
<?php
function sayHelloTo($name) {
  echo 'Hello' . $name . ' !';
}
?>
```



---



## Fonctions

Il existe plein de fonctions prédéfinies en PHP.

Se reporter à la [CheatSheet](https://github.com/blank-project/_blank/blob/master/cheatsheets/php.md).



---



## Inclure des Pages

Grâce à PHP, on peut inclure des fragments de page, grâce aux fonctions `include` et `require`.

(Plus besoin de copier-coller le menu sur toutes les pages !).

```php
<?php
include("test.php");
require("fragments/menu.php");
?>
```
`require` génère une erreur si le fichier n'est pas trouvé.


---


## Exercice d'application

- Reprendre le projet des vacances et y extraire une partie qui se répète dans toutes les pages (le menu par exemple)
- Mettre cette partie dans un fichier HTML à part
- Utiliser PHP et la fonction `require` pour éviter de répéter cette partie partout
- Ne pas oublier de changer les extensions des fichiers qui utilisent PHP !
