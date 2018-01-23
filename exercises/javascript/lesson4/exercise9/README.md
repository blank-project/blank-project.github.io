## Calculer la monnaie nécessaire

Créer une fonciton qui prend en paramètre un entier.
* Écrire un programme qui affiche le nombre minimum de billets et de pièces nécessaire pour atteindre la somme de l'utilisateur passé en paramètre.
* Exemples :
  * Si l'utilisateur a rentré 3, on doit lui afficher 2€ + 1€.
  * Si l'utilisateur a rentré 32, on doit lui afficher 20€ + 10€ + 2€
  * Si l'utilisateur a rentré 561€, on doit lui afficher, 500€ + 50€ + 10€ + 1€
* La fonction retournera un objet de la forme suivante :
```
{
  500: 1,
  200: 0,
  100: 0,
  50: 1,
  20: 0,
  10: 1,
  5: 0,
  2: 0,
  1: 1
}
```
