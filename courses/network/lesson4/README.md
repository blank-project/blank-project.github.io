# Internet & Réseau : Le protocole HTTP



---



## Le protocole HTTP

HTTP (HyperText Transfer Protocol) est un protocole de communication client-serveur développé pour le World Wide Web. Il a été inventé par Tim-Berner Lee au début des années 1990.

Le client (en général un navigateur Web) envoie une Requête HTTP, et le serveur lui renvoie une Réponse.

Un serveur HTTP utilise par défaut le port TCP 80.


***


## Exemple : requête

```http
GET / HTTP/1.1
Host: blank.bellevillecitoyenne.fr
Accept:	text/html,...
Accept-Language: fr,...
User-Agent: Mozilla/5.0 (X11; Ubuntu; Linux) Firefox/58.0
```


***


## Exemple : réponse

```http
HTTP/1.1 200 OK
Content-Length: 2607
Content-Type: text/html
Date: Mon, 29 Jan 2018 21:33:11 GMT
Server: Apache

<!DOCTYPE html>
<html>
  <head>
    <title>_blank</title>
    ...
```



---



## Méthodes HTTP

Dans le protocole HTTP, une méthode est une commande spécifiant un type de requête, c'est-à-dire qu'elle demande au serveur d'effectuer une action.

En général l'action concerne une ressource identifiée par l'URL qui suit le nom de la méthode.

Il existe de nombreuses méthodes, les plus courantes étant GET, HEAD et POST.


***


###  GET et HEAD

**GET**

C'est la méthode la plus courante pour demander une ressource. Une requête GET est sans effet sur la ressource, il doit être possible de répéter la requête sans effet.

**HEAD**

Cette méthode ne demande que des informations sur la ressource, sans demander la ressource elle-même.


***


### POST

Cette méthode est utilisée pour transmettre des données en vue d'un traitement à une ressource (le plus souvent depuis un formulaire HTML).

Le résultat peut être la création de nouvelles ressources ou la modification de ressources existantes.



---



### Codes HTTP

[Article Wikipédia](https://fr.wikipedia.org/wiki/Liste_des_codes_HTTP)

Le code HTTP permet de déterminer le résultat d'une requête HTTP.

Les plus connus sont :
- 200 (OK)
- 304 (Not Modified)
- 404 (Not Found)
- 500 (Internal Server Error)



---



### En-têtes HTTP

> En-tête : En informatique, groupe d'informations de service placé devant un ensemble de données à traiter en bloc pour l'identifier et, éventuellement, définir les traitements ou les cheminements qu'il doit subir. (Larousse)


***


[Article Wikipédia](https://en.wikipedia.org/wiki/List_of_HTTP_header_fields)

Les en-têtes HTTP servent à définir des informations supplémentaires concernant les données. Par exemple :

- Referer : le site d'où provient la requête
- Host : le nom de domaine cible.
- Content-Type : définit le contenu d'une réponse.
- Location : l'URL cible, dans le cas d'une redirection.
