# Les Formulaires

Les formulaires sont des éléments très importants en HTML.

Ils vont nous permettre de transmettre des valeurs à un serveur !



---



## Définir un formulaire

Pour définir un formulaire, on utilise la balise `<form>`.

Elle va contenir des _élements de formulaire_ (ou _champs_):
- Champs texte
- Cases à cocher
- Listes déroulantes
- Sélecteurs de fichiers
- ...



---



## Les éléments de formulaire

Tous les éléments de formulaires possèdent :
- un attribut **name**.
- une valeur.

Ce sont les données qui vont être transmises au serveur.


***


Ils sont souvent définis grâce à la balise `<input>` et son attribut **type**.

On peut leur donner un libellé grâce à la balise `<label>` et son attribut **for**.

<label for="checkbox">Libellé</label><input name="checkbox" id="checkbox" type="checkbox" />


```
<label for="checkbox">Libellé</label>
<input name="checkbox" id="checkbox" type="checkbox" />
```


Note: Parler du focus, et le fait que cliquer sur un label donne le focus à l'élément associé.


***


On peut regrouper les `<input>` en groupes thématiques grâce à la balises `<fieldset>`.

On peut donner un libellé à un groupe grâce à la balise `<legend>`.

<fieldset>
  <legend>Identifiants</legend>
  <input type="text" placeholder="Login" /><br />
  <input type="text" placeholder="Password" />
</fieldset>

```
<fieldset>
  <legend>Identifiants</legend>
  <input type="text" placeholder="Login" /><br />
  <input type="text" placeholder="Password" />
</fieldset>
```



---



### Les différents types de champs



---



### Les champs texte

<input type="text" value="YOLO" placeholder="Test"/>

```
<input type="text" value="YOLO" placeholder="Test"/>
```

Attributs :
- **value** : la valeur à envoyer au serveur, uniquement si elle est cochée.
- **placeholder** : le texte qui s'affiche quand le champ est vide.


***


### Les cases à cocher

<input type="checkbox" checked />

```
<input type="checkbox" checked />
```

Attributs :
- **checked** : définit si elle est cochée ou non.
- **value** : la valeur à envoyer au serveur, uniquement si elle est cochée.


***


### Les boutons radio

Les boutons radio permettent de sélectionner une valeur parmi d'autres.

<input type="radio" name="blank" id="yolo" value="yolo" /><label for="yolo">YOLO</label><input type="radio" name="blank" id="swag" value="swag" checked /><label for="swag">Swag</label>

```
<input type="radio" name="blank" id="yolo" value="yolo" /><label for="yolo">YOLO</label>
<input type="radio" name="blank" id="swag" value="swag" checked /><label for="swag">Swag</label>
```

Attributs :
- **checked** : définit la valeur sélectionnée.
- **value** : la valeur à envoyer au serveur, uniquement si elle est cochée.



***


### Les champs cachés

Ils permettent d'envoyer des valeurs qui ne sont pas affichés à l'utilisateur.

Attention, on peut toujours modifer le HTML pour changer cette valeur.

<input type="hidden" name="jesuis" value="cache" />

```
<input type="hidden" name="jesuis" value="cache" />
```

Attributs :
- **value** : la valeur à envoyer au serveur.


***


### Les Boutons (1)

Pour définir un bouton, on utilise la balise `<input>`.

```
<input type="submit" value="Soumettre" />
<input type="reset" value ="Ré-initialiser" />
<input type="button" value="Un bouton"/>
```

Attributs :
- **value** : la valeur à envoyer au serveur.
- **type**
  - _submit_ pour soumettre le formulaire
  - _reset_ pour remettre toutes les valeurs à leur valeur initiale.


***


### Les Boutons (2)

On peut également utiliser la balise `<button>`.

La seconde est plus flexible (on peut utiliser du HTML comme contenu).

```
<button type="submit">Soumettre</button>
<button type="reset">Reset</button>
<button>Test</button>
```


***


### Les Listes Déroulantes

<select name="teacher">
  <option value="marin">Marin</option>
  <option value="erwan">Erwan</option>
</select>

```
<select name="teacher">
  <option value="marin">Marin</option>
  <option value="erwan">Erwan</option>
</select>
```


***


### Les zones de texte

<textarea name="textarea">Une zone de texte</textarea>

```
<textarea name="textarea">Une zone de texte</textarea>
```



---



## Transmettre les données

Quand on soumet un formulaire, les noms et valeurs de tous les champs vont être envoyés à une adresse définie.

Pour définir cette adresse, on utilise l'attribut **action** de la balise `<form>`.

On peut également définir la méthode d'envoi (POST ou GET), via l'attribut **method**.
