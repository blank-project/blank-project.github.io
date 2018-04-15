## Fonctionnalités
### ToDo list
- ToDo personnelle
- Pouvoir créer une ToDo et l'afficher (un texte qui me rappelle un truc à faire) qui possède :
  - Pouvoir lui donner un titre
  - Pouvoir lui donner du contenu (texte) (primordiale)
  - Deadline (primordiale)
  - Creation Date
  - Catégorie (primordiale) (primordiale)
- Terminer / supprimer / archiver une todo (système d'états) (primordiale)
- Possibilité de créer / supprimer une catégorie
- Sauvegarder ses Todos lorsque l'on ferme l'onglet (localstorage)
### Prise de Notes
- Sauvegarde avec le (localstorage)
- Créer une Note / Afficher une notre (primordiale) avec sauvegarde de date
- Types de notes (création & suppression des types)
- Rentrer les infos dedans : (regarder markdown)
  - Titre (primordiale)
  - Texte (primordiale)
  - Multimédia
  - Lien
- Edition / suppression / archivage (système d'états) (primordiale)
- Afficher vos notes (comment ?) / Sélectionner une note (primordiale)
- Tri
## Design
1 page coupée en 2 verticalement :
### TODO :
Voir todo mvc : [https://vuejs.org/v2/examples/todomvc.html](https://vuejs.org/v2/examples/todomvc.html))
### Notes :
Faire un input du style TODO au dessus qui :
- S'étend lorsque l'on clique dessus
- Avec un bouton sauvegarder en bas de la page
- Les notes existantes sont affichées en dessous de l'input lorsqu'il n'est pas sélectionné et sont :
  - Sous forme de cartes
  - Lorsque l'on clique dessus, leur contenu apparait dans le textarea & elles sont modifiables
- Les notes déjà sauvegardées peuvent être supprimées / archivées via des boutons en bas de la page lors de la sélection
