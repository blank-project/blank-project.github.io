# Cheat Sheet Terminal

## Obtenir de l'aide
**man** _cmd_ : affiche l’aide pour la commande _cmd_
**_cmd_** -h ou **_cmd_** --help : permet d'afficher une aide plus courte

man et l'option help ne sont pas toujours disponibles dans ce cas il faut faire des recherches sur internet.

## Commandes
Une commande s'écrit **cmd** [_options_] [_arguments_]  
Les options sont précédées de **-** (options courtes) ou **--** (options longues).  
Les options courtes peuvent êtres groupées.  
Exemples :
- `pwd`  
- `ls -Al` (équivalent de `ls -A -l` )
- `git --help`
- `rm -R test/ `

La touche `Tab` (`↹`) permet d'obtenir des suggestions de commandes, options ou paramètres.

## Quelles commandes puis-je appeler depuis mon terminal ?
Les commandes que l'on peut appeler dépendent de la variable système $PATH et où se trouve notre prompt dans l'arborescence
**whereis** _cmd_ permet de savoir où est stockée une commande

## Racourcis indispensables
* Fléches gauche et droite : permet de modifier la commande en courss
* CTRL+C : demande au processus qui s'exécute au premier plan de s'arrêter
* CTRL+A / CTRL+E : aller au début / à la fin de la ligne
* CTRL+R : chercher une commande dans les dernières commandes utilisées pour l'exécuter de nouveau après l'avoir possiblement modifiée
* Fléche haut / bas : permer de revoir et de naviguer dans les dernières commandes utilisées
* Tab : permet de demander au shell d'essayer d'auto-compléter la commande que l'on est en train d'écrire. **très utile !**
* la touche q : permet souvent de sortir d'une commande (comme man ou less)


## Commandes pratiques
### **exit**
Quitte le terminal
### **clear**
Efface le termnal
### **history**
Affiche les dernières commandes utilisées
### **whoami**
Affiche mon nom d'utilisateur

## Rappel sur les chemins :
* Un chemin absolu commence par / et indique le chemin vers un fichier ou un dossier depuis la racine de l'arborescence
```
/var/log/truc/system.log
```
* Un chemin relatif est indiqué par rapport à la position acutelle dans le shell
```
../machin/truc/voila
```
Chaque dossier dans l'arborescence d'un système basé UNIX (et même windows) contiennent deux dossiers spéciaux :
- `.` : permet d'indiquer le dossier courant
- `..` : permet d'indiquer le dossier parent

## Fichiers/Dossiers
Se déplacer dans des dossiers, y créer des fichiers et d'autres dossiers est essentiel.  
Voici les commandes principales permettant de faire cela.

### **pwd**
_print working directory_  
Affiche le dossier courant

### **cd**
_change directory_  
Change de dossier courant
> `cd test` : On se rend dans le dossier _test_  
> `cd ..` : On se rend dans le dossier parent  
> `cd` ou `cd ~` : on se rend dans le dossier personnel (_HOME_).

### **ls**
Liste les dossiers/fichiers  
Options utiles :
- **-a** : liste les fichiers cachés (commençant par "**.**" )
- **-l** : format long

### **ll**
Est un racourci pour `ls -al`

### **mv**
Déplace un fichier/dossier  
> `mv source.txt destination/` : déplace le fichier _source.txt_ dans le dossier _destination_

### **touch**
Crée un fichier
> `touch index.html` : crée un fichier nommé _index.html_

### **mkdir**
Crée un dossier
> `mkdir test` : crée un dossier nommé _test_

### **rm**
Supprime un fichier/dossier  
Pour supprimer tous les fichiers d'un dossier récursivement, utiliser l'option _-r_
L'option -f permet de forcer la suppression des éléments (le prompt ne demandera pas de confirmation)
> `rm index.html` : supprime le fichier _test.html_  
> `rm -r test/` : supprime le dossier _test_ et tout son contenu

### **rdmdir**
Supprime un dossier, celui-ci doit être vide pour cela
La commande `rm` est généralement plus adaptée

### **less**
Permet d'afficher le contenu d'un fichier, et de naviguer dedans

### **cat**
Affiche le contenu du fichier

### **atom**
Permet de lancer l'éditeur graphique atom (utile par exemple pour l'ouvrir au niveau du dossier courant du shell)

### **nano**
Ouvre un éditeur de fichier basique.
- `Ctrl + O` : sauvegarder  
- `Ctrl + X` : quitter

## Recherche
### **grep**
Recherche une chaîne de caractère dans un fichier.

## Process
### **ps**
Affiche les processus actifs. On y associe générelement les options `aux` pour voir plus de détails
`ps aux`
### Les signaux
Les signaux permettent d'intéragir avec les processus actifs
voir `man signal` pour la la liste des signaux
Les plus utiles sont SIGTERM(15) pour demander à un processus de se terminer et SIGKILL(9) pour le forcer à s'arrêter.
### **kill**
Envoie un signal à un processus (par pid)
### **pkill**
Envoie un signal à un processus (par nom)
### **top & htop**
Liste les processus actifs (sorte de “gestionnaires des tâches”).  
_htop_ n’est pas forcément présent par défaut.
### Premier plan et arrière plan
- **CTRL+Z** : stoppe le processus courant
- **bg** et **fg** : permet de placer des pocessus en premier ou arrière plan

## Droits
### **chmod**
Change les droits d’accès à un fichier
`chmod a+x test.xml`

## Combiner des commandes
- `|` : le pipe
- `>` et `<`: les redirections
- `&&` permet de mettre deux commandes à la suite

## Réseau
### **ifconfig**
Affiche la configuration réseau.
### **hostname**
Affiche le nom de l’ordinateur
### **wget**
Télécharge un fichier
### **traceroute**
Affiche la route jusqu’à un hôte
### **ping**
Exécute un test de connectivité sur un hôte
