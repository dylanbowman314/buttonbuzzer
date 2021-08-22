var windowWidth = (window.innerWidth > 0) ? window.innerWidth : screen.width;
var windowHeight = (window.innerHeight > 0) ? window.innerHeight : screen.height;

console.log(windowWidth)

var buttonShort = document.createElement("button");
buttonShort.innerHTML = "BUZZ";

var body = document.getElementsByTagName("body")[0];

let buttonHeight = 400
let buttonWidth = 400

buttonShort.style.width = buttonWidth + 'px'; // setting the width to 200px
buttonShort.style.height = buttonHeight + 'px'; // setting the height to 200px
buttonShort.style.background = 'red'; // setting the background color to teal
buttonShort.style.color = 'white'; // setting the color to white
buttonShort.style.fontSize = '100px'; // setting the font size to 20px
buttonShort.style.position = "absolute"
buttonShort.style.top = (windowHeight/2 - buttonHeight/2)+ "px"
buttonShort.style.left = (windowWidth/2 - buttonWidth/2) + "px"
buttonShort.addEventListener("click", function() {playAudio()});

body.appendChild(buttonShort);

function playAudio() {
    let audio = new Audio('buzzer_sound.mp3');
    audio.play();
}