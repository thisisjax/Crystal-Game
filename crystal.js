var randomDiamond;
var losses;
var wins;
//4 Diamonds that produce random results
for (var i = 0; i < 4; i++){
//Every diamond will have a random number between 1-12
    var random = Math.floor(Math.random() * 12);
    console.log(random);

    var diamonds = $("<div>");
    diamonds.attr("class", 'diamonds');

    $(".diamonds").append(diamonds)
}



//Every diamond will have a random number between 1-12

//A new random number will generate every time we win or lose

//to those diamonds

//When clicking on the diamonds, it should add to the previous result

//Until it equals the random result

//If it is greater than the random result, we decrement the lost counter

//If it is equal then we increment the win counter