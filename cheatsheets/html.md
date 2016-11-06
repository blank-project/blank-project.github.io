# Cheat Sheet HTML
 **HTML** (HyperText Markup Language) est le langage standard pour créer des pages web.  

# Métadonnées du document
- `<head>` : Contient les métadonnées du document. Un seul élement `<head>` par page.
- `<link>` : Un lien vers une ressource externe, typiquement une feuille de style CSS.
- `<meta>` : Un élement générique pour définir des métadonnées.
- `<style>` : Contient des informations de style interne, en CSS.
- `<title>` : Le titre de la page, qui s'affiche dans la barre de titre ou l'onglet du navigateur.

# Structure du contenu
- `<body>` : Représente le contenu du document, affiché dans le navigateur. Un seul élement `<body>` par page.
- `<footer>` : Représente le pied-de-page. Il contient en général les informations de copyright et/ou des liens vers des documents externes.
- `<header>` : Représente l'en-tête de la page. Il contient en général le logo, une bannière et menu du site.
- `<main>` : Réprésente le contenu principal de la page.
- `<h1>`, `<h2>`, `<h3>`, `<h4>`, `<h5>`, `<h6>` : Titres d'une section. `<h1>` est le plus grand et `<h6>` le plus petit.
- `<nav>` : Une section de page contenant des liens vers d'autres page ou partie de la page.
- `<aside>` : Définit du contenu placé à coté du contenu principal (par exemple une barre latérale).
- `<section>` : Spécifie une section (une partie d'un document).
- `<article>` : Spécifie une partie de contenu indépendante.

# Conteneurs et blocs
- `<div>` : Conteneur générique de type bloc. Utilisé pour grouper des élements dans un but de design.
- `<p>` : Représente un paragraphe.
- `<li>` : Représente un élement d'une liste. Doit avoir comme élement parent :
  - une liste ordonnée (`<ol>`).
  - une liste non-ordonnée  (`<ul>`).
- `<ol>` : Représente une liste d'éléments ordonnés.
- `<ul>` :  Représente une liste d'éléments non ordonnés.
- `<pre>` : Représente du texte pré-formatté.
- `<address>` : Définit les informations de contact pour l'auteur ou le propriétaire d'un document ou d'un article.
- `<hr>` : une ligne horizontale.

# Contenu Textuel
- `<span>` : Conteneur générique de type en-ligne. Utilisé pour grouper des élements dans un but de design.
- `<a>` : Un lien vers la page actuelle ou une autre page sur le Web.
- `<br>` : Un saut de ligne.
- `<code>` : Représente du code informatique.
- `<em>` : Indique un texte à mettre en avant (en général affiché en italique)
- `<strong>` : Indique qu'un texte est important (en général affiché en gras).
- `<s>` : Du texte représenté barré.
- `<i>` : Du texte représenté en italique.
- `<b>` : Du texte représenté en gras.
- `<u>` : Du texte représenté souligné.

# Tableaux
- `<table>` : Représente des données tabulaires.
- `<caption>` : Représente le titre d'un tableau.
- `<td>` : Définit une cellule d'un tableau.
- `<th>` : Définit une cellule d'en-tête.
- `<tr>` : Définit une ligne de cellules dans un tableau. Elles peuvent être un mélange de `<td>` et `<th>`.

<!--
# Forms
- `<button>` : Représente a clickable button
- `<datalist>` : Contains a set of `<option>` elements that represent the values available for other controls
- `<fieldset>` : Used to group several controls as well as labels (`<label>`) within a web form
- `<form>` : Représente the parent element of a web form in a document section
- `<input>` : Used to create interactive controls to accept data from the user
- `<label>` : Représente a caption for an item in a user interface. A control element can be placed inside a `<label>` element, or by using the for attribute
- `<legend>` : Représente a caption for the content of its parent `<fieldset>`
- `<optgroup>` : Creates a grouping of options within a `<select>` element
- `<option>` : Used to create a control representing an item within a `<select>`, an `<optgroup>` or a `<datalist>` element
- `<output>` : Représente the result of a calculation or user action
- `<select>` : Représente a control that presents a menu of options. The options within the menu are represented by `<option>` elements, which can be grouped by `<optgroup>` elements
- `<textarea>` : Représente a multi-line plain text editing control
-->

# Images et Multimédia
- `<img>` : Utilisé pour intégrer une image
- `<audio>` : Utilisé pour intégrer du contenu audio.
- `<video>` : Utilisé pour intégrer du contenu vidéo
- `<source>` : Un élement utilisé pour spécifier différentes sources de média pour les éléments `<audio>` et `<video>`
- `<track>` : Utilisé comme enfant des élements `<audio>` et `<video>`. Définit des sous-titres
- `<map>` : Définit un ensemble de zones cliquables sur une image.
- `<area>` : Définit une zone cliquable sur une image, potentiellement associée à un lien.

# Embedded Content
- `<iframe>` : Insère une autre page web dans la page courante.
- `<embed>` : Représente une point d'intégration pour une ressource externe ou du contenu interactif.
- `<object>` : Représente une ressource externe.
- `<param>` : Définit des paramètres pour `<object>`


# Scripts
- `<canvas>` : Utilisé pour faire du dessin via des scripts.
- `<noscript>` : Une section qui sera affichée si les scripts ne sont pas activés ou pas supportés.
- `<script>` : utilisé pour référencer ou inclure un script.
