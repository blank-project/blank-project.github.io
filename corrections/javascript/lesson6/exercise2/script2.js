var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    var response = JSON.parse(this.responseText);
    for (var i = 0; i < response.length; i++) {
      var item = response[i];
      var div = document.createElement("div");
      var name = document.createElement('span');
      name.innerText = item.name;
      div.appendChild(name);
      var img = document.createElement('img');
      img.setAttribute("src", item.image.source);
      img.setAttribute("alt", item.image.alt);
      div.appendChild(img);
      document.body.appendChild(div);
      div.style.display = 'inline-block';
    }
  }
};
xhttp.open("GET", "http://localhost:8000/data/data.json", true);
xhttp.send();
