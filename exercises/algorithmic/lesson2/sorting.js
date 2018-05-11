function insertion_sort(values){
    let n_comparisons = 0;
    for (let position = 0; position != values.length; position++){
        let insert_pos = position;
        while(insert_pos != 0 && values[insert_pos - 1] > values[insert_pos]){
            n_comparisons++;
            let tmp = values[insert_pos];
            values[insert_pos] = values[insert_pos - 1];
            values[insert_pos - 1] = tmp;
            insert_pos--;
        }
        if (insert_pos != 0){
            n_comparisons++;
        }
    }
    return n_comparisons;
}

for (let a of [[2, 3, 4, 1, 1, 89, -5], [], [1, 2, 3], [3, 2, 1]]){
    let n_comp = 0;
    let b = Array.from(a);
    n_comp = insertion_sort(b);
    console.log('[' + a + ']' + ' -> ' + '[' + b + ']' + ' (' + n_comp + ')');
}

///////////////////////////////////////////////////////////////////////////////
//
// - Écrire une fonction qui trie un tableau en place avec le tri par insertion
// - Écrire une fonction qui vérifie qu'un tableau est trié et tester
//   insertion_sort
// - Modifier la fonction insertion_sort pour qu'elle retourne le
// - nombre de comparaisons effectué
//
///////////////////////////////////////////////////////////////////////////////
