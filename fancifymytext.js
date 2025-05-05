window.onload = function() {
    //When bigger button is clicked, alert pops up and changes font size
    document.getElementById("Bigger").onclick = function(){
        alert("Hello, world!");
        document.getElementById("TextAreaSize").style.fontSize = "24pt";
    };

    //When Moo is clicked, uppercases the text and adds -Moo to end of each word
    document.getElementById("MooButton").onclick = function(){
        var textArea = document.getElementById("TextAreaSize");
        var str = textArea.value;
        str = str.toUpperCase();
        var parts = str.split(" ");
        str = parts.join("-Moo ");
        document.getElementById("TextAreaSize").value = str + "-Moo";
    };
    
    document.getElementById("fancy").onchange = updateStyle;
    document.getElementById("boring").onchange = updateStyle;
};

function updateStyle(){
    alert("Style changed!");
    //When the fancy or boring button is clicked, it changes the text area style
    const textArea = document.getElementById("TextAreaSize");

    if (document.getElementById("fancy").checked) {
        textArea.style.fontWeight = "bold";
        textArea.style.color = "blue";
        textArea.style.textDecoration = "underline";
    } else {
        textArea.style.fontWeight = "normal";
        textArea.style.color = "black";
        textArea.style.textDecoration = "none";
    }
}