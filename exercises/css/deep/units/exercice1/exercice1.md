# CSS > Approfondissement > Unités CSS > Exercice 1

* Créez une page en html contenant trois images dans une div.

  * La src de la première doit être une image en ligne.
  * La src de la seconde doit être une image contenue dans le mm dossier que votre fichier html.
  * La dernière doit être contenue dans le dossier Images de votre utilisateur.

* Votre feuille de style css devra ếtre contenue dans un dossier "css" contenu lui même dans un dossier "style" qui sera dans le dossier contenant votre html. (Inception)

* Une fois que c'est fait, on va donner une taille (la même) avec height à chacune de vos images.
* La taille de la première image devra être en px, celle de la seconde en % et celle de la troisième en vh. Partons sur 50, on aura donc 50px, 50% et 50 vh .

* Observez la différences entres les résultats de chaque image.

* Mettez ensuite le site en format mobile et Observez ce que cela donne et les changements selon
l'unité utilisée.

* Pour les courageux vous pouvez faire en sorte que les images ne dépassent pas du cadre en format mobile avec les media Queries.
* Pour régler les problèmes de différences de rendu sur mobile  par rapport a celui de votre navigateur ajoutez la balise :
`<meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no">`
dans le head .
* Ça ne fera pas le responsive a votre place mais vous évitera de mauvaise surprises si vous consultez votre site sur mobile.

* Pour les curieux, voici une explication : https://www.alsacreations.com/article/lire/1490-Comprendre-le-Viewport-dans-le-Web-mobile.html

Bon, c'est un peu fouillis tout ça comme organisation !

* Dans le dossier contenant votre fichier html, créez nouveau dossier assets, dans lequel vous déplacerez le dossier style. Dans "style", en plus de "css" créez un dossier "images" et mettez toutes les images du site dedans.

* Reliez bien les images et la feuille de style dans votre code, testez si tout fonctionne.
