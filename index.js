const btnColours = ["green", "red", "yellow", "blue"];

let gamePattern = [];
let userPattern = [];

let level = 0;
let started = false;

// Function to call the next pattern sequence
function nextSequence() {
    userPattern = [];
    level++;

    document.querySelector("#game-title").innerHTML = "Level  " + level;

    var randomNum = Math.floor(Math.random() * btnColours.length);
    var chosenColour = btnColours[randomNum];
    gamePattern.push(chosenColour);

    animation(chosenColour);
    sound(chosenColour);
}

// Check the players sequence against the computers
function checkAnswer(currentLevel){
    if(gamePattern[currentLevel] === userPattern[currentLevel]){
        if (userPattern.length === gamePattern.length) {
            setTimeout(() => {
                nextSequence();
            }, 1000);
        }
    } else {
        sound("wrong");

        var wrongBtn = document.querySelector("body");
        wrongBtn.classList.add("game-over");
        document.querySelector("#game-title").innerHTML = "GAME OVER! Press any key to restart!"

        setTimeout(() => {
            wrongBtn.classList.remove("game-over");
        }, 200);

        reset();
    }
}

// Game Over / Restart game Function
function reset(){
    level = 0;
    gamePattern = [];
    started = false;
}

// Keypress function to initiate game start
document.addEventListener("keypress",function(){
    if (!started) {
        document.querySelector("#game-title").innerHTML = "Level " + level;
        nextSequence();
        started = true;
    }
});

// Button Click Function
$(".btn").click(function(){
        var userColour = $(this).attr("id");
        userPattern.push(userColour);

        sound(userColour);
        animation(userColour);
        checkAnswer(userPattern.length-1);
});

// Button Animation Function
function animation(pressedKey){
    var activeBtn = document.querySelector("." + pressedKey);
    activeBtn.classList.add("clicked");

    setTimeout(function() {
        activeBtn.classList.remove("clicked");   
    }, 200);
}

// Sound Function
function sound(colour){
    var colour = new Audio('sounds/' + colour + '.mp3');
    colour.play();
}