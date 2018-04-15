function updateTime() {
  var horloge = document.getElementById('horloge');
  horloge.innerText = new Date();
}

updateTime();
var interval = setInterval(updateTime, 500);
