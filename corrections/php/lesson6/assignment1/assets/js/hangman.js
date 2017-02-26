const dico = ["blank","toto","ole","xylophone","mj"];

var display = document.getElementById("word");
var isPlaying = false;
var lives = 10;
var alphabet = "abcdefghijklmnopqrstuvwxyz".split("");

function newGame() {
  lives = 10;
  isPlaying = true;
  alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
  return dico[Math.floor(Math.random()*dico.length)];
}

function play(word, alphabet) {
  var toGuess = [];

  for (var i = 0; i < word.length; i++) {
    toGuess.push("_");
  }

  display.innerHTML = toGuess.join(" ");

  window.addEventListener("keyup", function(e) {
    playLetter(e.key.toLowerCase(), word, toGuess);
  });
}

function playLetter(pLetter, pWord, pToGuess) {
  //if letter is in alphabet
  //check for occurence in word
  if (alphabet.indexOf(pLetter) == -1) {
     console.log(pLetter, "not in alphabet");
     return;
  }

  //check if found letter
  var found = false;

  for (var i = 0; i < pWord.length; i++) {
    if (pWord[i] === pLetter) {
      pToGuess[i] = pLetter;
      found = true;
    }
  }
  display.innerHTML = pToGuess.join(" ");

  //remove life if letter not found in word
  if (!found) {
    lives--;
    console.log("removed a life");
  } else {
    alphabet.splice(alphabet.indexOf(pLetter),1);
    console.log(alphabet);
  }

  if (lives === 0 || pToGuess.indexOf("_") == -1) {
    endGame(lives, pWord);
  }
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
    publishScore(lives, "hangman");
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
