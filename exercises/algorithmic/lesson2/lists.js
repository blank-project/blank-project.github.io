
// on va commencer par implémenter une structure de liste chaînée
// https://fr.wikipedia.org/wiki/Liste_cha%C3%AEn%C3%A9e
//
// le premier type de liste qu'on va implémenter est une liste simplement
// chaînée (on ne peut la parcourir que du début vers la fin)


// une telle liste sera constituée de plusieurs éléments (les maillons de la
// chaîne) chacun contient une valeur et une référence à l'élément suivant:

class ForwardListElement {

    constructor(value, next=null){
        this.value = value;
        this.next = next;
    }

}


// vous devez maintenant implémenter la liste elle-même.
// commencez par vous demander quelles conditions doit respecter la liste
// pour être valide (par exemple, la valeur de l'attribut "next" de chaque
// élément est l'élément suivant; l'attribut "length" de la liste indique
// le nombre total d'éléments ...); chaque opération que vous ferez sur la
// liste devra préserver ces conditions.

class ForwardList {

    static insertAfter(listElem, value){
        // listElem est un élément dans une liste. Écrivez le code
        // qui insère juste après listElem, un nouvel élément qui contient
        // la valeur value.
    }

    constructor(elems=[]){
        // le constructeur d'une liste.
        // vous pouvez vous aider de la fonction append, qui rajoute un élément
        // à la fin de la liste (et que vous implémenterez plus tard)

        this.first = null;
        this.last = null;
        this.length = 0;

        // ...
    }

    append(value){
        // cette fonction prend une valeur et rajoute un élément à la fin de la
        // liste qui contient cette valeur.
        // n'oubliez pas de vous assurez que toutes les conditions qui
        // rendent une liste valide restent vérifiées après cette opération.
        // n'oubliez pas le cas d'une liste vide

    }



    *[Symbol.iterator]() {
        // pour qu'elle soit utile, il faut pouvoir parcourir la liste.
        // parcourez la liste et retournez une par une les valeurs qu'elle
        // contient en utilisant yield
    }

    inspect(){
        // util pour visualiser une liste
        let i = 0;
        let s = 'List (' + this.length + ' elements): [ ';
        for (let e of this){
            s += e;
            if (i < this.length - 1) {
                s += ', ';
            }
            if (i === 9 && this.length > 10){
                s += '...';
                break;
            }
            i++;
        }
        s += ' ]';
        return s;
    }
}


///////////////////////////////////////////////////////////////////////////////
//
//
// Exercices:
//
// - écrire une fonction qui trouve le plus grand élément d'une liste (*)
// - écrire une fonction qui trouve l'élément à la position i dans la liste (**)
// - écrire une fonction qui insère un élément à la position i dans la liste
//   (**)
// - écrire une fonction qui concatène deux listes (****)
// - écrire une fonction qui copie une liste en inversant l'ordre (****)
// - est-ce facile de parcourir une ForwardList en sens inverse? créer la classe
//   List, qui ressemble à ForwardList mais qu'on peut parcourir dans les deux
//   sens. (*****)
//
///////////////////////////////////////////////////////////////////////////////
