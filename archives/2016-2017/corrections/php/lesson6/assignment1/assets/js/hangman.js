const dico = ["blank","toto","ole","xylophone","mj"];

var display = document.getElementById("word");
var displayLives = document.getElementById("lives");
var displayLettersPlayed = document.getElementById("lettersPlayed");
var displayLettersRemaining = document.getElementById("lettersRemaining");
var lettersPlayed = [];
var restart = document.getElementById("restart");
var isPlaying = false;
var lives = 10;
var alphabet = "abcdefghijklmnopqrstuvwxyz".split("");

restart.style.display = "none";

function newGame() {
  lives = 10;
  isPlaying = true;
  restart.style.display = "block";
  lettersPlayed = [];
  alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
  return dico[Math.floor(Math.random()*dico.length)];
}

function play(word, alphabet) {
  var toGuess = [];

  for (var i = 0; i < word.length; i++) {
    toGuess.push("_");
  }

  display.innerHTML = toGuess.join(" ");
  displayLettersRemaining.innerHTML = "Letters Remaining : " + alphabet.join(", ");
  displayLettersPlayed.innerHTML = "Letters Played : " + lettersPlayed.join(", ");
  displayLives.innerHTML = "Lives remaining : " + lives;

  window.addEventListener("keyup", function(e) {
    playLetter(e.key.toLowerCase(), word, toGuess);
  });
}

function playLetter(pLetter, pWord, pToGuess) {
  //if letter is in alphabet
  //check for occurence in word
  if (alphabet.indexOf(pLetter) == -1) {
     alert("Play a letter in the alphabet please !");
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
    lettersPlayed = lettersPlayed.concat(
      alphabet.splice(alphabet.indexOf(pLetter),1));
    console.log(alphabet);
  }


  displayLives.innerHTML = "Lives remaining : " + lives;
  displayLettersRemaining.innerHTML = "Letters Remaining : " + alphabet.join(", ");
  displayLettersPlayed.innerHTML = "Letters Played : " + lettersPlayed.join(", ");


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
    publishScore(lives, "hangman");
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
