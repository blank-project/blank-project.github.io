# Introduction à la programmation part. 2



***



## La dernière fois

- Logo sur https://inexorabletash.github.io/jslogo/
- Faire bouger la tortue
- Expressions
- Tests


***

## Rappels

- https://inexorabletash.github.io/jslogo/
- que fait le programme suivant?
```
forward 100
print "Bonjour!
print 2 + 2
```


***


## Rappels: déplacer la tortue


- effacer l'écran et faire dessiner un carré à la tortue.
- commandes utiles:
  - `forward 100`: avancer de 100 pas

  - `back 100`: reculer de 100 pas

  - `right 90`: tourner à droite de 90° 

  - `left 90`: tourner à gauche de 90° 

  - `clearscreen`: efface l'écran et ramène la tortue au centre

- cliquer sur "Run" ou CTRL+Enter pour éxécuter 


***


## Rappels: déplacer la tortue


- effacer l'écran et faire dessiner un carré à la tortue.

```
clearscreen
forward 100
left 90
forward 100
left 90
forward 100
left 90
forward 100
left 90
```

***

## Rappels: expressions

- une combinaison de valeurs et d'opérateurs qui produit une valeur
```
2
2 + 0.5
```
- on peut utiliser des parenthèses pour grouper les expressions:
```
(3 + 1) / 2
```

- opérateurs utiles: 
  - `+`, `-`: addition, soustraction
  - `*`, `/`: multiplication, division
  - et beaucoup d'autres


***

## Des valeurs particulières: `true` et `false`

- "vrai" et "faux" en Français
- "vrai" <=> 1 et "faux" <=> 0
- appelés Booleans (https://fr.wikipedia.org/wiki/Alg%C3%A8bre_de_Boole_(logique))
- le résultat de certaines expressions peut être "vrai" ou "faux":
```
true
false
1
0
0 = 1
2 + 2 = 4
1 > 2
"hello = "bonjour
```

***

## `true` et `false`

- opérateurs
  - `=`, `<>` : égal, différent

  - `>`, `<`: strictement supérieur, strictement inférieur

  - `>=`, `<=`: supérieur ou égal, inférieur ou égal

  - `not`, `and`, `or`: négation, et, ou 
    - par exemple: `and (1 > 0) (2 > 1)`
    
- un nombre différent de 0 est "vrai"
  

***

## Rappels: tests


```
ifelse [quelque_chose_qui_peut_etre_vrai_ou_faux]
[ce_qu_on_fait_si_c_est_vrai]
[ce_qu_on_fait_si_c_est_faux]
```

- Par exemple:

```
ifelse[true]
[print "oui]
[print "non]

ifelse[0 > 1]
[print "oui]
[print "non]
```


***


## User input

- `ifelse` sert à rien si on connaît déjà la réponse!
- `(readword "name?)`: afficher "name?" et retourner la réponse de l'utilisateur:
```
print (readword "name?)
```

***


## Tests: exercice

- demander à l'utilisateur si il parle français
  - si la réponse est "oui", imprimer "bonjour"
  - sinon, imprimer "hello"


***

## Tests: exercice

- demander à l'utilisateur si il parle français
  - si la réponse est "oui", imprimer "bonjour"
  - sinon, imprimer "hello"

```
ifelse[(readword "français?) = "oui]
[print "bonjour]
[print "hello]
```


***


## Tests imbriqués

- demander à l'utilisateur si il parle français
  - si la réponse est "oui", imprimer "bonjour"
  - sinon, lui demander si il parle espagnol
    - si la réponse est oui, imprimer "Hola"
    - si la réponse est non, imprimer "hello"

```
ifelse[(readword "français?) = "oui]
  [print "bonjour]
  [
  ifelse[(readword "espagnol?) = "oui]
    [print "hola]
    [print "hello]
  ]
```


***


## Tests

- `ifelse` sert à rien si on connaît déjà la réponse!
- `random 3`: choisir un nombre au hasard entre 0 et 3: 0, 1 ou 2

```
ifelse[random 2]
  [print "oui]
  [print "non]
```

***

## Tests: exercice (marche aléatoire)

- choisir 0 ou 1 au hasard
  - si 0, orienter la tortue vers -45° 
  - si 1, orienter la tortue vers +45° 
- avancer de 50 pas

- utiliser `setheading 45` pour orienter la tortue vers +45° 


***

## Tests: exercice (marche aléatoire)

- choisir 0 ou 1 au hasard
  - si 0, orienter la tortue vers -45° 
  - si 1, orienter la tortue vers +45° 
- avancer de 50 pas

```
ifelse[random 2]
  [setheading 45]
  [setheading -45]

forward 50
```

***

# Les boucles et les variables

***

## Les boucles


- permettent de répéter automatiquement une suite d'opérations
- premier genre de boucle en Logo: `repeat`

  ```
  repeat nombre_de_fois [
    ce_qu_il_faut_faire
  ]
  ```

- imprimer 5 fois "hello":

  ```
  repeat 5 [
    print "hello
  ]
  ```

- un passage dans la boucle s'appelle une "itération"


***

## Les boucles: repeat


- Utiliser `repeat` pour répéter l'exercice précédent (marche aléatoire) 50 fois
- Il suffit de mettre le code que vous avez déjà à l'intérieur d'une boucle


***

## Les boucles: repeat


- Utiliser `repeat` pour répéter l'exercice précédent (marche aléatoire) 50 fois
- Il suffit de mettre le code que vous avez déjà à l'intérieur d'une boucle

```
repeat 50[

  ifelse[random 2]
    [setheading 45]
    [setheading -45]

  forward 50
]
```

***

## Les boucles: repeat

- Utiliser repeat pour dessiner un carré
- Rappel: on avait dessiné un carré avec:

```
forward 100
left 90
forward 100
left 90
forward 100
left 90
forward 100
left 90
```

***

## Les boucles: repeat

- Utiliser repeat pour dessiner un carré

  ```
  repeat 4 [
  forward 100
  left 90
  ]
  ```

- Et pour dessiner un triangle:

  ```
  repeat 3[
    forward 100
    left 120
  ]
  ```

- Et pour dessiner un polygone à 13 côtés:

  ```
  repeat 13[
    forward 100
    left 360 / 13
  ]
  ```

***

## Les variables

- On peut donner un nom à un morceau de la mémoire de l'ordinateur
- (En Logo,) il faut aussi lui donner une valeur
- En logo, on utilise le mot-clé `make`: 

  `make "nom_de_la_variable valeur`

```
make "city "Paris
make "population 2240000
```

- Ça permet de retenir le résultat d'une expression, de faire communiquer les
  différentes parties d'un programme, de manipuler plus facilement les valeurs
  avec lesquelles on travaille.
 
 

***


## Les variables

- On peut accéder au contenu d'une variable avec `:`, et l'utiliser dans une
  expression:

```
make "city "Paris
print :city

make "price 13.5
print (120 / 100) * :price

make "step 100
forward :step
right 90
forward 2 * :step

make "side 30
make "surface (:side * :side)
print :surface
```

***

## Les variables: exercice

- Créez une variable qui va contenir la longueur du côté d'un triangle
  (choisissez le nom); donnez-lui une valeur entre 50 et 200
- Dessiner un triangle en utilisant cette variable
- Dessiner un triangle deux fois plus gros avec le même code, en changeant juste
  la valeur de la variable


***

## Les variables: exercice

- Créez une variable qui va contenir la longueur du côté d'un triangle 
  , dessiner un triangle en utilisant cette variable
  
```
make "side 150
```

```
repeat 3 [
  forward :side
  left 120
]
```
- Dessiner un triangle deux fois plus gros avec le même code

```
make "side (2 * :side)
repeat 3 [
  forward :side
  left 120
]
```

***


## Les variables: exercice

- On peut utiliser une variable comme argument de la boucle `repeat`
- Créer une variable `n_sides` et dessinez un polygone avec `n_sides` côtés
- Indice: à chaque itération il faut tourner de `360 / n_sides` et avancer

```
make "n_sides 6
make :side 100
repeat :n_sides [
forward :side
left 360 / :n_sides
]
```

***


## Plus de boucles: `for`

- Semblable à `repeat`, mais donne accès au numéro de l'itération (passage dans
  la boucle)
