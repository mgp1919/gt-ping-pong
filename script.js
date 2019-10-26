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

function startTimer() {
    var time = 0;
    time=time+1;
    elem1.innerHTML='start in ' + time + ' seconds'; //Update span inner HTML
    setTimeout(startTimer,1000);
    console.log(time);
}
function setDate() {
  var now = new Date();
  document.getElementById('date_and_time').innerHTML= new Date();
  
}





