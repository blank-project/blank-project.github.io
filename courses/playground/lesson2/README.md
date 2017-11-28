# Utiliser le terminal part. 2
- Ecrire et exécuter des scripts
- De nouvelles commandes très utiles
- Combiner des commandes



***



## Retour sur le cours précédent
- À quoi sert le terminal / shell ?
- Quelques commandes vues ensemble ?



***



## Les scripts shell
- Les scripts sont des fichiers exécutables qui sont écrits avec le language d'un shell (pour nous *bash*)
- Ils doivent avoir comme première ligne `#!/bin/bash`
- On doit leur donner les droits d'exécution avec chmod
- Les commandes sont exécutées ligne par ligne (pour l'instant..)
- Ce qui se trouve derrière un `#` est un commentaire



---



## Écrire mon premier script

- Écrire le script suivant dans un fichier "bonjour_monde.sh"
```
#!/bin/bash
echo "Bonjour monde" # Pour dire bonjour
```
- Ajouter les droits d'exécution avec
```
chmod +x bonjour_monde.sh
```
- Exécuter le script :

```
./bonjour_monde.sh
```



***



## Récupérer des arguments
- Pour avoir des arguments dans un script on peut utiliser :
  - `$0` : Correpond à la commande
  - `$1` : Correpond au premier argument
  - `$2` : Au 2e, etc...
  - `$#` : le nombre d'arguments
- Dans `bonjour_monde.sh`, remplacer monde par le premier argument



---



## Script n°2 : rechercher dans ma vidéothèque
- Placer le fichier `films` dans un nouveau répertoire
- Il contient une liste de films, notre vidéothèque
- Pour chercher des films dedans on va utiliser la commande `grep` (globally search a regular expression and print)
- Pour connaître le nombre de films on va utiliser `wc` (word count)



***



## La commande grep
- Elle sert à chercher du contenu texte dans des fichiers : `grep "test" truc.txt`
- Elle possède des options qui la rende très utile:
    * -n : donne le numéro de ligne où a été trouvé le mot
    * -r : rend la recherche récusirve - à utiliser par exemple avec le fichier `.`
    * -i : ignore la casse (majuscules et minuscules)
    * -C <num ligne> : affiche des lignes avant et après pour donner un contexte
- Exemple :
```
grep -nri "a" .
grep -ni "star wars" ./films
```



***



## La commande wc
- Permet de compter le nombre de lignes, de mots, de caractères et d'octets dans un fichier
- Exemple :
```
wc -l ./films
```



***


## Script de recheche
- Écrire un script `rechercher_film.sh`
- Il doit permettre de :
    1. dire combien de films sont présents dans la vidéothèque
    2. Rechercher les films qui contiennent le premier argument passé au script



---



## Script n°3 : ajouter un film
Avant de pouvoir ajouter des films, on va apprendre à :
- faire des redirections
- combiner des commandes shell



***



## Les redirections
- Une redirection permet de rediriger l'entrées ou la sortie d'une commande
- La sortie d'une commande, c'est ce qu'elle renvoie dans le shell : output
- L'entrée d'une commande, ce sont les paramètres qu'on lui donne : input
- Nous allons voir des exemples où elles sont pratiques



***



## Les opérateurs **>** et **>>**
- Ils permettent de rediriger la sortie vers un fichier
- Exemple :
```
ll > test.txt
```
- `>` remplace le contenu du fichier, `>>` ajoute le contenu à la suite



***



## L'opérateur **<**
- Il permet de rediriger le contenu d'un fichier vers l'entrée d'une commande
- Exemple :
```
grep -ni "truc" < index.html
```



***



## Exécuter plusieurs commandes en une
- Les opérateurs `&&` et `;` permettent d'exécuter à la suite plusieurs commandes sur la même ligne
- Exemples :
```
cd && mkdir test && cd test && touch README.md
touch test ; touch test2; touch test3
```
- la différence entre `&&` et `;` ? `&&` passe à la commande suivante uniquement si l'acutelle s'est bien terminée



***



## L'opérateur **|**
- Aussi appelé l'opérateur pipe (païpe)
- Redirige la sortie d'une commande vers l'entrée d'une autre
- Exemples :
```
ls -a | sort -r
ps aux | grep /bin
man ls | grep -C4 -i "\-a"
```



***



## Retour au script
- Écrire un script `ajouter_film.sh`
- Il doit permettre d'ajouter le premier argument à la fin du fichier film
- Indice : on peut utiliser echo et une redirection



***



## Les commandes head et tail
- Elles servent à voir le début et la fin d'un fichier
- Options utiles :
    * -n <nombre> : le nombre de ligne à afficher
    * -F : pour tail, permet et d'attendre les changements faits au fichier et de les afficher
- Exemple :
```
head -n3 films
tail -F -n10 films
```
- Faire un tail -f et exécuter ajouter_film.sh en parallèle



---



## La prochaine fois : introduction à la programmation
Avec des scripts utilisant des :
- variables
- conditions
- boucles
