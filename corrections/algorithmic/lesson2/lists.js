class ForwardListElement {

    constructor(value, next=null){
        this.value = value;
        this.next = next;
    }

}


class ForwardList {

    static insertAfter(listElem, value){
        let newElem = new ForwardListElement(value, listElem.next);
        listElem.next = newElem;
        return newElem;
    }

    constructor(elems=[]){

        this.first = null;
        this.last = null;
        this.length = 0;

        for (let nextValue of elems){
            this.append(nextValue);
        }
    }

    *[Symbol.iterator]() {
        if (!this.first) {
            return;
        }
        let current = this.first;
        while (current) {
            yield current.value;
            current = current.next;
        }
    }

    append(value){
        if (this.last === null){
            this.first = new ForwardListElement(value);
            this.last = this.first;
        }
        else{
            this.last = ForwardList.insertAfter(this.last, value);
        }
        this.length++;
    }

    inspect(){
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


let l1 = new ForwardList(['a', 'b', 135]);
let l2 = new ForwardList()
let l3 = new ForwardList('abcedfghijklmnop')

for (let l of [l1, l2, l3]){
    console.log(l);
}

///////////////////////////////////////////////////////////////////////////////
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
