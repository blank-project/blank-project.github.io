var request = new XMLHttpRequest();
request.onreadystatechange = function() {
  if (this.readyState === 4 && this.status === 200) {
    buildTondeuses(JSON.parse(this.responseText));
  }
};

request.open('GET', 'http://localhost:8000/data.json', true);
request.send();

function buildTondeuses(tondeuses) {
  for (var i = 0; i < tondeuses.length; i++) {
    build(tondeuses[i]);
  }
}

function createContainer() {
  var container = document.createElement('div');
  container.classList.add('tondeuse');
  return container;
}

function createTitle(title) {
  var h1 = document.createElement('h1');
  h1.innerText = title;
  return h1;
}

function createImage(img) {
  var image = document.createElement('img');
  image.setAttribute('src', img.source);
  image.setAttribute('alt', img.alt);
  return image;
}

function build(t) {
  var main = document.querySelector('main');
  var container = createContainer();

  // création du title
  var title = createTitle(t.name);
  container.appendChild(title);

  // création de l'image
  var image = createImage(t.image);
  container.appendChild(image);

  main.appendChild(container);
}
