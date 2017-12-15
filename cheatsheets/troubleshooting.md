# CheatSheet Troubleshooting

## HTML
- Est-ce que toutes mes balises ont une syntaxe correcte ?
  - Sont elles bien fermées ?
  - Les attributs sont-ils bien écrits ?
  - N'y a-t-il pas de balise qui se chevauchent ?  
  Exemple :
  ```html
<header>  
  <div>
</header>
  </div><!-- WRONG : il fallait fermer la div avant de fermer le header -->
  ```

## CSS
- Ai-je bien lié ma feuille de style à ma page HTML ?
- La feuille de style CSS est-elle bien chargée (bon chemin d'accès ?).
- La syntaxe du CSS est-elle correcte ?
- L'élément est-il bien visé par mon sélecteur.
