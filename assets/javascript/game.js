

$(document).ready(function() { 

var randomResult;
var lose = 0;
var win = 0;
var counter = 0;



var startGame = function() {

  var randomResult = Math.floor(Math.random() * 101) + 19;


  $("#number-to-guess").text(randomResult);

  
    for (var i = 0; i < 4; i++) {

      var random = Math.floor(Math.random() * 11) + 1;
      console.log(random);

      var crystal = $("<div>");
          crystal.attr({
            "class": "crystal",
            "data-random" : random
          });
          

      $("#crystals").append(crystal);

    }

}
startGame();

//for some reason when i wrapped my code in a startGame function, it no longer logged the win or lose one reaching the random guess. :-( I got stuck here.
$(".crystal").on("click", function () {
      

        var crystalValue = parseInt($(this).attr("data-random"));

  
        counter += crystalValue;
        console.log(counter);

        if (counter > randomResult) {
          lose++;
          $("#lose").text("Losses: " + lose);
          console.log("You Lose!");

          startGame();
       }
        
       else if (counter === randomResult) {
          win++;
          $("#win").text("Wins: " + win);
          console.log("You Win!");

          startGame();
       }

    });


});