
new Vue({
  el:"#app",
  data: function() {
    return {
      images: [],
      index: 0
    }
  },
  computed: {
    img: function() {
      return this.images[this.index];
    }
  },
  created: function() {
    console.log('coucou');
    var request = new XMLHttpRequest();
    var that = this;
    request.onreadystatechange = function() {
      if (this.readyState === 4 && this.status === 200) {
        that.images = JSON.parse(this.responseText);
      }
    }
    request.open('GET', 'http://localhost:3000', true);
    request.send();
  },
  methods: {
    previous: function() {
      if (this.index === 0) this.index = this.images.length -1;
      else this.index--;
    },
    next: function() {
      if (this.index === this.images.length - 1) this.index = 0;
      else this.index++;
    }
  }
})
