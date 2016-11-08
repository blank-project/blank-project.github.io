#L'indentation
C'est une bonne pratique visant à expliciter la structure du code. Elle est utilisée dans tous les langages de programmation, certains l'utilisent même au stade de la compilation.



---



![oh no](ohno.jpg)



---



#L'indentation en HTML


***


Une seule règle : Lorsqu'une balise concerne le contenu d'une balise parente alors nous indentons celle-ci pour le mettre en valeur.

Exemple:

```html
<!DOCTYPE html>
<html><!-- la balise html n'est pas à l'intérieur de la balise DOCTYPE du coup elle reste au même niveau qu'elle -->
  <head> <!-- La balise head concerne le contenu de la balise html, elle est donc décalée par rapport à celle-ci -->
  </head> <!-- on referme toujours une balise niveau d'indentation auquel on l'a ouverte -->
  <body> <!-- la balise body concerne le contenu d ela balise html, elle est elle est donc décalée par rapport à celle-ci. Elle ne concerne pas le contenu de la balise head, elle est donc au même niveau. -->
  </body> <!-- on referme toujours une balise niveau d'indentation auquel on l'a ouverte -->
</html>  <!-- on referme toujours une balise niveau d'indentation auquel on l'a ouverte -->
```


***


##Quelques petits exercices


***


###Bien indenté ou pas ?

```html
<!DOCTYPE html>
<html>
  <head>
   </head>
  <body>
  </body>
</html>
```


***


:( La balise fermente `</head>` est décalée d'un espace en trop vers la droite <!-- .element: class="fragment" -->


***


###Bien indenté ou pas ?

```html
<!DOCTYPE html>
<html>
  <head>
  </head>
  <body>
   <p>Askip il faut écrire quelque chose</p>
  </body>
</html>
```


***


:( La balise `</p>` n'est pas assez décalée par rapport à la balise `<body>`. Elle ne l'est que d'un espace, alors que la balise body l'est de deux par rapport à la balise `<html>`. <!-- .element: class="fragment" -->


***


###Bien indenté ou pas ?

```html
<!DOCTYPE html>
<html>
  <head>
  </head>
  <body>
    <p><i>Askip il faut écrire quelque chose</i></p>
  </body>
</html>
```


***


:) <!-- .element: class="fragment" -->


***


###Bien indenté ou pas ?

```html
<!DOCTYPE html>
<html>
  <head>
  </head>
  <body>
    <p><i>Askip il faut écrire quelque chose</i></p>
    <ul>
      <li>
        <i>olé</i>
      </li>
      <li>
        <i>Il me fallait un deuxième élément ...</i>
     </li>
    </ul>
  </body>
</html>
```


***


:(  La dernière balise fermente `</li>` n'est pas assez décalée sur la droite. Il n'y a qu'un seule espace entre elle et la balise fermante `</ul>`. <!-- .element: class="fragment" -->


***


###À vous d'indenter le code suivant

```html
<!DOCTYPE html>
<html>
<head>
<title>Indentation</title>
</head>
<body>
<dl>
<dt>F</dt>
<dd>Insert definition here</dd>
<dt>T</dt>
<dd>Insert definition here</dd>
<dt>W</dt>
<dd>Insert definition here</dd>
</dl>
</body>
</html>
```


***


###La solution :

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Indentation</title>
  </head>
  <body>
    <dl>
      <dt>F</dt>
      <dd>Insert definition here</dd>
      <dt>T</dt>
      <dd>Insert definition here</dd>
      <dt>W</dt>
      <dd>Insert definition here</dd>
    </dl>
  </body>
</html>
```


***


###À vous d'indenter le code suivant

```html
<!DOCTYPE html>
<html>
<head>
<title>Indentation</title>
</head>
<body>
<ul>
<li>
<p>L'indentation</p>
<ul>
<li>c'est ...</li>
</ul>
</li>
</ul>
</body>
</html>
```


***


###La solution

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Indentation</title>
  </head>
  <body>
    <ul>
      <li>
        <p>L'indentation</p>
        <ul>
          <li>c'est ...</li>
        </ul>
      </li>
    </ul>
  </body>
</html>
```
