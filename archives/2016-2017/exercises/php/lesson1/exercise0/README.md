# PHP : Mise en Place

## Installer un Serveur LAMP

- Se rendre à l'adresse [https://www.apachefriends.org/fr/index.html](https://www.apachefriends.org/fr/index.html)
- Télécharger le fichier d'installation pour Linux
- Se rendre dans le dossier où a été téléchargé le fichier.
- Executer `sudo chmod 755 xampp-linux-*-installer.run` en remplaçant `*` par la bonne version.
- Executer `sudo ./xampp-linux-*-installer.run` en remplaçant `*` par la bonne version.

XAMPP s'installe dans `/opt/lampp`.
Le répertoire `/opt` est un répertoire système où installer des programmes sans passer par la logithèque Ubuntu ou `apt-get install`.


## Vérifier l'installation
Démarrer XAMPP :
- `sudo /opt/lampp/lampp start`
- Se rendre à l'adresse [http://localhost](http://localhost)

Pour arrêter XAMPP : `sudo /opt/lampp/lampp start`
