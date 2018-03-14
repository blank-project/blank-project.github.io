# Lesson 4 > Exercise 1

Créer une application express comportant un formulaire d'inscription d'utilisateur.

Le formulaire doit comprendre (les champs obligatoires ont une * à coté) :
- Un nom d'utilisateur *
- Un prénom
- Un nom de famille
- Un email *
- Un mot de passe *
- Une confirmation de mot de passe *

Les validations suivantes doivent etre effectuées sur l'endpoint créé à cet effet:
- Validation de l'email
- Prénom et nom de famille entre 2 et 25 caractères

Le mot de passe doit etre encodé. Regardez comment faire ! [ici](https://www.npmjs.com/package/bcrypt)
