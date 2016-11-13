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

_PS : Pour retirer de l'index un fichier `git rm`_

***


##Commit
Ok et je valide comment les modifications des fichiers ajoutés à l'index ? Avec la commande `git commit`.

Options intéressantes :
* `-a` : Commit tous les fichiers actuellement suivis et modifiés.
* `-m` : Spéficie le message de commit.
* `--amend` : Modifie le message de commit que vous avez spécifié.

Vous pouvez spécifier les fichiers que vous souhaitez commiter en écrivant leur chemin d'accès relatif séparé par des espaces.

Note: Les fichiers sont ajouté uniquement une fois à l'index. Une fois ajouté, ils sont suivis, et il faut valider les modifications à chaque fois du coup.


***


##Pause exercice !
Maintenant reprenez les commandes et sauvegardez votre espace de travail "cours" !

Pour vérifier que tout s'est bien passé, votre copie de travail doit être propre lorsque vous exécutez `git status`.


***


##Ok et les branches alors ?
![branch yourserlf](git.jpg)

C'est la partie la plus intéressante !


***


##Petit rappel sur le méchanisme
Une branche n'est qu'un label apposé sur un commit. Un commit n'appartient pas à une branche mais ne peut pas floter dans le vide.

Note:un commit est un engagement sur votre copie de travail.


***


##Encore une fois, sachez où vous êtes !
Utilisez la commande `git branch` pour savoir sur quelle branche vous êtes actuellement.

Options utiles :
* `[name]` : Créé une branche ayant ce nom
* `-d` supprime une branche et tous les commits qui y sont attaché. Et seulement à cette dernière.


***


##Changer de branche
Pour changer de branche, on utilise la commande `git checkout [name]`.

Options utiles :
* `-b` : Créé la branche avant de basculer dessus


***


##Et la fusion ?
Placez vous dans la branche où vous voulez continuer votre travail, et ensuite exécutez la commande `git merge [name]`. Celle-ci fusionne la branche cité dans la branche courante.


***


##Et plein d'autres ...

* `git cherry-pick` : Récupère un commit d'une autre branche et l'applique dans la branche courante.
* `git reset` : Opère au niveau des commits
* `git stash` : Stock les fichiers en cours de modification et nettoie la copie de travail courante. Vous pouvez réappliquer les modifications ulterieurement avec `git stash apply` & `git stash pop`
* ...



---



##Mais t'avais pas dit qu'on allait utiliser github ?
![holdon](holdon.jpg)


***


##De quoi a-t-on besoin ?
####Exercice :

Prenons du temps pour réflechir aux méchanismes dont on pourrait avoir besoin pour versionner notre code en local uniquement.


***


##Les concepts de bases :
* Remote
* Pull
* Push


***


##Remote
On utilise la commande `git remote` pour gérer nos remotes.

Options :

* `add [name] [url]` : Créé une remote avec un nom et une url de destination
* `rm [name]` : Supprime une remote avec ce nom
* `set-url [name]` : Modifie l'url d'une remote
* `-v` : Liste les remotes actuellement enregistrées


***


##Fetch
Eh on en a pas parlé !
C'est pour récupérer l'état du serveur. Et vérifier qu'il n'y a pas de mise à jour que vous n'ayez pas de votre côté. Elle s'utilise comme ceci : `git fetch`


***


##Pull
On utilise cette commande pour récupérer les données d'une branche du serveur. On pull une branche à la fois. Voici sa syntaxe :
`git pull [remote_name] [branch_name]`. Vous avez souvent des raccourcis possibles mais ils mènent souvent à des erreurs.


***


##Push
Poussez vos modifications locales sur le serveur ! `git push [remote_name] [branch_name]`.


***


##Exercice :
Créez vous un répertoire github et poussez vos cours dessus !



---



![thanksgoditsover](thanksgoditsover.jpg)
