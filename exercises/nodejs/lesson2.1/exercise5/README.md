# Créer une API fournissant des url d'images

## 1. Etape 1 : Lister les fichiers dans un dossier :

Créer une application nodejs qui liste les fichiers dans le dossier courant.

## 2. Etape 2 : Envoyer cette liste en réponse HTTP

Utiliser le code écrit précédemment dans une application express.
Lorsque l'utilisateur demande la page d'index, une réponse JSON de la liste des fichiers dans le dossier lui est donné.

## 3. Etape 3 : Créer un dossier contenant des images / GIF

Créer un dossier 'images' contenant quelque images / GIF. Lorsque l'utilisateur demande la page d'index, lister les fichiers dans ce nouveau dossier.

## 4. Etape 4 : Donner la réponse sous forme JSON

Travaillons la réponse générée à l'étape précedente. La réponse donnée doit etre sous le format JSON. Et l'indiquer à l'utilisateur dans la requete.

## 5. Etape 5 : Utiliser un package pour servir les images via express

Utiliser un package pour que les images soient accessibles via une URL comme : [localhost:3000/images/test.jpg](localhost:3000/images/test.jpg)

## 6. Etape 6 : Afficher l'url de chacun des fichiers disponibles

Modifier la réponse pour que chacune des url de fichier affichent l'adresse où ils sont accessibles.
