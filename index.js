const btnColours = ["green", "red", "yellow", "blue"];

let gamePattern = [];
let userPattern = [];

let level = 0;
let started = false;

function nextSequence() {
    var randomNum = Math.floor(Math.random() * btnColours.length);
    var chosenColour = btnColours[randomNum];
    gamePattern.push(chosenColour);

    document.querySelector('#' + chosenColour);
    sound(chosenColour);
    btnAnimation(chosenColour);
}

document.addEventListener("keydown", function(){
    if (!started) {
        document.querySelector("#game-title").innerHTML = "Level " + level;
        nextSequence();
        started = true;
    }
});


document.querySelector(".btn").addEventListener("click", function(){
    
});

function btnAnimation(pressedKey){
    var activeBtn = document.querySelector(`.${pressedKey}`);
    activeBtn.classList.add("clicked");

    setTimeout(function() {
        activeBtn.classList.remove("clicked");   
    }, 200);
}

function sound(colour){
    var colour = new Audio('sounds/' + colour + '.mp3');
    colour.play();
}