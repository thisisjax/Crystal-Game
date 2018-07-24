var randomDiamond;
var loss = 0;
var win = 0;
var score = 0;

//This begins the game and restarts after win or loss
var resetAndStartGame = function () {

    randomDiamond = Math.floor(Math.random() * 101) + 19;
    console.log(randomDiamond);

    //Guess will generate a new random number

    // $(("#guess").html("<h2>randomDiamond</h2>"));

    //4 Diamonds that produce random results
    for (var i = 0; i < 4; i++) {

        //Every diamond will have a random number between 1-12
        var random = Math.floor(Math.random() * 12);
        console.log(random);

        var diamonds = $("<div>");
        diamonds.attr({
            "class": 'diamonds',
            "data-random": random
        });

        $(".diamonds").append(diamonds)
    }
}
resetAndStartGame();

//Reset
var reset = function () {

}

//When clicking on the diamonds, it should add to the previous result Until it equals the random result
$(document).on('click', ".diamonds", function () {
    var num = parseInt($(this).attr('data-random'));
    console.log(score);

    score += num;


    //If it is greater than the random result, we decrement the lost counter
    if (score > randomDiamond) {
        loss--;
        $("#loss").html(loss);
        score = 0 ;
        resetAndStartGame();
    }
    //If it is equal then we increment the win counter
    else if (score === randomDiamond) {
        win++;
        $("#win").html(win);
        score = 0 ;
        resetAndStartGame();
    }



});



//A new random number will generate every time we win or lose 






