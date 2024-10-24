/*
 * Starter file 
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
    console.log("Window loaded!"); // Log when the window is loaded

    // Event handler for 'Encrypt-it!' button
    const encryptButton = document.getElementById("encrypt-it");
    encryptButton.addEventListener("click", handleClick);

    // Event handler for 'Reset' button
    const resetButton = document.getElementById("reset");
    resetButton.addEventListener("click", handleReset);
  }

  // Add any other functions in this area (you should not implement your
  // entire program in the init function, for similar reasons that
  // you shouldn't write an entire Java program in the main method).

  function handleClick() {
    const inputTextArea = document.getElementById("input-text");
    const output = document.getElementById("result");

    // Grab the text to be encrypted
    const textToEncrypt = inputTextArea.value;

    // Encrypt the text
    const encryptedText = shiftCipher(textToEncrypt, 1);

    // When the Encrypt-it button is clicked, log it
    console.log("Button clicked!"); 

    output.innerText = encryptedText;
  }

  function handleReset() {
    const inputTextArea = document.getElementById("input-text");
    inputTextArea.value = ""; // Clear contents of the box
    console.log("Box Reset");
  }


  function shiftCipher(text, shift) {
    text = text.toLowerCase();
    let result = "";

    for(let i = 0; i < text.length; i++) {
      if(text[i] < 'a' || text[i] > 'z') {
        result += text[i];
      }
      else {
        let letterCode = text.charCodeAt(i); // will get the ASCII val of the letter

        /* Calculation:
          1. 'a' ASCII val = 97. Subtract it from the ASCII code of whatever letter is there, then shift it by adding the shift value
          2. % 26 is due to there being 26 letters in the alphabet.
          3. Add 97 back to turn it back into ASCII 
        */
        let shiftedCode = ((letterCode - 97 + shift) % 26) + 97;
        result += String.fromCharCode(shiftedCode);
      }
    }
    return result;
  }

})();
