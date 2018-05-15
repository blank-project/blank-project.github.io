// on va implémenter deux façons de trier un tableau
// ce sera l'occasion d'illustrer certains concepts d'algorithmique et de
// s'entraîner à la programmation en javascript

// tout d'abord on va se munir d'outils pour pouvoir tester nos algorithmes:


function isSorted(array){
    // écrivez une fonction qui vérifie qu'un tableau est trié
    // ...

}


// et de la fonction swap, qui échange les valeurs aux indices i et j d'un
// tableau

function swap(array, i, j){
    // par exemple swap ([a, b, c, d, e], 1, 4) -> [a, e, c, d, b]
    // swap ne fait pas de copie, mais modifie le tableau lui-même
}


// maintenant on va implémenter le tri par insertion:
// https://fr.wikipedia.org/wiki/Tri_par_insertion

function insertionSort(values){
    // ...
}

// vérifiez que le tri par insertion fonctionne (n'oubliez pas de tester les cas
// limites, par exemple un tableau vide, un tableau avec des valeurs identiques,
// déjà trié, ...)


// maintenant on va implémenter le tri rapide:
// https://fr.wikipedia.org/wiki/Tri_rapide

function quicksort(values){
    return quicksort_part(values, 0, values.length);
}


function quicksort_part(values, low, high){
    // effectue la partition puis appelle récursivement le tri sur chaque partie
}


function partition(values, low, high){
    // cette fonction modifie values et retourne un indice i tq low <= i <= high
    // tel que pour tout j < i values[j] <= values[i]
    // et pour tout j > i values[j] >= values[i]
}

// Exercices
// - Modifier les fonctions de tri pour qu'elles retournent le nombre de
//   comparaisons effectué
// - Quel algorithme semble plus efficace pour de petits tableaux? pour de
//   grands tableaux?
//
