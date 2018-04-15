// Vue.config.devtools = true
function getJSON(url, callback) {
  var request = new XMLHttpRequest();
  request.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var json = JSON.parse(this.responseText);
      callback(json);
    }
  };
  request.open('GET', url, true);
  request.send();
}

var app = new Vue({
    el : '#app',
    data : function() {
      return {
        search : '',
        gifs : []
      };
    },
    watch : {
      search : function(value) {
        var host = 'https://api.giphy.com',
          path = '/v1/gifs/search',
          query = '?',
          self = this;

        self.gifs = [];
        query += 'api_key=q55O1k5p1x2q5xRvOFXyBnhCum55sgMT';
        query += '&q=' + value;
        query += '&limit=25';

        getJSON(host + path + query, function(json) {
          self.gifs = json.data;
        });
      }
    }
});
