var fin = process.argv[2];

/*
Le programme doit afficher sur la sortie tous les entiers successifs
 à partir de 1 jusqu'au nombre donné en paramètre, sauf :
 Les multiples de 5 : afficher fizz Les multiples de 7 : afficher buzz
*/

// Première option
for(var i= 1 ; i < fin; i++)
{
    var fizzbuzz=false;

    if(i%5==0) {
        console.log("fizz");
        fizzbuzz = true;
    }
    if(i%7==0) {
        console.log("buzz");
        fizzbuzz = true;
    }
    if(!fizzbuzz) {
        console.log(i);
    }
}

// Seconde option
for(var i= 1 ; i < fin; i++)
{
    if((i % 5!= 0 )&& (i%7 != 0)) { // ni multiple de 5, ni multiple de 7
        console.log(i);
    } else {
        if(i%5==0) { // multiple de 5
            console.log("fizz");
        }
        if(i%7==0) { // multiple de 7
            console.log("buzzz");
        }
    }
}

// pour exécuter : node fizzbuzz.js <nombre>
// (variable%5==0) permet de tester si variable est un multiple de 5
// (variable%7==0) ----- multiple de 7
