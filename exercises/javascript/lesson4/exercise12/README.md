## Conjugaison en Javascript

### Est-ce un verbe ?
Écrire une fonction `isVerbFirstGroup` qui prend un verbe en paramètre.
Cette fonction retourne `true` si le verbe est du premier groupe, `false` sinon.

Rappel : un verbe du premier groupe finit par *er* (sauf le verbe aller).  
Note : la fonction doit également retourner false si le paramètre n'est pas une chaîne de caractère.

Exemple
```javascript
isVerbFirstGroup("chanter"); // returns true
isVerbFirstGroup("aller"); // returns false
isVerbFirstGroup("voir"); // returns false
isVerbFirstGroup([ "voir" ]); // returns false (le paramètre est un tableau).
```

Références :  
- [Fonction  endsWith](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/String/endsWith)
- [Opérateur typeof](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Op%C3%A9rateurs/L_op%C3%A9rateur_typeof)

### Trouver le radical
Écrire une fonction `getRadical` qui prend un verbe en paramètre et retourne son radical.
Si le verbe n'est pas du premier groupe, elle retourne `null`.

Rappel : le radical d'un verbe est le verbe moins sa terminaison (*er* pour le premier groupe).

Exemple
```javascript
getRadical("chanter"); // returns "chant"
getRadical("aller"); // returns null
getRadical("voir"); // returns null
```

Références :  
[Fonction  substring](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/String/substring)

### Conjugaison à la première personne du présent
Écrire une fonction `conjuguer` qui prend un verbe en paramètre et le conjugue à la première personne (*je*).

Si le verbe n'est pas du premier groupe, elle retourne `null`.

Rappel : Pour conjuguer à la première personne, on écrit *je* + radical du verbe + *e*

Exemple
```javascript
conjuguer("chanter"); // returns "je chante"
conjuguer("aller"); // returns null
conjuguer("voir"); // returns null
```

### Conjugaison à toutes les personnes
Modifier la fonction `conjuguer` pour conjuguer à toutes les personnes.

Pour cela :
- Définir un nouveau paramètre `pronom`.
  - Il prendra une valeur entre 1 et 6, 1 = *je*, 2 = *tu*, etc ...
- Définir un tableau à six cases contenant les pronoms personnels.
- Définir un tableau contenant les marques de conjugaison au présent de l'indicatif pour les verbes du premier groupe.
- Pour tous les pronoms, concaténer le pronom, le radical et la terminaison.
- retourner le résultat sous forme de tableau.


Rappel :
- les pronoms personnels sont : *je*, *tu*, *il-elle*, *nous*, *vous*, *ils-elles*
- les terminaisons du présent sont *e*, *es*, *e*, *ons*, *ez*, *ent*.

Exemple
```javascript
conjuguer("chanter", 1); // returns "je chante"
conjuguer("chanter", 3); // returns "il-elle chante"
conjuguer("voir"); // returns null
```

### Conjugaison à toutes les personnes - 2
Modifier la fonction `conjuguer` pour conjuguer à toutes les personnes et retourner le résultat sous forme de tableau si le paramètre pronom n'est pas présent.

```javascript
conjuguer("chanter");
/* returns [
"je chante",
"tu chantes",
"il-elle chante",
"nous chantons",
"vous chantez",
"ils-elles chantent"
]
*/
```


### Améliorations
Revenir sur le code déjà écrit et proposer des améliorations pertinentes.

Exemple :
- Gérer les [exceptions ](http://la-conjugaison.nouvelobs.com/regles/grammaire/les-verbes-du-1er-groupe-130.php)
- Ajouter un nouveau groupe de verbes : le 2e groupe.
