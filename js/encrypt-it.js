/*
 * Starter file 
 * Minh Nguyen
 * CSC 196W
 */
(function() {
  "use strict";

  /**
   * The starting point in our program, setting up a listener
   * for the "load" event on the window, signalling the HTML DOM has been constructed
   * on the page. When this event occurs, the attached function (init) will be called.
   */
  window.addEventListener("load", init);

  /**
   * TODO: Write a function comment using JSDoc.
   */
  function init() {
    // Note: In this function, we usually want to set up our event handlers
    // for UI elements on the page.
    const encryptIt = document.getElementById('encrypt-it')
    encryptIt.addEventListener("click", click, false);
  }

  // Add any other functions in this area (you should not implement your
  // entire program in the init function, for similar reasons that
  // you shouldn't write an entire Java program in the main method).
  function click() {
    console.log("Button clicked!");
    const inputText = document.getElementById('input-text');
    const resultArea = document.getElementById('result');
    resultArea.textContent = shiftCipher(inputText.value);
  }

  function shiftCipher(text) {
    text = text.toLowerCase();
    const upgrade = 5;
    let result = '';
    for (let i = 0; i <text.length; i++) {
      if (text.charCodeAt(i) >= 97 && text.charCodeAt(i) <= 122) {
        if (text[i] == 'y') {
          result += String.fromCharCode(97);
        }else if (text[i] == 'z') {
          result += String.fromCharCode(98);
        } else {
          result += String.fromCharCode(text.charCodeAt(i) + upgrade);
  
        }
      } else {
        result += text[i];
      }
      
    }
    return result;
  }
})();
