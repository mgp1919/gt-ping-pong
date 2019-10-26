/* If you're feeling fancy you can add interactivity 
    to your site with Javascript */

// prints "hi" in the browser's dev tools console

function setButtonColor(_this) {
  _this.style.backgroundColor = "red";
}

function changeColor1(newColor, id) {
  var elem = document.getElementById(id);
  elem.style.backgroundColor = "red";
}

function changeColor2(newColor, id) {
  var elem = document.getElementById(id);
  elem.style.backgroundColor = "green";
}

function switchColor(id, bid) {
  var elem = document.getElementById(id);
  var button = document.getElementById(bid);
  if (elem.style.backgroundColor == "red") {
    button.innerText = "Open";
    elem.style.backgroundColor = "green";
  } else {
    button.innerText = "Closed";
    elem.style.backgroundColor = "red";
  }
  
  var button = document.getElementById(bid);
  (button.innerText == "Open")
}

var start = Date.now();
setInterval(function() {
  document.getElementById('difference').innerHTML = Date.now() - start;
}, 1000);




