// CSC 196W 
// Minh Nguyen
// JavaScript code for fancifymytext

function makeTextBigger() {   
   document.getElementById("textInput").style.fontSize = "24pt";
}
   
function makeTextBoring() {
    if (document.getElementById("boring").checked == true) {    
        document.getElementById("textInput").style.fontSize = "10pt";
        document.getElementById("textInput").style.color = "black";
        document.getElementById("textInput").style.textDecoration = "none";
        document.getElementById("boring").checked = false;
    }
}

function makeTextFancy() {
    if (document.getElementById("fancy").checked == true) {
        document.getElementById("textInput").style.color = "blue";
        document.getElementById("textInput").style.textDecoration = "underline";
        document.getElementById("fancy").checked = false;
    }
}

function moo() {
    var mooElem = document.getElementById("textInput");
    mooElem.value = mooElem.value.toUpperCase();
    var parts = mooElem.value.split(".");
    for (var i = 0; i< parts.length; i++){
        parts[i] = parts[i] + "Moo";
    }
    mooElem.value = parts.join(".");
}