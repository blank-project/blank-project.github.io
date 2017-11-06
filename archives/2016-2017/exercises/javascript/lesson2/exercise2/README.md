**Exercice 2**

Déclarer une variable avec votre mot de passe.  

Récupérer le premier argument du script.

Comparer le mot de passe défini dans le script avec le mot de passe passé en argument.

- Si le mot de passe est correct, afficher "Connexion réussie" dans la console.  
- Sinon afficher "Mot de passe erroné".

**Exercice 2.1**

Une fois que le script précédent fonctionne, afficher "Veuillez taper un mot de passe" si il n'y a pas de mot de passe en paramètre du script.

**Exercice 2.2**

Maintenant le script doit accepter 2 paramètres.  
Rajouter une variable définissant un login.  
Récuperer les arguments du script dans des variables.

Votre script doit :  

- Afficher "Login ou Password manquant" si l'un des deux paramètres est absent.
- Afficher "Login erroné" si le login passé en argument ne correspond pas a celui déclaré dans votre variable.
- Afficher "Password erroné" si le password passé en argument ne correspond pas a celui déclaré dans votre variable.
- Afficher "Connexion réussie" si tout est correct.

**Astuces**  

Pour passer un argument au script (dans le terminal) :
```
  nodejs <votre-script.js> <argument1> <argument2> ...
```

Pour lire un argument dans le script :
```
  var argument1 = process.argv[2], argument2 = process.argv[3], ...;
```
