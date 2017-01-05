var countdown = 30, interval,
timer = document.getElementsByClassName("timer")[0],
stop = document.getElementById("defuse");

interval = setInterval(function() {
  timer.innerHTML = countdown--;
}, 1000);

function defuse() {
  clearInterval(interval);
}

stop.addEventListener('click', function() {
  defuse();
  this.innerHTML = "Oooouuf";
});
