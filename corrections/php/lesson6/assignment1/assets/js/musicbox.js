var lives = 3;
var isPlaying = false;
var audioElements = document.querySelectorAll("audio[data-key-code]");
var sequence = [];
var play = document.getElementById("play");
var soundsPlayed = [];

play.addEventListener("click", function(e) {

  //if user not playing, start a new Game
  if (!isPlaying) {
    newGame();
  }

  //empty user played sounds
  soundsPlayed = [];

  sequence.push(pickRandomAudioElement());

  playSequence();
});

function newGame() {
  isPlaying = true;
  lives = 3;
  sequence = [];
}

function playSequence() {
  for (var i = 0; i < sequence.length; i++) {
    setTimeout(playSound.bind(null, sequence[i]), i*500);
  }
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

function endGame() {
  var score = soundsPlayed.length - 1;
  location.href = "_eog.php?score=" + score;
}

window.addEventListener("keydown", function(e) {
  var audio = document.querySelector("audio[data-key-code='" + e.keyCode + "']");

  if (audio) {
    playSound(audio);
  } else {
    //no sounds to play
    return;
  }

  soundsPlayed.push(audio);

  for (var i = 0; i < soundsPlayed.length; i++) {
    if (soundsPlayed[i] !== sequence[i]) {
      endGame();
    }
  }
});
