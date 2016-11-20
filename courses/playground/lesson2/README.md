# Utiliser le terminal part. 2
- De nouvelles commandes très utiles
- Combiner des commandes
- Ecrire et exécuter des scripts



---



## Retour sur le format d'une commande



---



## La commande grep
- Elle sert à chercher du contenu texte dans des fichiers : `grep "test" truc.txt`
- Elles possèdent des options qui la rende très utile:
    * -n : donne le numéro de ligne où a été trouvé le mot
    * -r : rend la recherche récusirve - à utiliser par exemple avec le fichier `.`
    * -i : ignore la casse (majuscules et minuscules)
    * -C <num ligne> : affiche des lignes avant et après pour donner un contexte
- Exemple :
```
grep -nri "a" .
```



---



## La commande find
- Aide à la recherche de fichiers
- Exemple :
```
find .
```
- On reviendra plus tard sur cette commande



---



## Les commandes head et tail
- Elles servent à voir le début et la fin d'un fichier
- Options utiles :
    * -n <nombre> : le nombre de ligne à afficher
    * -F : pour tail, permet et d'attendre les changements faits au fichier et de les afficher
- Exemple :
```
head -n3 test.txt
tail -F -n1000 test.txt
```



---



## Quelques options très pratiques
- `cd -` : permet de revenir au précédent dossier
- `ls -lrt` : affiche les derniers fichiers modifiés



---



## Combiner des commandes
Pour nous permettre d'effectuer plus d'opérations, il est possible de combiner les commandes shell



---



## Exécuter plusieurs commandes sur la même ligne
- Les opérateurs `&&` et `;` permettent d'exécuter à la suite plusieurs commandes sur la même ligne
- Exemples :
```
cd && mkdir test && cd test && touch README.md
touch test ; touch test2; touch test3
```
- la différence entre `&&` et `;` ? `&&` passe à la commande suivante uniquement si l'acutelle s'est bien terminée



---



## Les redirections
- Une redirection permet de rediriger l'entrées ou la sortie d'une commande
- La sortie d'une commande, c'est ce qu'elle renvoie dans le terminal
- L'entrée d'une commande, ce sont les paramètres qu'on lui donne
- Attention, les redirections ne fonctionnent pas avec toutes les commandes, mais nous allons voir de nombreux exemples où elles sont très utiless



---



## Les opérateurs **>** et **>>**
- Il permet de rediriger la sortie vers un fichier
- Exemple :
```
ll > test.txt
```
- `>` remplace le contenu du fichier, `>>` ajoute le contenu à la suite



---



## L'opérateur **<**
- Il permet de redirriger le contenu d'un fichier vers l'entrée d'une commande
- Exemple :
```
grep -nri -C6 "truc" < index.html
```



---



## L'opérateur **|**
- Aussi appelé l'opérateur pipe (païpe)
- Redirige la sortie d'une commande vers l'entrée d'une autre
- Exemples :
```
find . | grep -i "index"
ll | grep "fichier"
man ls | grep -C4 -i "\-a"
```



---



## Les scripts shell
- Les scripts sont des fichiers exécutables qui sont écrits avec le language du shell
- Ils doivent avoir commen première ligne `#!/bin/bash`
- On doit leur donner les droits d'exécution (avec chmod +x)
- Pour avoir des arguments dans un script on peut utiliser :
  - `$0` : Correpond à la commande
  - `$1` : Correpond au premier argument
  - `$2` : Au 2e, etc...



---



## Atelier écrire un script
Créer un script pour initialiser un répertoire projet contenant :
- Crée un dossier ayant pour nom le premier argument passé au script
- Un fichier `index.html`
- Un dossier `assets`
- Ayant initié le répertoire `git`
- Ayant initié un `README.md` avec pour contenu : `# Nom_du_dossier`
- Ajouter ces fichiers à l'index git
- Faire le premier commit avec comme message : `"first commit"`



---



## La prochaine fois : scripts complexes
- Les variables
- Les conditions
- Les boucles
