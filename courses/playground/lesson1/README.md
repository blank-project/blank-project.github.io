# Utiliser le terminal
## Concepts importants / commandes utiles



---



## Qu'est-ce que le terminal ?

- Le terminal est un programme qui permet d'exécuter des commandes dans les systèmes basés sur UNIX (Distributions Linux, MacOS)
- Il existe pleins de terminaux différents selon la plateforme ou la préférence (Terminal, Terminator, iTerm …)
- Le terminal communique avec le **shell** qui est un interperteur de commandes
- Plusieurs types de shell : Bash, PosiX
- Je vais utiliser les deux termes pour parler de l'invite de commandes, mais ce sont deux choses différentes en réalité



***



## À quoi est-ce que ça sert ?

* Les commandes accessibles par le terminal n'ont souvent pas d'équivalents graphiques
* L'utilisation du terminal permet d'aller plus vite que l'interface graphique dans la plupart des cas
* Il permet d'automatiser les tâches à l'aide scripts
* Lorsqu'on se connecte à des serveurs distants, on a généralement accès uniquement au terminal et à quelques interfaces d'aministration



---



## Utilisateur / session
* Lorsqu'on ouvre une fenêtre d'un terminal, on ouvre une session Shell avec un utilisateur (celui ouvert sur notre poste)
* On peut ouvrir plusieurs sessions avec un même utilisateur (limité par le système)
* Il est donc possible de travailler avec plusieurs fenêtre de terminal simultanément



---


## Le prompt
C'est ce qu'on appelle en français l'invite de commande, c'est ce que l'on voit lorsqu'on ouvre le terminal
Généralement :
```
$
```
C'est à cet endroit que l'on écrit les commandes que l'on veut exécuter.
Après avoir tapé une commande, il faut appuyer sur la **touche entrer** pour l'exécuter.



***



- On ne peut taper une commande que lorsque le prompt nous laisse la main.
- C-à-d que si une commande est en cours d'exécution au premier plan, on ne peut pas en exécuter une autre dans la fenêtre active.
- Lorsque qu'une commande s'exécute, elle devient un processus (on y revient plus loin).




---



# Prise en main du terminal



***



## À quoi ressemble une commande ?
Une commande s'écrit **cmd** [_options_] [_arguments_]  
Les options sont précédées de **-** (options courtes) ou **--** (options longues).  
Les options courtes peuvent êtres groupées.  
Exemples :
- `pwd`  
- `ls -al`
- `git --help`   
- `rm -R test/ `



***


## Quelques commandes indispensables :
- **exit**
Quitte le terminal
- **clear**
Efface le termnal
- **history**
Affiche les dernières commandes utilisées
- **whoami**
Affiche mon nom d'utlisateur



***



## Racourcis indispensables
* Fléches gauche et droite : permet de modifier la commande en courss
* CTRL+C : demande au processus qui s'exécute au premier plan de s'arrêter
* CTRL+A / CTRL+E : aller au début / à la fin de la ligne



***




* CTRL+R : chercher une commande dans les dernières commandes utilisées pour l'exécuter de nouveau après l'avoir possiblement modifiée
* Fléche haut / bas : permer de revoir et de naviguer dans les dernières commandes utilisées
* Tab : permet de demander au shell d'essayer d'auto-compléter la commande que l'on est en train d'écrire. **très utile !**



---



## Combien de commandes sont disponibles ?
- Autant que l'on veut, un script est une commande par exemple puisqu'on peut l'exécuter.
- Il existe donc des commandes systèmes présentes dès l'installation, puis d'autre qui sont rajoutées par la suite.
- Au niveau du prompt , tapper deux fois sur tab, la liste des commandes disponibles va s'afficher



---




## À quoi sert une commande, comment l'utiliser ?
**man** _cmd_ : affiche l’aide pour la commande _cmd_
**_cmd_** -h ou **_cmd_** --help (ou encore **_cmd_** -help)

Informations permettant de connaître quels arguments et options peut prendre la commande en paramètre



***


## Obtenir de l'aide
Tapez par exemple
```
man ls
```



---



## **echo**
* Permet d'afficher un message ou le contenu d'une variable, ou les deux
* On reviendra sur les variables au prochain cours
* Ex. pour obtenir le type du Shell :
```
echo $SHELL
```



---



## Fichiers/Dossiers
- Un prompt est associé à un emplacement dans le File System (arborescence de fichiers ?)
- Les actions qui sont effectuable par le prompt dépendent de l'endroit où l'on se trouve dans l'arborescence
- Se déplacer dans des dossiers, y créer des fichiers et d'autres dossiers est essentiel.  



***



