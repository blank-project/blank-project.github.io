## SQL : Groupes, Ordres et Aggrégats



---



En plus de nous permettre de stocker des données, SQL va nous permettre de manipuler ces données de manières très puissantes.

On va pouvoir les trier, les regrouper, en aggréger certaines caractéristiques.

Dans ce cours, on suppose l'existence d'une table _users_ qui possède les colonnes suivantes : _nom_, _prenom_, _age_, _email_, _city_ et _postal\_code_.



---



## Les fonctions

En SQL, on peut utiliser des fonctions qui manipulent les données sans les modifier.

- `CONCAT()` : concatène des chaînes de caractère.
- `UPPER()` / `LOWER()` : mets des chaînes de caractères en majuscule / minuscule.
- `REPLACE()` : remplace des caractères dans une chaîne.
- ...


***

Concatène le nom et le prénom
```
SELECT CONCAT(nom, ' ', prenom) FROM users
```

Remplace le "@" par " at ""
```
SELECT REPLACE(email, '@', ' at ') FROM users
```



---



## Les fonctions d'aggrégats

Les fonctions d'aggrégats permettent de réaliser des opérations mathématiques sur une colonne :
- `COUNT()` : compte le nombre de ligne
- `SUM()` : retourne la somme d'une colonne numérique
- `MAX()` : retourne la valeur maximale d'une colonne numérique
- `MIN()` : retourne la valeur minimale d'une colonne numérique
- `AVG()` : retourne la valeur moyenne d'une colonne numérique



---



## Les groupements

Les fonctions d'aggrégats sont utiles, mais elles prennent tout leur sens quand on réalise des groupements.

Pour regrouper des lignes en fonction de la valeur d'une colonne, on utilise la clause `GROUP BY`.

On ne peut alors récupérer que les données regroupées ou aggrégées.

Les données aggrégées le sont alors par groupe.



***



Exemple :
Pour compter les utilisateurs ayant le même code postal :
```
SELECT postal_code, count(*) FROM users GROUP BY postal_code
```



---



## Ordre de tri

On peut également utiliser SQL pour trier les données.

Pour cela, on utilise la clause `ORDER BY`.

Pour spécifier l'ordre on utilise les mots clés `ASC` (croissant, par défaut) ou `DESC` (décroissant).



***


Pour trier nos utilisateurs par nom puis prénom.
```
SELECT * FROM users ORDER BY nom, prenom
```

Pour trier nos utilisateurs par âge décroissant.
```
SELECT * FROM users ORDER BY age DESC
```


***


On peut également trier par résultat d'une fonction d'aggrégat.

Pour afficher les villes de nos utilisateurs par âge moyen croissant.
```
SELECT city FROM users GROUP BY city ORDER BY AVG(age)
```



---



## Les Alias

En SQL, on peut donner un alias à un résulat calculé.

Cela permet de créer une colonne virtuelle que l'on peut réutiliser.

Pour cela, on utilise le mot clé `AS`.

```
SELECT city, AVG(age) AS age_moyen FROM users GROUP BY city ORDER BY age_moyen
```



---



## Filtrer les groupes

La clause `HAVING` permet de filtrer les groupes vérifiant une condition.

(En fait, comme `WHERE`, mais pour un groupe).


***

Pour séléctionner les villes dont la moyenne d'âge est supérieure à 18 ans :

```
SELECT city FROM users GROUP BY city HAVING AVG(age) > 18
```
