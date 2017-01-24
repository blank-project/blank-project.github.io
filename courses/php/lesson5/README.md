# La Programmation Orientée Objet



---



[La programmation orientée objet] consiste en la définition et l'interaction de briques logicielles appelées **objets**.  
Un objet représente un concept, une idée ou toute entité du monde physique, comme une voiture, une personne ou encore une page d'un livre.  
Il possède une structure interne et un comportement, et il sait interagir avec ses pairs.  
Il s'agit donc de représenter ces objets et leurs relations.  
L'interaction entre les objets via leurs relations permet de concevoir et réaliser les fonctionnalités attendues, de mieux résoudre le ou les problèmes.  

Wikipédia



---



## Qu'est ce que c'est ?

La Programmation Orientée Objet (POO) est un paradigme, c'est à dire une manière de développer et structurer un programme.

Elle se base sur deux concepts fondamentaux : les **classes** et les **objets**.

Le comportement et les relations entre les objets vont définir l'éxécution du programme.

Il existe de nombreux langages permettant de faire de la POO, dont PHP.



---



## Les classes

Un classe définit les **attributs** et les **méthodes** d'un objet.

Les attributs d'un objet représentent son état.

Les méthodes sont des fonctions qui sont appelées sur l'objet, qui définissent son comportement.


***


Exemple :
Une classe Voiture possède un attribut `vitesse` et une méthode `accelerer()`.

Quand on appelle la méthode `accelerer()`, la valeur de l'attribut `vitesse` augmente.



---



## Les objets

On peut créer des objets à partir d'une classe.

C'est ce qu'on appelle l'_instantiation_.

Les objets créés à partir d'une classe sont appelées **instances** des cette classe.


***


Exemple :
- La  classe _Livre_ possède les instances _Harry Potter 1_, _Le Petit Chaperon Rouge_ ...
- Une classe _Professeur_ possède les instances _Marin_, _Erwan_, _Paulin_ ...



---



## En PHP

Pour définir une classe, on utilise le mot-clé `class`.

En général, on définit une classe par fichier, et on inclut ces fichiers dans le script PHP.

```
<?php

  class MaClasse
  {
    // Attributs et Méthodes  
  }

?>
```


***


### Définir des attributs et des méthodes

Un humain a un prénom et peut dire bonjour :

```
class Humain
{
  public $prenom;

  public function hello()
  {
    echo "Je m'appelle " . $this->$prenom;
  }
}
```

(Presque) Comme en Javascript, `$this` représente l'objet sur lequel on appelle la méthode.



---



## Instancier des objets

On a définit une classe, mais maintenant, que va-t-on en faire ?

L'utiliser !

Pour cela, on doit instancier des objets en utilisant l'opérateur `new`.

```
include(Humain.php);
$swagman = new Humain();
```



---



## Accéder aux attributs et aux méthodes

Pour accéder aux attributs et aux méthodes, on utilise l'opérateur `->`.

```
include(Humain.php);
$human = new Humain();
$human->$prenom = 'Teuse';
$human->hello(); // Je m'appelle Teuse
```

***


### Visibilté et encapsulation

Les attributs et méthodes peuvent être privés (`private`) ou public (`public`).

On déclare toujours les attributs privés en général.

Un attribut privé n'est accessible que dans la définition de la classe.


***


Cela permet l'**encapsulation** : on masque le fonctionnement interne de l'objet.

On peut donc changer sa représentation interne sans impacter le code qui l'utilise.

Ex : une fonction `getAge()` pourrait retourner un attribut `$age` ou le calculer à partir de la date de naissance.



---



### Accesseurs et mutateurs

Si les attributs sont privés, on va devoir définir des méthodes publiques pour :
- accéder à l'attribut (_getter_ ou _accesseur_).
- modifier la valeur de l'attribut (_setter_ ou _mutateur_).




***


```
  private $prenom;

  public function setPrenom($prenom)
  {
    $this->$prenom = $prenom;
  }

  public function getPrenom()
  {
    return $this->$prenom;
  }
}
```


***


Cela permet notamment :
-  de valider la valeur que l'on donne à un attribut.
-  d'empêcher la modification de l'attribut (si l'on ne crée pas de mutateur).




---


## Le constructeur

Pour créer directement un objet dans un état donné, on utilise un **constructeur**.

Celui-ci va nous permettre d'initialiser les variables.

Il se nomme toujours `__construct`.

```
// Un constructeur
public __construct($prenom) {
  $this->$prenom = $prenom;
}
```
