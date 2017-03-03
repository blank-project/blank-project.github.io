var isPlaying = false;
var blockUser = false;
var audioElements = document.querySelectorAll("audio[data-key-code]");
var sequence = [];
var play = document.getElementById("play");
var restart = document.getElementById("restart");
var score = document.getElementById("score");
var soundsPlayed = [];

restart.style.display = "none";

restart.addEventListener("click", function(e) {
  newGame();
});

play.addEventListener("click", function(e) {
  //if user not playing, start a new Game
  if (!isPlaying) {
    newGame();
  }
});

function playTurn() {
  //empty user played sounds
  soundsPlayed = [];

  //block user
  blockUser = true;
  isPlaying = false;

  sequence.push(pickRandomAudioElement());

  var letUserPlayIn = playSequence();
  setTimeout(function() {
    blockUser = false;
    isPlaying = true;
  }, letUserPlayIn);
}

function newGame() {
  isPlaying = false;
  sequence = [];

  //hide buttons
  restart.style.display = "block";
  play.style.display = "none";

  score.innerHTML = 0;

  playTurn();
}

function playSequence() {
  for (var i = 0; i < sequence.length; i++) {
    setTimeout(playSound.bind(null, sequence[i]), i*500);
  }

  score.innerHTML = sequence.length - 1;

  return i*500;
}

function playSound(sound) {
  //retrienve input element
  var dataKeyCode = sound.getAttribute("data-key-code");
  var input = document.querySelector(".input[data-key-code='" + dataKeyCode + "']");

  if (input) {
    input.classList.add("playing");
  }

  sound.currentTime = 0;
  sound.play();

  //remove highlight
  setTimeout(function() {
    if (input) {
      input.classList.remove("playing");
    }
  }, 300);
}

function pickRandomAudioElement() {
  //pick random audio element from audio elements available
  return audioElements[Math.floor(Math.random() * audioElements.length)];
}

window.addEventListener("keydown", function(e) {

  if (!blockUser) {
    var audio = document.querySelector("audio[data-key-code='" + e.keyCode + "']");
    if (audio) {
      playSound(audio);
    } else {
      //no sounds to play
      return;
    }
  }

  if (isPlaying) {
    soundsPlayed.push(audio);

    for (var i = 0; i < soundsPlayed.length; i++) {
      if (soundsPlayed[i] !== sequence[i]) {
        publishScore(sequence.length - 1, 'musicbox');
      }
    }

    //if player played all sounds
    if (soundsPlayed.length === sequence.length) {
      isPlaying = false;
      setTimeout(function() {
        playTurn()
      }, 1000);
    }
  }
});
