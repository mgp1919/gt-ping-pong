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

function switchColor(id, bid, id2, id3) {
  var elem = document.getElementById(id);
  var button = document.getElementById(bid);
  if (elem.style.backgroundColor == "red") {
    button.innerText = "Claim";
    elem.style.backgroundColor = "green";
    document.getElementById(id2).innerHTML = null;
    document.getElementById(id3).innerHTML = null;
  } else {
    var cont = alert(id3);
    if(cont == true) {
      button.innerText = "Reopen";
      elem.style.backgroundColor = "red";
      document.getElementById(id2).innerHTML = new Date().toLocaleTimeString();
    }

  }
  
  var button = document.getElementById(bid);
  (button.innerText == "Claim")
}



function alert(id) {
  var person = prompt("Please enter your name:");
  var person2 = prompt("Please enter the second player:");
  if(person != "" && person2 != "" && person != null && person2 != null) {
    document.getElementById(id).innerHTML = "Player 1: " + person + "\n Player 2: " + person2;
    return true;
  }
  return false;
}

var h2 = document.getElementsByTagName('h2')[0],
    start = document.getElementById('start'),
    stop = document.getElementById('stop'),
    clear = document.getElementById('clear'),
    seconds = 0, minutes = 0, hours = 0,
    t;

function add() {
    seconds++;
    if (seconds >= 60) {
        seconds = 0;
        minutes++;
        if (minutes >= 60) {
            minutes = 0;
            hours++;
        }
    }
    
    h2.textContent = (hours ? (hours > 9 ? hours : "0" + hours) : "00") + ":" + (minutes ? (minutes > 9 ? minutes : "0" + minutes) : "00") + ":" + (seconds > 9 ? seconds : "0" + seconds);

    timer();
}
function timer() {
    t = setTimeout(add, 1000);
}
timer();






