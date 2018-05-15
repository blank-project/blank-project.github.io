function swap(array, i, j){
    let tmp = array[i];
    array[i] = array[j];
    array[j] = tmp;
}


function insertion_sort(values){
    let n_comparisons = 0;
    for (let position = 0; position != values.length; position++){
        let insert_pos = position;
        while(insert_pos != 0 && values[insert_pos - 1] > values[insert_pos]){
            n_comparisons++;
            swap(values, insert_pos, insert_pos -1);
            insert_pos--;
        }
        if (insert_pos != 0){
            n_comparisons++;
        }
    }
    return n_comparisons;
}


function quicksort(values){
    return quicksort_part(values, 0, values.length);
}

function quicksort_part(values, low, high, counter=null){
    if (counter === null){
        counter = {'n_comparisons': 0};
    }
    if(high - low < 2){
        return counter.n_comparisons;
    }
    let sep = partition(values, low, high, counter);
    quicksort_part(values, low, sep, counter);
    quicksort_part(values, sep, high, counter);
    return counter.n_comparisons;
}


function partition(values, low, high, counter){
    let pivot = values[high - 1];
    let up = low;
    let down = high - 1;
    while(true){
        while(up < high - 1 && values[up] < pivot){
            counter.n_comparisons++;
            up++;
        }
        if(up < high - 1){
            counter.n_comparisons++;
        }
        while(down > low && values[down] > pivot){
            counter.n_comparisons++;
            down--;
        }
        if(down > low){
            counter.n_comparisons++;
        }
        if(down <= up){
            return up;
        }
        swap(values, up, down)
        up++;
        down--;
    }
    return up;
}

function str(array){
    let i = 0;
    let s = '(' + array.length + ' elements): [ ';
    for (let e of array){
        s += e;
        if (i < array.length - 1) {
            s += ', ';
        }
        if (i === 9 && array.length > 10){
            s += '...';
            break;
        }
        i++;
    }
    s += ' ]';
    return s;
}

arrays = [[2, 3, 4, 1, 1, 89, -5], [], [1, 2, 3], [3, 2, 1], [1, 1, 1, 1, 1]];
let ra = new Array(200);
for (let i=0; i != ra.length; i++){
    ra[i] = Math.random();
}
arrays.push(ra);

console.log('insertion sort:\n===============')
for (let a of arrays){
    let b = Array.from(a);
    let n_comp = insertion_sort(b);
    console.log(str(a) + ' -> ' + str(b) + ' (' + n_comp + ' comparisons)');
}


console.log('\n\nquicksort:\n===============')
for (let a of arrays){
    let b = Array.from(a);
    let n_comp = quicksort(b);
    console.log(str(a) + ' -> ' + str(b) + ' (' + n_comp + ' comparisons)');
}


///////////////////////////////////////////////////////////////////////////////
//
// - Écrire une fonction qui trie un tableau en place avec le tri par insertion
// - Écrire une fonction qui vérifie qu'un tableau est trié et tester
//   insertion_sort
// - Modifier la fonction insertion_sort pour qu'elle retourne le
// - nombre de comparaisons effectué
// - Écrire une fonction qui trie un tableau en place avec le tri rapide
// - Quel algorithme semble plus efficace pour de petits tableaux? pour de
//   grands tableaux?
//
///////////////////////////////////////////////////////////////////////////////
