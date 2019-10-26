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

function switchColor(id, bid, id2) {
  var elem = document.getElementById(id);
  var button = document.getElementById(bid);
  if (elem.style.backgroundColor == "red") {
    button.innerText = "Claim";
    elem.style.backgroundColor = "green";
    document.getElementById(id2).innerHTML = null;
  } else {
    button.innerText = "Reopen";
    elem.style.backgroundColor = "red";
    document.getElementById(id2).innerHTML = new Date().toLocaleTimeString();
  }
  
  var button = document.getElementById(bid);
  (button.innerText == "Claim")
}

function getPlayerName('id1', 'b1', 'dt1'){
  var elem = document.getElementById(id);
  var name = prompt();
  
}







