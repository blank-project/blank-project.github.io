# Playground > Lesson 10 > Exercise 2

[Documentation Ubuntu FR](https://doc.ubuntu-fr.org/ssh#authentification_par_un_systeme_de_cles_publiqueprivee).

[Documentation GitHub](https://help.github.com/articles/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent/)

## SSH Access 1

Accédez au serveur à l'adresse fournie par le professeur en SSH, par User/Password

## SSH Access 2

- Générez une paire clé publique/clé privée (`ssh-keygen`).
- Ajoutez la à l'agent ssh (`ssh-agent`/`ssh-add`).
- Ajoutez la sur le serveur distant (`ssh-copy-id`).
- Réessayez de vous identifier.

## SSH Access 3

- Ajoutez la clé publique générée à votre repository GitHub.
- Modifiez l'URL de votre _remote repository_ Git avec l'URL ssh (`git remote set-url`).
- Constatez que vous n'avez plus besoin de saisir votre username/password pour push.
