const showAlert = () => {
    // The Alert
    alert("Hello, world!");
}

const changeSize = () => {
    // Get the textarea element by ID
    const textarea = document.getElementById("myTextArea");
    
    // Change font size
    textarea.style.fontSize = "24pt";
}

const biggerClick = () => {
    showAlert();
    changeSize();
}

const changeStyle = () => {
    // Get the textarea element by ID
    const textarea = document.getElementById("myTextArea");

    // Logic for which button is clicked
    if (document.getElementById("fancyShmancy").checked) {
        // Apply styles
        textarea.style.fontWeight = "bold";
        textarea.style.color = "blue";
        textarea.style.textDecoration = "underline";
    }
    else if(document.getElementById("boringBetty").checked) {
        textarea.style.fontWeight = "normal";
        textarea.style.color = "";
        textarea.style.textDecoration = "none";
    }
}