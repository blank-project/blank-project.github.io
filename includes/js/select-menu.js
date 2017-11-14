var items = document.getElementsByClassName('item');

modifyInfos(items[0]);

for (var i = 0; i < items.length; i++) {
  items[i].addEventListener('click', function(e) {
    modifyInfos(this);
  });
}

function modifyInfos(item) {
  var infos = document.getElementById('infos');

  for (var i = 0; i < item.attributes.length; i++) {
    var attr = item.attributes[i];

    if (attr.name.indexOf('data-') > -1) {
      var bind = attr.name.slice(5);
      var el = infos.querySelector('[data-bind=' + attr.name.slice(5) +  ']');

      switch(bind) {
        case 'link':
          el.href = attr.value;
          break;
        case 'infos':
          populateInfos(attr.value, el);
          break;
        default:
          el.innerText = attr.value;
          break;
      }
    }
  }
}


function populateInfos(infos, list) {
  while (list.firstChild) {
    list.removeChild(list.firstChild);
  }

  infos = JSON.parse(infos);

  for (var i in infos) {
    var li = document.createElement('li');

    li.innerHTML = '<span class="item-header">' + i + ' : </span>' + infos[i];

    list.appendChild(li);
  }
}
