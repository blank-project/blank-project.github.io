# Les Métadonnées



---



Les métadonnées sont des _données_ sur des _données_ (DonnéeCeption !).

On peut citer par exemple :
- les champs **artiste**, **album**, etc ... d'un fichier mp3
- l'auteur d'un article
- la taille d'un fichier, son extension ...
- la date et la position géographique d'une photo


***


## `<head>` et les métadonnées

Jusqu'à présent, on a beaucoup travaillé dans le `<body>` de la page, ou l'on écrit le contenu (les données).

On va maintenant voir comment écrire des métadonnées.

Elle se placent dans la balise `<head>`.


***


### `<title>`

On l'a déja vue, la balise `<title>` sert à afficher le titre de la page.

Celui-ci s'affiche dans la fenêtre ou l'onglet de votre navigateur.

```
<title>
  _blank, Formation au Développement Web Gratuite, Paris
</title>
```


***


### `<meta>`

La balise `<meta>` définit des métadonnées génériques pour la page.

`<meta name="nom" content="valeur">`

On peut en citer 3 principale :
- **author** :  l'auteur du document
- **keywords** : les mots-clés décrivant le document.
- **description** : la description du document.


***


### L'Encodage des Caractères

`<meta charset="UTF-8">`

L'attribut **charset** de la balise `<meta>` définit l'encodage des caractères (Charset).

Toutes les informations sur un ordinateur sont stockées sous forme de 0 et 1 (on appelle ça un bit).

Un octet représente 8 bits (soit 256 valeurs).

L'encodage des caractères est une sorte de dictionnaire qui permet de traduire des bits en lettres ou symbole.

Note: Essayer d'expliquer un peu la base binaire (pourquoi 8 bits ça fait de 0 à 255).


***


Il en existe plusieurs, qui prennent en charge plus ou moins de caractères
- ASCII (7 bits, 128 valeurs).
- ISO-8859-1 (8 bits, 256 valeurs).
- UTF-8 (1 à 4 octets)

Si on affiche une page en utilisant le mauvais encodage, certains caractères peuvent ne pas s'afficher correctement.

Note: Faire une démo.


***


### `<style>`

La balise `<style>` nous permet de définir du style CSS.

Ce style ne sera appliqué que pour la page courante.

```
<style>
On saura bientôt quoi mettre ici !
</style>
```

En général, pour ajouter du CSS, on utilisera plutôt la balise `<link>`.


***


### `<link>`

Un lien vers une ressource externe, typiquement une feuille de style CSS ou une icône.

```
<link rel="stylesheet" href="/style.css" type="text/css">
<link rel="icon" href="/favicon.ico" type="image/x-icon">
```

L'attribut **rel** permet de définir le type de ressource externe.


***


### `<script>`

La balise `<script>` permet de définir ou lier un script JavaScript.

Cela nous permettra d'éxecuter du code JavaScript.

On verra qu'on peut également ajouter des balises `<script>` ailleurs.


<!-- TODO  Le réferencement, balise meta robots, robots.txt, sitemap ... -->
