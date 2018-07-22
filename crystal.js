//Guess
var guess = 45;
$("#guess").text(guess);
//Score
var score = 0;
$("#score").text(score);
console.log("Current Score is: " + score);
//Computer random guess
var guessRandom = [Math.floor(Math.random()* 101) +19];
//Shows score on page
$("#guess").text(guessRandom);
console.log()
//Diamond Buttons Array
var diamondVar [10, 5, 3, 7];

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
$("#button1").on("click", function(){}
$("#button2").on("click", function(){}
$("#button3").on("click", function(){}
$("#button4").on("click", function(){}

var scope = {};
for(var i = 0; i < list.lenght; i++){ 
  scope['counter' + i] = 0;   // create scope.counter1, scope.counter2,...)
}
with(scope){
 // here you can acesess keys in the scope object like them variable on the function scope
 counter0++
}