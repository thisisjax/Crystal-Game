
//Random diamonds Numbers
var diamondRandom = [Math.floor(Math.random()* 12) +1];
//Hide diamonds variables

//Guess
var guess = 0;
$("#guess").text(guess);
//Score
var score = 0;
$("#score").text(score);
console.log("Current Score is: " + score);
//Computer random guess
var guessRandom = [Math.floor(Math.random()* 101) +19];
//Shows score on page
$("#guess").text(guessRandom);
console.log("Guessed Number is: " + guess);
//Win Box
var winBox = [];
$("#win-box").text(wins);
console.log("Number of wins: " + wins);
//Loss Box
var lossBox = [];
$("#loss-box").text(losses);
console.log("Number of losses: " + losses);
//Win function
function wins() {
    wins++;
    $("#win-box").text(wins);
}
//Loss function
function losses() {
    losses++;
    $("#loss-box").text(losses);
}


//Create a loop for each crytal
for (var i = 0; i < guessRandom.length; i++){

}
//Create a Loop for Each crytasal
for (var i = 0; i < diamondVar.length; i++) {
//Give Img variable
var imageDiamond = $("<img>");
}
//Buttons
// $(document).ready(function(){
    // $("button").click(function(){
        // $("p").text("Hello World!")
    // });
// });
$("#button1").on("click", function(){
    score = parseInt(score) + parseInt(diamond1);
    $()
}
$("#button2").on("click", function(){}
$("#button3").on("click", function(){}
$("#button4").on("click", function(){}

//Declare Winn
if (guessRandom === score) {
    wins();
    console.log("You Won!")
}
else if (guessRandom < score) {
    losses();
    console.log("You Lose!")
}