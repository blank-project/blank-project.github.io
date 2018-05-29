function insertAfter(listElem, value){
    let newElem = {'value': value, 'next': listElem.next};
    listElem.next = newElem;
    return newElem;
}


function append(list, value){
    if (list.last === null){
        list.first = {'value': value, 'next': null};
        list.last = list.first;
    }
    else{
        list.last = insertAfter(list.last, value);
    }
    list.length++;
}


function toList(elems){

    let list = {'first': null, 'last': null, 'length': 0};

    for (let nextValue of elems){
        append(list, nextValue);
    }
    return list;
}


function* iterList(list){
    if (!list.first) {
        return;
    }
    let current = list.first;
    while (current) {
        yield current.value;
        current = current.next;
    }
}


function listToString(list){
    let i = 0;
    let s = 'List (' + list.length + ' elements): [ ';
    for (let e of iterList(list)){
        s += e;
        if (i < list.length - 1) {
            s += ', ';
        }
        if (i === 9 && list.length > 10){
            s += '...';
            break;
        }
        i++;
    }
    s += ' ]';
    return s;
}


let l1 = toList(['a', 'b', 135]);
let l2 = toList([])
let l3 = toList('abcedfghijklmnop')

for (let l of [l1, l2, l3]){
    console.log(listToString(l));
}
