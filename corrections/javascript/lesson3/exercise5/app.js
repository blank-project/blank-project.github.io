var treel = parseInt(process.argv[2]),
    s = "",
    bodyl = Math.floor(treel /4+1),
    bodyh = Math.floor(treel /5+1);

if (treel % 2 != 0) {
    console.log("Entrez un nombre pair please !");
    return 0;
}

console.log("building a tree with a width of",treel,"and a body of", bodyl,"x",bodyh);

for (var i = 0; i < treel + bodyh; i++) {
    s = "";
    if (i >= treel) {
        //build wood !
        s += buildWood(treel,bodyl);
    } else {
        //build leaves
        s += buildLeaves(treel, i);
    }
    console.log(s);
}

function buildLeaves(treel, i) {
  var tmps = "";
  for (var k = 0; k <= treel-i; k++) {
    tmps += " ";
  }
  for (var j = 0; j <= (i * 2 - 2); j++) {
    tmps += "*";
  }
  return tmps;
}

function buildWood(treel,bodyl) {
    var tmps = "";
    for (var k = 0; k <= treel-bodyl; k++) {
        tmps += " ";
    }
    for (var j = treel-bodyl +1; j < bodyl+ treel; j++) {
        tmps += "*";
    }
    return tmps;
}