## Rappel sur les chemins :
* Un chemin absolu commence par / et indique le chemin vers un fichier ou un dossier depuis la racine de l'arborescence
```
/var/log/truc/system.log
```
* Un chemin relatif est indiqué par rapport à la position acutelle dans le shell
```
../machin/truc/voila
```


***



* Chaque dossier dans l'arborescence d'un système basé UNIX (et même windows) contiennent deux dossiers spéciaux :
- `.` : permet d'indiquer le dossier courant
- `..` : permet d'indiquer le dossier parent



***



### **pwd**
_print working directory_  
Affiche le dossier courant



***



### **cd**
Change de dossier courant
> `cd test` : On se rend dans le dossier _test_  
> `cd ..` : On se rend dans le dossier parent  
> `cd` ou `cd ~` : on se rend dans le dossier personnel (_HOME_)  
> `cd -` : Revient au dernier dossier

Essayez de naviguer un peu au hasard (sans oublier d'utiliser **tab** pour aller plus vite)
Tapez régulièrement `pwd` pour voir où vous vous trouvez dans l'arborescence



***



### **ls**
Liste les dossiers/fichiers  
Options utiles :
- **-a** : liste les fichiers cachés (commençant par "**.**" )
- **-l** : format long



***



Faire un `ls -la ~/`

Concepts présents :
- utilisateurs
- permissions (lecture / écriture / exécution)



***



### **touch**
Crée un fichier
> `touch index.html` : crée un fichier nommé _index.html_


***



### **mkdir**
Crée un dossier
> `mkdir test` : crée un dossier nommé _test_

### **rdmdir**
Supprime un dossier, mais celui-ci doit être vide



***



### **mv**
Déplace un fichier/dossier  
> `mv source.txt destination/` : déplace le fichier _source.txt_ dans le dossier _destination_



***



### **rm**
Supprime un fichier/dossier  
Pour supprimer tous les fichiers d'un dossier récursivement, utiliser l'option _-r_
> `rm index.html` : supprime le fichier _test.html_  
> `rm -r test/` : supprime le dossier _test_ et tout son contenu
> `rm -f test/*` force la supression de tous les fichiers dans le dossier test

Possible de combiner les options r et f, mais ça peut faire très mal !



***



### **less**
Permet d'afficher le contenu d'un fichier, et de naviguer dedans
Essayez de lire un fichier à l'aide de less

### **cat**
Affiche le contenu du fichier

### **vi**
Vi est un éditeur de fichiers



---



## Processus
- En réalité un OS peut exécuter en parallèle pleins de terminaux différents, eux même exécutant pleins de commandes
- Lorsqu'une commande est tapée dans le terminal, elle devient un processus auquel est donné un numéro (**pid**)
- Les processus cohabient entre eux et partagent les ressources du système pour qu'ils puissent s'exécuter en parallèle
- Il est possible de lister et d'intéragir avec les processus,



***



### **ps**
Affiche les processus actifs

Essayez :
```
ps
ps aux
```



***



### **top**
Liste les processus actifs et leur consommation des ressources.s
(sorte de “gestionnaires des tâches”)



***



### **kill**
Envoie un signal à un processus (par pid)
### **pkill**
Envoie un signal de terminaison à un processus (par nom)

Les signaux permettent d'intéragir avec les processus actifs

Exemple :
```
kill -9
kill -SIGTERM
pkill java
```



***



- **CTRL+Z** : stoppe le processus courant
- **bg** et **fg** : permet de placer des pocessus en premier ou arrière plan



---



## Quelles commandes puis-je appeler depuis mon terminal ?
Les commandes que l'on peut appeler dépendent de la variable système $PATH et où se trouve notre prompt dans l'arborescence
- **whereis** _cmd_ permet de savoir où est stockée une commande



---



### **chmod**
Change les droits d’accès à un fichier
```
chmod a+x test.xml
```



---



## **chown**
Permet de changer le propriétaire d'un fichiers



---



## Combiner des commandes
- `|` : le pipe
- `>` et `<`: les redirections
- `&&`


---



## La suite mardi
- quelques excercices pour manipuler les commandes vues aujourd'hui et quelques nouvelles commandes
- on va écrire aussi des scripts shell, c-à-d qui utilisent les commandes shell
- il existe une cheatsheet avec un résumé des commandes utiles



---



## Réseau (bonus)
- **ifconfig**
Affiche la configuration réseau.-
- **hostname**
Affiche le nom de l’ordinateur
- **wget**
Télécharge un fichier
- **traceroute**
Affiche la route jusqu’à un hôte
- **ping**
Exécute un test de connectivité sur un hôte



---



#The end !
