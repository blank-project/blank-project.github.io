var s = "";
for (var i = 0; i < process.argv[2]; i++) {
    s = "";
    for (var j = 0; j < process.argv[2]; j++) {
        if (i == j) {
            s += "1 ";
        } else {
            s += "0 ";
        }
    }
    console.log(s);
}
