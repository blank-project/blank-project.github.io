// The height of the tree, which is also half its width.    
var treeHeight = parseInt(process.argv[2]),
    // The width of a half of the trunk.
    bodyWidth = Math.floor(treeHeight / 4),
    // The height of the trunk.
    bodyHeight = Math.floor(treeHeight / 5) + 1;
var EMPTY = " ", LEAF = "*", TRUNK = "*";

if (treeHeight % 2 != 0) {
    console.log("Entrez un nombre pair please !");
    return 0;
}

console.log("building a tree with a height of", treeHeight, "and a body of", 2 * bodyWidth + 1, "x", bodyHeight);

// MAIN LOOP
for (var i = 0; i < treeHeight + bodyHeight; i++) {
    var s = "";
    if (i < treeHeight) {
      //build leaves
      s += buildLeaves(treeHeight, i, LEAF);
    } else {
      //build wood !
      s += buildWood(treeHeight, bodyWidth, TRUNK);
    }
    console.log(s);
}

/*
* Builds a line of the Leaves of the Tree
* Max width of the tree is 2 * pHeight + 1
*/
function buildLeaves(pHeight, i, pChar) {
  var tmps = "";
  // There is pHeight - i empty
  for (var k = 0; k < pHeight - i; k++) {
    tmps += " ";
  }
  // And 2 * i + 1 leaf
  for (var j = 0; j < (i * 2 + 1); j++) {
    tmps += pChar;
  }
  return tmps;
}

/*
* Builds a line of the trunk of the Tree
*/
function buildWood(pHeight, pWidth, pChar) {
    var tmps = "";
    for (var k = 0; k < pHeight - pWidth; k++) {
        tmps += " ";
    }
    for (var j = 0; j < pWidth * 2 + 1; j++) {
        tmps += pChar;
    }
    return tmps;
}
