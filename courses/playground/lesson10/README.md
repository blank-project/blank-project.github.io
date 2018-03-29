# Déploiement



---



## Définition

Le déploiement logiciel est l'ensemble des activités qui rendent un logiciel disponible à l'utilisation.

Le déploiement est effectué en plusieurs étapes qui visent à placer le logiciel dans son environnement cible de manière à ce qu'il soit prêt à être utilisé.

On retrouve en général :
- Packaging : on prépare le logiciel pour son envoi vers l'environnement cible
- Installation : opérations nécessaires pour placer et configurer le logiciel dans son environnement cible



---



## Packaging



***


### Releases

Une release est une version fixe d'un logiciel, c'est à dire du code source qui le compose.

On fige en général le code associée à une release donnée.


***


### Versionning

On utilise la commande `git tag` pour créer des **tags**.

Un tag référence un commit donné.

En général, un tag ne bouge pas et caractérise une release.



***


### Packaging

Les applications Web Node.js ne sont en général pas packagées.

D'autres langages ou types d'applications peuvent êtres packagées.

Ex :
- les installeurs *.exe* ou *.msi* pour les logiciels Windows
- Les installeurs *.deb* pour Ubuntu/Debian
- Les packages Java : *.jar* ou *.war*



***


### Profils

Une application a en général plusieurs profils (_development_, _test_, _production_).

Ces profils correspondent à des configurations et/où fonctionnalités differentes.


***


Ex :
- En profil `development`, on utilisera une base de donnée locale.
- En profil `production`, on utilisera un serveur de base de données dédiée.

Le choix du profil peut se faire lors du Packaging ou directement à l'installation.



---



## Installation

Le processus d'installation va nécessiter d'accéder à la machine cible dans le cas d'une application Web.



---



### SSH

Pour accéder à un serveur distant, on peut utiliser différentes méthodes.

Nous verrons ici SSH (Secure SHell) qui à la fois un programme informatique et un protocole de communication.

Il permet de se connecter et d'ouvrir un Terminal sur un ordinateur distant.



***


Exemple :
```
ssh <nom_utilisateur>@<ipaddress> -p <num_port>
```

On peut se connecter soit par mot de passe, soit par [échange de clés](https://doc.ubuntu-fr.org/ssh#authentification_par_un_systeme_de_cles_publiqueprivee).



***



Beaucoup d'application peuvent fonctionner en utilisant **ssh** pour accéder à un serveur distant, notamment :
- `scp` : Secure CoPy, la version du program `cp` sur `ssh`.
- `sftp` : un client FTP sur `ssh`
- `git` : on peut utiliser ssh pour se connecter à un repository Git



---



## Méthodologie de déploiement


***



### Déploiement manuel


***



### Déploiement Automatique



***



---


## Daemons et Gestion de processus





---


## Ressources utiles

[Deploiement d'application Node.js](https://oncletom.io/node.js/chapter-06/index.html)

[Process Manager for Node.js](https://mrvautin.com/running-nodejs-applications-in-production-forever-vs-supervisord-vs-pm2/)

[Software Deployment  on Wikipédia](https://en.wikipedia.org/wiki/Software_deployment)
