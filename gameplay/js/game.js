//stor Html Elements
let redInEl = document.getElementById("redIn");
let greenInEl = document.getElementById("greenIn");
let blueInEl = document.getElementById("blueIn");
let rgbStringOutEl = document.getElementById("rgbStrOut");
let displayEl = document.getElementById("display");
let box = document.getElementById("box");

//Event Listener
redInEl.addEventListener("input", rgbPreview);
greenInEl.addEventListener("input", rgbPreview);
blueInEl.addEventListener("input", rgbPreview);

//Event Function
function rgbPreview() {
  //input
  let rValue = +redInEl.value;
  let gValue = +greenInEl.value;
  let bValue = +blueInEl.value;

  //validate Clors
  //check rValue
  if (rValue < 0) {
    rValue = 0;
    redInEl.value = 0;
  } else if (rValue > 255) {
    rValue = 255;
    redInEl.value = 255;
  }
  //check rValue
  if (rValue < 0) {
    gValue = 0;
    grennInEl.value = 0;
  } else if (gValue > 255) {
    gValue = 255;
    greenInEl.value = 255;
  }

  //process: build rgb string (_,_,_)
  let rgbString = "rgb(" + rValue + "," + gValue + "," + bValue + ")";

  // Output display
  rgbStringOutEl.innerHTML = rgbString;
  displayEl.style.background = rgbString;
}
