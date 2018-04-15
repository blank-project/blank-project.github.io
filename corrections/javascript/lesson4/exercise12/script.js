function isVerbFirstGroup(verb) {
  return getGroup(verb) == 1;
}

function getGroup(verb) {
  if (typeof verb !== 'string') {
    return -1;
  }
  if (verb == "aller") {
    return 3;
  }
  if (verb.endsWith("er")) {
    return 1;
  }
  if (verb.endsWith("ir") && !verb.endsWith("oir")) {
    return 2;
  }
  return 3;
}

/*
function isVerbFirstGroup(verb) {
  return typeof verb == 'string'
    && verb != "aller"
    && verb.endsWith("er");
}
*/

console.log(isVerbFirstGroup("chanter"), '-> true');
console.log(isVerbFirstGroup("aller"), '-> false');
console.log(isVerbFirstGroup("voir"), '-> false');
console.log(isVerbFirstGroup([ "voir" ]), '-> false');

function getRadical(verbe) {
  if (getGroup(verbe) == 1 || getGroup(verbe) == 2) {
     // 2 is the size of the termination.
    return verbe.substring(0, verbe.length - 2);
  }
  return null;
}

var pers = ["je", "tu", "il-elle", "nous", "vous", "ils-elles"];
var term = [
  ["e", "es", "e", "ons", "ez", "ent"],
  ["is", "is", "it", "issons", "issez", "issent"]
]

function conjuguer(verbe, pronom) {
  var group = getGroup(verbe);
  if (group != 1 && group != 2) {
    return null;
  }
  if (pronom != undefined) {
      return pers[pronom - 1] + " " + getRadical(verbe) + term[group - 1][pronom -1];
  }
  // Manage case where we do not have a 'pronom' parameter.
  var tab = [];
  for (var i = 0; i < pers.length; i++) {
    tab[i] = conjuguer(verbe, i + 1);
  }
  return tab;
}
