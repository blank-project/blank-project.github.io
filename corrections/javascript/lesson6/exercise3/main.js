window.onload = function() {
  var benji = document.getElementById("benjamin"); //get button
  benji.addEventListener("click", makeRequest); //associate request to button
};

//request function
function makeRequest() {
  var request = new XMLHttpRequest(); //create request object*
  request.onreadystatechange = function() {
    //if request ok
    if (this.readyState == 4 && this.status == 200) {
      handleRequest(request);
    } else if (this.readyState == 4) {
      //if something went wrong
      alert("something went wrong...");
      console.log("request",request,"event",this);
    }
  };
  request.open("GET","data.json",true); //opening request to retrieve data.json asynchronously
  request.send(); //sending request
}

//handle request
function handleRequest(request) {
  var obj = JSON.parse(request.responseText);
  for (var key in obj) {
    var table = obj[key]; //tableau des éléments de chaque propriété

    // create HTML for the first key
    var element = document.createElement("h2");
    element.innerText = key; //add text to element
    document.body.appendChild(element); //append element to body

    //create list for each key
    var list = document.createElement("ul");
    for (var i = 0; i < table.length; i++) {
      var person = table[i]; //each student / teacher / admin

      //create list item for each person
      var listItem = document.createElement("li");
      for (var k in person) {
        //add text to each list item
        listItem.innerText +=person[k] + " ";
      }

      list.appendChild(listItem);
    }
    document.body.appendChild(list);
  }
}
