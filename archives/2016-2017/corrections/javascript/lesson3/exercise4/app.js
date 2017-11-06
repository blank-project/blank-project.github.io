// Ligne 1 -> le X est à la position n
// Ligne 2 -> le X est à la position n - 1

// Ligne n -> le X est à la position 1
var n = process.argv[2];
for (var i = 1; i <= n; i++) {
    var s = "";
    for (var j = n; j >= 1; j--) {
        if (i == j) {
            s = s + (i % 2 == 0 ? "x " : "X ");
        } else {
            s += "O ";
        }
    }
    // console.log(s);
}

// Les conditions ternaires :
// condition ? valeurSiVrai : valeurSiFaux;
