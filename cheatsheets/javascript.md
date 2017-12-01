# CheatSheet JavaScript

## Base de JavaScript
- `//` : Commentaire (une ligne)
- `/* */` : Commentaire : (plusieurs lignes)
- `var var1 = "test";` : définit une variable _var1_ et lui donne la valeur `"test"`

## Array Methods
- `concat()` : fusionne 2 tableaux et en retourne une copie
- `indexOf()` : recherche un élement dans un tableau et retourne sa position
- `join()` : fusionne les élements d'un tableau en une chaîne de caractère
- `lastIndexOf()` : comme `indexOf()`, en partant de la fin du tableau
- `pop()` : retire le dernier élement d'un tableau et le retourne
- `push()` : ajoute un élement à la fin du tableau et retourne sa taille
- `reverse()` : inverse l'ordre des élements dans un tableau
- `shift()` : retire le premier élement d'un tableau et le retourne
- `slice()` : seléctionne des portions de tableau
- `sort()` : trie les éléments d'un tableau
- `splice()` : ajoute et/ou supprime des portions de tableau.
- `toString()` : retourne une représentation textuelle du tableau.
- `unShift()` : ajoute un élement au début du tableau et retourne sa taille
- `valueOf()` : Retourne la valeur primitive du tableau.
- `map()` : crée un nouveau tableau en appliquant la fonction fournie sur chaque élément du tableau.
- `filter()` : crée un nouveau tableau contenant uniquement les élements passant le test représenté par la fonction fournie.
- `every()` : teste si tous les élements du tableau passent le test représenté par la fonction fournie.
- `foreach()` : exécute la fonction fournie sur chaque élement du tableau.

## String Methods
- `charAt()` : retourne le caractère à l'index spécifié
- `charCodeAt()` : retourne le code du caractère à l'index spécifié
- `concat()` : fusionne une ou plusieurs chaînes de caractère et retourne le résultat (concaténation).
- `fromCharCode()` : Convertit les valeurs Unicode en chaînes de caractère.
- `indexOf()` : recherche une occurence dans la chaîne et retourne sa position
- `lastIndexOf()` : recherche une occurence dans la chaîne depuis la fin et retourne sa position
- `match()` : recherche une correspondance avec une Expression Régulière et la retourne.
- `replace()` : recherche une correspondance avec une Expression Régulière et la remplace.
- `search()` : recherche une correspondance avec une Expression Régulière et retourne sa position.
- `slice()` : extrait une portion de chaîne et la retourne.
- `split()` : sépare une chaîne en un tableau de sous-chaînes.
- `substr()` : extrait un nombre de caractère donné à partir d'une certaine position.
- `substring()` : extrait une sous-chaîne entre deux positions.
- `toLowerCase()` : convertit en minuscule.
- `toUpperCase()` : convertit en majuscule.
- `valueOf()` : retourne la valeur primitive d'un Objet String.

## Math Methods
- `abs(x)` : Returns the absolute value of x
- `ceil()` : Returns x, rounded upwards to the nearest integer
- `floor()` : Returns x, rounded downwards to the nearest integer
- `max(x,y,z,...,n)` : Returns the number with the highest value
- `min(x,y,z,...,n)` : Returns the number with the lowest value
- `pow(x,y)` : Returns the value of x to the power of y
- `random()` : Returns a random number between 0 (inclusive) and 1 (exclusive)
- `round(x)` : Rounds x to the nearest integer
- `sin(x)` : Returns the sine of x
- `cos(x)` : Returns the cosine of x
- `tan(x)` : Returns the tangent of x
- `asin(x)` : Returns the arcsine of x
- `acos(x)` : Returns the arccosine of x
- `atan(x)` : Returns the arctangent of x
- `log(x)` : Returns the natural logarithm (base E) of x
- `sqrt(x)` : Returns the square root of x

## Number Methods
- `toExponential(x)` : Converts a number into an exponential notation
- `toFixed(x)` : Formats a number with x numbers of digits after the decimal point
- `toPrecision(x)` : Formats a number to x length
- `toString()` : Converts a Number object to a string
- `valueOf()` : Returns the primitive value of a Number object

## Boolean Methods
- `toString()` : Converts a Boolean value to a string and returns the result
- `valueOf()` : Returns the primitive value of a Boolean object

## Global Methods
- `decodeURI()` : Décode une URI
- `decodeURIComponent()` : Décode un composant d'URI
- `encodeURI()` : Encode une URI
- `encodeURIComponent()` : Encode un composant d'URI
- `eval()` : Evaluates a string and executes it as if it was script code
- `isFinite()` : Determines whether a value is a finite, legal number
- `isNaN()` : Determines whether a value is an illegal number
- `parseFloat()` : Parses a string and returns a floating point number
- `parseInt()` : Parses a string and returns an integer
