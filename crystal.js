var randomDiamond;
var losses;
var wins;

randomDiamond = Math.floor(Math.random() * 101 ) +19;
console.log(randomDiamond);

//Guess will generate a new random number

// $(("#guess").html("<h2>randomDiamond</h2>"));

//4 Diamonds that produce random results
for (var i = 0; i < 4; i++){

//Every diamond will have a random number between 1-12
    var random = Math.floor(Math.random() * 12);
    console.log(random);

//A new random number will generate every time we win or lose 
    var diamonds = $("<div>");
    diamonds.attr({
        "class": 'diamonds',
        "data-random": random
    });

    $(".diamonds").append(diamonds)
}

//When clicking on the diamonds, it should add to the previous result Until it equals the random result
$(".diamonds").on('click', function () {
    // console.log($(this).attr('data-random')); 
})










//If it is greater than the random result, we decrement the lost counter

//If it is equal then we increment the win counter