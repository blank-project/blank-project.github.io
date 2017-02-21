const dico = ["blank","toto","ole","xylophone","mj"];

var isPlaying = false;
var lives = 10;
var alphabet = "abcdefghijklmnopqrstuvwxyz".split("");

function newGame() {
  lives = 10;
  isPlayling = true;
  alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
  return dico[Math.floor(Math.random()*dico.length)];
}

function play(word, alphabet) {
  var toGuess = [],
      lettersFound = 0;

  for (var i = 0; i < word.length; i++) {
    toGuess.push("_");
  }

  console.log(toGuess);

  window.addEventListener("keyup", function(e) {

      //if letter is in alphabet
      //check for occurence in word
      if (alphabet.indexOf(e.key) > -1) {
        //check if found letter
        var found = false;

        for (var i = 0; i < word.length; i++) {
          if (word[i] === e.key) {
            toGuess[i] = e.key;
            lettersFound++;
            found = true;
          }
        }

        console.log(toGuess);

        //remove life if letter not found in word
        if (!found) {
          lives--;
          console.log("removed a life");
        } else {
          alphabet.splice(alphabet.indexOf(e.key),1);
          console.log(alphabet);
        }
      } else {
        console.log(e.key, "not in alphabet");
      }

      if (lives === 0) endGame(lives, word);
      else if (lettersFound === word.length) endGame(lives, word);
  });
}
//end game
function endGame(lives, word) {
  isPlaying = false;

  window.removeEventListener("keyup", function(e) {
    playTurn(e, word, toGuess, lettersFound);
  });

  //if player abandonned
  if (word.length === 0) {
    console.log("oh tu as abandonné, t'es mauvais(e)");
    return;
  }

  //if player won
  if (lives > 0) {
    console.log(word, " bien ouej !");
    return;
    //if player lost
  } else {
    console.log(word, "ohhhh t'es nul(le)");
    return;
  }
}

//add event listener to button to create new game
var newGameButton = document.getElementById("newgame");

newGameButton.addEventListener("click", function(e) {
  play(newGame(), alphabet);
  e.target.style.display = "none";
});

restart.addEventListener("click", function(e) {
  //reload page
  window.location.reload();
});
