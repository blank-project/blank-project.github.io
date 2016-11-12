#Git & Github


***


##C'est quoi ?

**Git** un outil de gestion de version. Il permet de gérer les versions de votre code et de le partager, l'ouvrir, le gérer et vous y retrouver.

**Github** est un site internet [https://github.com](https://github.com) qui permet d'héberger vos documents gérés avec Git et de les mettre à disposition sur internet permettant la gestion des problèmes, l'évolution, la demande de nouveauté, etc.



---



##La gestion de version
C'est bien ! Mais encore ?

Plein de programmes vous permettent de gérer vos sources (code & documents), **git** est le plus connu, mais il y a aussi certains autre acteurs, comme **Mercurial** ou **Subversion** qui en sont les alternatives les plus connues.


***


##Pourquoi git du coup ?

**Git** est le programme le plus répendu pour gérer vos sources. Il est plutôt facile d'accès mais répond très bien aux problèmes plus complexes avec des commandes plus complètes. C'est aussi le plus documenté.



---



##Et github ?
Nous permet de visualiser tout ça et de le stocker sur internet ! Encore, il ya certains concurents, comme [Bitbucket](https://bitbucket.org/) & [GitLab](https://about.gitlab.com/).


***


##Ça ressemble à quoi ?
[Clique ici !](https://github.com/blank-project/_blank/)



---



##Les principes de bases
####Exercice :

Prenons du temps pour réflechir aux méchanismes dont on pourrait avoir besoin pour versionner notre code en local uniquement.



---



##Les principaux méchanismes de Git
* Index
* Commit
* Branches



---



##Les commandes principales


***


##Initialisation
`git init` permet d'initialiser le dossier courant comme répertoire Git.

Un répertoire **git** est votre espace de travail. C'est le dossier dans lequel se trouvera vos fichiers et votre code à suivre.

Vous pouvez vérifier que le répertoire a été créé en vérifiant qu'un dossier `.git` a été créé dans votre espace de travail.


***


##Status

Actuellement vous devez n'avoir aucun fichier dans votre index **git**. Pour vérifier cela vous pouvez executer la commande `git status`. Tout est expliqué avec le resultat de la commande.

Lancez là maintenant et observez le résultat !

Vous devez avoir plein de lignes rouges qui disent que vos fichiez ne sont pas suivis !

Comment je fais pour les ajouter ?


***


##Add

Pour ajouter des fichiers à l'index on execute la commande `git add` en spécifiant le fichier (vous pouvez utiliser l'auto-complétion avec tab pour vous guider).

Options intéressantes :
* `-A` ou `--all` : Ajoute tous les fichiers qui ne sont actuellement pas suivis. `/!\` vous pouvez du coup intégrer des fichiers uniquement utiles à vous.
* `-i` : Lance le mode interactif pour vous guider.


***


##Commit
Ok et je valide comment les fichiers ajoutés à l'index ?

Note : Les fichiers sont ajouté uniquement une fois à l'index. Une fois ajouté, ils sont suivis, et il faut valider les modifications à chaque fois du coup.
