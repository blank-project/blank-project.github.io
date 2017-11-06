function ajaxRequest(pMethod, pUrl, pCallback) {
  var request = new XMLHttpRequest();
  request.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        pCallback(request.responseText);
      }
  };
  request.open(pMethod, pUrl, true);
  request.send();
}
