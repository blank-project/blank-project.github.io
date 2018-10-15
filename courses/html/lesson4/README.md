# Intégrer du contenu
## Ajouter de l'audio, des vidéos et des sites externes sur votre site !



---



### Audio

La balise audio permet de jouer des sons dans une page HTML.
```
<audio>
    <source src="sounds/sncf.ogg" type="audio/ogg" />
    <source src="sounds/sncf.wav" type="audio/wav" />
    Votre navigateur ne supporte pas l'audio.
</audio>
```
<audio controls>
    <source src="sounds/sncf.ogg" type="audio/ogg" />
    <source src="sounds/sncf.wav" type="audio/wav" />
    Votre navigateur ne supporte pas l'audio.
</audio>

Note: Préciser le fonctionnement de la balise source.


***


#### Attributs supportés

- **autoplay** : Spécifie que le son doit être joué automatquement (dès qu’il est chargé)
- **controls** : Spécifie que les controles de la balise doivent être affichés
- **loop** : Quand c’est fini, ça recommence !
- **muted** : Désactive le son par défaut
- **src** : Donne la localisation du fichier (une alternative à `source`).


***


#### Formats audio supportés

- ogg : `audio\ogg`
- mp3 : `audio\mpeg`
- wav : `audio\wav`


***


#### Les types MIME (ou Media Type).

Le type MIME indique dans quelle format se trouve une ressource.

Il s'écrit en général `type/sous-type`.

Exemples courants :
- `application/pdf`
- `text/css`
- `text/javascript`
- `audio/mpeg`
- `image/jpg`



---



### Video

La balise `video` sert à intégrer des vidéos dans une page HTML.
```
<video controls width="320" height="194">
    <source src="vids/mov_bbb.mp4" type="video/mp4" />
    <source src="vids/mov_bbb.ogg" type="video/ogg" />
    Votre navigateur ne supporte pas la video.
</video>
```
<video controls width="320" height="194">
    <source src="vids/mov_bbb.mp4" type="video/mp4" />
    <source src="vids/mov_bbb.ogg" type="video/ogg" />
    Votre navigateur ne supporte pas la video.
</video>


***


#### Attributs supportés

- **autoplay** : Spécifie que la vidéo doit être jouée automatquement (dès qu’elle est chargée)
- **controls** : Spécifie que les controles de la balise doivent être affichés
- **loop** : Quand c’est fini, ça recommence !
- **muted** : Désactive le son par défaut
- **src** : Donne la localisation du fichier (une alternative à `source`)
- **poster** : Spécifie l’image à afficher pendant que la vidéo charge
- **height** : spécifie la largeur de la vidéo
- **width** : spécifie la hauteur de la vidéo


***


#### Formats vidéos supportés

- Ogg : `video\ogg`
- MP4 : `video\mp4`
- WebM : `video\webm`



---



### IFrame

La balise `iframe` permet d'intégrer des pages web externe dans votre site web (par exemple, Youtube, Soundcloud, etc ...).
```
<iframe width="560" height="315" src="https://www.youtube.com/embed/xIBiJ_SzJTA"></iframe>
```
<iframe width="560" height="315" src="https://www.youtube.com/embed/xIBiJ_SzJTA"></iframe>


***


#### Attributs supportés

- **sandbox** : autorise des parties spécifiques de l’iframe (formulaires, scripts, popups,...). Par défaut tout est restreint.
- **src** : Spécifie la source de l’iframe
- **width** : Spécifie la largeur d’une iframe
- **height** : Spécifie la hauteur d’une iframe



---



# The end !
