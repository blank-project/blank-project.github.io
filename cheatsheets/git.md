# Cheat Sheet Git

## Obtenir de l'aide
Obtenir de l’aide sur la commande _verb_  
`git help verb`  
`git verb --help`  
`man git-verb`  

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

## Créer / gérer un repository
`git status`  
Affiche le statut du repository local.  
Voir git status --help pour plus d’infos, en particulier sur l’option -s/--short.

`git init`  
Initialise un nouveau repository à l’emplacement courant.  
Note : les fichiers du dossier peuvent être ajouter ensuite via **add** et **commit**.

`git clone {url} [{folder_name}]`  
Importe le repository à l’adresse _url_ dans le dossier *folder_name*.

`git fetch`  
Récupère les données du repository distant.

`git pull`  
Récupère les données du repository distant et les incorpore à l'espace de travail (`git fetch` + `git merge`).

`git push`  
Envoie les données local sur le repository distant


### Liste d'exclusion
Les fichiers _.gitignore_ contiennent les listes d’exclusion.  
Ce sont de fichiers qui seront systématiquement ignorés par Git.  
Les lignes commençant par **#** sont ignorées.  

## Gérer les fichiers
### Ajouter des fichiers
`git add [files]`  
Ajoute un ou fichier à la prochaine transaction à commiter (stage file).  
Note : si un fichier est modifié depuis le dernier appel à git add, ces modifications ne seront pas prise en compte, il faudra appeler git add de nouveau.
On peut également utiliser l'option `-A` pour ajouter tous les fichiers modifiés.

### Effectuer un commit
`git commit [-a] [-m <message>]`  
Commite les fichiers dans le cache.  
L’option _-m_ permet de spécifier un message. Il est obligatoire.  
Si l’on ne spécifie pas l’option _-m_, un éditeur de texte est lancé. Un message vide annule le commit.  
L’option -a permet de commiter directement les fichiers sans passer par le cache.

### Supprimer des fichiers
`git rm [-f] [--cached]` : supprime un fichier.

## Comparer
`git diff [path]` : compare le répertoire de travail avec le cache.
L’option --cached ou --staged (équivalents) compare le cache avec ce qui est commité.

### Gérer des branches
`git branch`  

`git checkout`  

`git merge`  
