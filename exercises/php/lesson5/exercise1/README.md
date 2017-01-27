# PHP > Lesson 5 > Exercise 1

- Créer un dossier **<nom du jeu>** dans les _htdocs_.
- créer une classe Personnage dans un fichier
      <nom du jeu>/personnage.php
- donner les attributs suivants au personnage :
  * nom
  * pv (points de vie)
  * pa (points d'attaques)
Ils doivent être private.

- Ecrire un getter par attribut, aucun setters
- Ecrire un constructeur qui prend trois arguments ($nom, $pv, $pa)

- Dans une autre page php, <nomdujeu>/index.php
    * `0`
    * créer deux instances de personnages avec des attributs différents
    * $Superman = new Personnage("Super Man", 100, 20);
- Annoncer les deux combatants : "Combat de xxx vs xxx"
  (en utilisant getName() des deux instances)



---



- Ecrire une méthode public `estVivant()` qui renvoit `true` si le
personnage est en vie, `false` s'il est mort
- Ecrire une méthode public `causerDommage($degats)` qui
enlève des PV au personnage
- Ecrire une méthode public `attaquer($personnage)` qui cause
  `$personnage` le nombre de points de dégats égal aux points
  d'attaques.

```
public function causeDommage($degats) {
  $this->pv -= $degats;
}
```

```
$Paulin->attaquer($Marin);
```



---



- Ecrire une fonction `combat(personnage1, personnage2)` qui fait se battre les deux personnages jusqu'à ce qu'un des deux meure. Elle retourne le vainqueur.
- Utiliser la fonction `echo` pour voir les différentes étapes du combat : annonces, attaques respectives, fin du combat
- Tirage au sort du premier personnage qui attaque en utilisant un fonction `tirerAuSort(personnage1, personnage2)`
