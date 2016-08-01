# Cheat Sheet Terminal

## Obtenir de l'aide
**man** _cmd_ : affiche l’aide pour la commande _cmd_

## Commandes
Une commande s'écrit **cmd** [_options_] [_arguments_]  
Les options sont précédées de **-** (options courtes) ou **--** (options longues).  
Les options courtes peuvent êtres groupées.  
Exemples :
- `pwd`  
- `ls -Al` (équivalent de `ls -A -l` )
- `git --help`   
- `rm -R test/ `

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
- **-A** : liste les fichiers cachés (commençant par "**.**" )
- **-l** : format long

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
> `rm index.html` : supprime le fichier _test.html_  
> `rm -R test/` : supprime le dossier _test_ et tout son contenu

### **nano**
Ouvre un éditeur de fichier basique.
- `Ctrl + O` : sauvegarder  
- `Ctrl + X` : quitter

## Recherche
### **grep**
Recherche une chaîne de caractère dans un fichier.

## Process
### **ps**
Affiche les processus actifs
### **kill**
Envoie un signal de terminaison à un processus (par pid)
### **pkill**
Envoie un signal de terminaison à un processus (par nom)
### **top & htop**
Liste les processus actifs (sorte de “gestionnaires des tâches”).
_htop_ n’est pas forcément présent par défaut.

## Droits
### **chmod**
Change les droits d’accès à un fichier

## Réseau
### **ifconfig**
Affiche la configuration réseau.
### **host**
Affiche le nom de l’hôte
### **wget**
Télécharge un fichier
### **traceroute**
Affiche la route jusqu’à un hôte
### **ping**
Exécute un test de connectivité sur un hôte

## Shell
### **exit**
Quitte le terminal
### **clear**
Efface le termnal
### **history**
Affiche les dernières commandes utilisées
