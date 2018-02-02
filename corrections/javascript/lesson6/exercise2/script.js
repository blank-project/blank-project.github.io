
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    var data = JSON.parse(this.responseText), item;
    var markup;
    for (var i = 0; i < data.length; i++) {
        item = data[i];
        markup +=  render(item);
    }
    document.body.innerHTML = markup;
  }
};
xhttp.open("GET", "http://localhost:8000/data/data.json", true);
xhttp.send();

function render(item) {
  return '<div class="card">'
  + '<img class="card-img-top card-img" src="' + item.image.source + '" alt="' + item.image.alt + '" />'
  +   '<div class="card-block">'
  +     '<h4 class="card-title">' + item.name + '</h4>'
  +     '<p class="card-text">' +  item.description + '</p>'
  +     '<a href="#" class="btn btn-primary">' + item.price + " " + item.currency + '</a>'
  +   '</div>'
  + '</div>'
}
