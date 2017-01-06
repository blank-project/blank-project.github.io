// The height of the tree, which is also half its width.
var n = parseInt(process.argv[2]);
var EMPTY = " ", LEAF = "*", TRUNK = "|";
var treeHeight = n;
var treeWidth = treeHeight;
var trunkHeight = parseInt(Math.ceil(n/2));
var trunkWidth = parseInt(Math.ceil(n/3));

if (n <= 0) {
    console.log("Entrez un nombre positif please !");
    return 0;
}

console.log("building a tree with a height of", treeHeight, "and a body of", 2 * trunkWidth + 1, "x", trunkHeight);

for(var i = 0; i < treeHeight; i++) {
  console.log(buildLine(treeHeight, i, LEAF));
}
for(var i = 0; i < trunkHeight; i++) {
  console.log(buildLine(treeWidth, trunkWidth, TRUNK));
}
/*
* Builds a line of the Leaves of the Tree
* Max width of the tree is 2 * pHeight + 1
* @param pHeight the height of the tree
* @param pLine the current line number
* @param pChar the character to use as leaf.
* @return the leaf line as a String.
*/
function buildLine(pHeight, pLine, pChar) {
  var line = "";
  for (var j = 0; j < pHeight - pLine - 1; j++) {
    line += EMPTY;
  }
  for (var j = 0; j <= 2 * pLine; j++) {
    line += pChar;
  }
  return line;
}
