# Node.js > Lesson2 > Exercise4

Créer une application web affichant dans une page Web les données de la requête :
- Nom de domaine
- IP
- Chemin
- Valeur des headers : 'Host', 'Content-Type', 'User-Agent', 'Referer', 'Date'

Pour cela :
- Créer une application Express
- Créer un middleware récupérant les information voulues
- Associer ce middleware à la route '/\*' en GET
- Créer un template pour afficher les données.
- Effectuer le rendu du template avec les données récupérées par le Middleware