- on y accède avec une variable:

  ```
  for[nom_de_l_iterateur debut fin][
    ce_qu_il_faut_faire
  ]
  ```
  
- pour `i` allant de 0 à 15, imprimer `i`

  ```
  for [i 0 15][
    print :i
  ]
  ```

***


## boucle `for`: exercice

- Dessiner une spirale:
- pour `i` allant de 0 à 15,
  - avancer de `i / 10`
  - tourner de 6° 
  - imprimer `i`
  

***



## boucle `for`: exercice


- Dessiner une spirale:

- pour `i` allant de 0 à 200,

  - avancer de  `i / 10`
  - tourner de 6° 
  - imprimer `i`
  
    ```
    for [i 0 200][
      forward :i / 10
      right 6
      print :i
    ]
    ```

- répéter l'opération ci-dessus 20 fois avec une boucle (`for` ou `repeat`) pour
  faire un beau dessin
  
  

***


## Plus de boucles: `while`

- une boucle qui se répète tant qu'une condition est vraie (`true`)

- `while` = "tant que" en anglais

- imprimer les nombres de 0 à 15, cette fois en utilisant une boucle `while`:

  ```
  make "i 0
  while[:i < 15][
    print :i
    make "i (:i + 1)
  ]
  ```
  

***


## Boucle `while`

- attention: si la condition ne devient jamais fausse, que se passe-t-il?

```
while[true][
  forward 20
  right random 360
]
```

***


## Boucle `while`: exercice


- donner un calcul à faire à l'utilisateur
- tant qu'il n'a pas la bonne réponse, lui dire de recommencer


```
make "success false

while[ not :success ][

  make "a random 10
  make "b random 10
  ; for some reason whitespace around parentheses is important
  make "answer ( readword ( sentence :a "+ :b "? ) )

  ifelse[:answer = (:a + :b)]
  [make "success true]
  [print "non!]

]

print "bravo!
```

***
