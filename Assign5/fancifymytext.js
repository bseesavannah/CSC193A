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

const mooClick = () => {
    // Set and use the value property of the textarea
    const textarea = document.getElementById("myTextArea");
    let text = textarea.value;

    // Uppercase the text
    text = text.toUpperCase();

    // Splitting the text into sentences whenever a '.' is read
    const sentences = text.split(".");

    // Map over each sentence, adding '-Moo' to the final word
    const modifiedSentence = sentences.map(sentence => {
        // Trim white space
        sentence = sentence.trim();

        // Check if the sentence is empty
        if(sentence.length > 0) {
            // Split the sentence into words
            const words = sentence.split(" ");
            // Add '-Moo' to the final word
            words[words.length - 1] += "-Moo";
            // Join the words back into a sentence
            return words.join(" ");
        }
        return sentence; // If empty, return original
    });

    textarea.value = modifiedSentence.join(". ") + (sentences.length > 1 ? '.' : ''); // If there's a sentence, add a period. Else add nothing
}