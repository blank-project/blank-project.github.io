# Node.js



---



## Introduction

Jusqu'à présent, nous avons toujours exécuté notre code JavaScript dans un navigateur.

Cependant, cela impose des limitations :
- Obligation d'inclure le JavaScript dans un fichier html
- Impossibilité d’accéder à certaines fonctions de l'ordinateur (système de fichier, réseau ...).



---



## Node.js ?



Node.js est une plate-forme logicielle permettant d'exécuter du JavaScript en dehors du Navigateur (_Runtime Environment_).

Il est basé sur le moteur JavaScript V8 utilisé dans Chrome.

![V8 Logo](v8logo.svg)


***


Concrètement, Node.js va nous permettre de créer de vrais programmes en JavaScript.

Ces programmes pourront accéder à des fonctionnalités plus poussées de l'ordinateur, comme :
- les informations sur l'OS
- les fichiers
- les utilitaires réseaux
- les processus
- ...



---



## Installation



Voir l'exercice 1.



---



## Hello World

Le Hello World est un programme de démonstration très simple affichant "Hello World !".

Il est utilisé pour donner un aperçu de la syntaxe d'un langage.

Nous allons réaliser le Hello World en Node.js dans l'exercice 2.



---



## Les paquets Node.js

Node.js dispose d'un écosystème de paquets qu'il est possible d'installer dans son application node.

Comme sous Linux, certains programmes ne peuvent fonctionner sans un ou plusieurs autres paquets, qu'on appelle *dépendances*.


***


### NPM


`npm` est un utilitaire en ligne de commande pour gérer des paquets Node.js.

- `npm init` : initialise une application
- `npm install <NAME> --save` : ajoute une dépendance au paquet courant.

Un paquet Node.js contient un fichier `package.json` qui définit le paquet et ses dépendances.


***


Les dépendances sont stockées dans le dossier `node_modules`.

Pour charger un paquet Node.js, on utilise la fonction `require` :

```
var http = require('my-module'); // Charge un module appelé "my-module".
```


***



# Voilà !

La CheatSheet Node.js est ici :
[Cheat Sheet Node.js](https://git.bellevillecitoyenne.fr/blank/_blank/blob/master/cheatsheets/nodejs.md)
