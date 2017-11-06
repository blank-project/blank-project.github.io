window.addEventListener('load', function() {
  var countdown = 30, interval, timeout,
  timer = document.getElementsByClassName("timer")[0],
  stop = document.getElementById("defuse");

  interval = setInterval(function() {
    timer.innerHTML = --countdown;
    if (countdown == 0) {
      explode();
    }
  }, 1000);

  function defuse() {
    clearInterval(interval);
    stop.innerHTML = "Oooouuf !";
  }

  function explode() {
    var span;
    clearInterval(interval);
    clearTimeout(timeout);
    document.body.innerHTML = '';
    span = document.createElement('span');
    document.body.appendChild(span);
    span.innerHTML = 'BOOOM !';
    span.style.fontSize = '10em';
    document.body.style.backgroundColor = 'red';
  }

  stop.addEventListener('click', function() {
    stop.innerHTML = "Je désamorce, couvrez moi !";
    timeout = setTimeout(defuse, 5000);
  });
});
