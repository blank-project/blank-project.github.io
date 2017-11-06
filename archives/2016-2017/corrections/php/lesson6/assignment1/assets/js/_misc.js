function publishScore(pScore, pGame) {
  location.href = "_eog.php?score=" + pScore + "&game=" + (pGame ? pGame : "");
}
