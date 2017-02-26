# Cheat Sheet Git

## Obtenir de l'aide
Obtenir de l’aide sur la commande _verb_

* `git help verb`
* `git verb --help`
* `man git-verb`

## Configuration
`git config [--global] {key} “{value}”`
Écrire une propriété _key_ avec pour valeur _value_ dans la configuration du repository courant.
Si l'option _--global_ est présente, la propriété est valide est écrite la configuration globale.

`git config --list`
Lister les propriétés de la configuration

`git config {key}`
Obtenir la valeur d’une propriété

### Propriétés utiles
- *user.name* : le nom d'utilisateur
- *user.email* : l'email de l'utilisateur

Les deux propriétés précédentes sont nécessaires pour effectuer un commit.

- *core.editor* : définit l'éditeur à utiliser pour les messages de commit notamment.

## Créer / gérer un répertoire
* `git status`
Affiche le statut du répertoire local.  
Voir `git status --help` pour plus d’infos, en particulier sur l’option -s/--short.

* `git init`
Initialise un nouveau répertoire à l’emplacement courant.  
Note : les fichiers du dossier peuvent être ajouter ensuite via **add** et **commit**.

* `git clone {url} [{folder_name}]`
Importe le répertoire à l’adresse _url_ dans le dossier *folder_name*.

* `git fetch`
Récupère les données du répertoire distant.

* `git pull`
Récupère les données du répertoire distant et les incorpore à l'espace de travail (`git fetch` + `git merge`).

* `git push {repository} {branch}`
Envoie les données locales sur le répertoire distant


### Liste d'exclusion
Les fichiers _.gitignore_ contiennent les listes d’exclusion.
Ce sont de fichiers qui seront systématiquement ignorés par Git.
Les lignes commençant par **#** sont ignorées.

## Gérer les fichiers
### Ajouter des fichiers
* `git add [files]`
Ajoute un ou fichier à la prochaine transaction à commiter (stage file).
Note : si un fichier est modifié depuis le dernier appel à git add, ces modifications ne seront pas prise en compte, il faudra appeler git add de nouveau.
On peut également utiliser l'option `-A` pour ajouter tous les fichiers modifiés.

### Effectuer un commit
* `git commit [-a] [-m <message>]`
Commite les fichiers dans le cache.
L’option _-m_ permet de spécifier un message. Il est obligatoire.
Si l’on ne spécifie pas l’option _-m_, un éditeur de texte est lancé. Un message vide annule le commit.
L’option -a permet de commiter directement tous les fichiers sans passer par le cache.

### Supprimer des fichiers
* `git rm [-f] [--cached]` : supprime un fichier.

### Sauvegarder temporairement les fichiers
* `git stash` : Sauvegarde les changements dans une pile à côté. Laisse la copie en local propre.

* `git stash apply` : Applique le dernier changement sauvegardé temporairement dans la pile, mais ne le supprime pas.

* `git stash pop`: Applique le dernier changement sauvegardé temporairement dans la pile et le supprime.

## Comparer

* `git diff [path]` : compare le répertoire de travail avec le cache.
L’option _--cached_ ou _--staged_ (équivalents) compare le cache avec ce qui est commité.

## Gérer des branches

Par défaut nous sommes sur une branche nommée **master**.

### Créer une branche

* `git branch toto` : Créé une branche nommée **toto**.

* `git checkout toto` : Bascule sur la branche nommée **toto**. Peut-être utilisée avec l'option `-b` qui créé la branche, puis bascule dessus.

### Supprimer une branche

* `git branch -d toto` : Supprime la branche toto

### Fusion de branches

Une fois un travail terminé sur une branche, il peut nous arriver de vouloir fusionner notre travail avec la branche **master** (ou avec un autre...).  
Pour cela on se position dans la branche de destination, et l'on exécute la commande suivante :

* `git merge toto` : Fusionne la branche **toto** dans la branche courante.
