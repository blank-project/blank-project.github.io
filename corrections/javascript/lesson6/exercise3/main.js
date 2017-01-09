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
  console.log(request.responseText);
}
