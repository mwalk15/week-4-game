console.log("linked!")

var randomResult
var lose
var win

var randomResult = Math.floor(Math.random() * 101) + 19;
console.log(randomResult);

  $("#number-to-guess").text(randomResult);

  var counter = 0;

  
    for (var i = 0; i < 4; i++) {

      var random = Math.floor(Math.random() * 11) + 1;
      console.log(random);

      var crystal = $("<div>");
          crystal.attr({
            "class": "crystal",
            "data-random" : random
          });
          

      $("#crystals").append(crystal);
      console.log("crystal image");

    }

    $(".crystal").on("click", function () {
        console.log($(this));
    })
    var crystalValue = ($(this).attr("data-crystalvalue"));
    crystalValue = parseInt(crystalValue);
     //We then add the crystalValue to the user's "counter" which is a global variable.
    // Every click, from every crystal adds to the global counter.
   counter += crystalValue;

    // All of the same game win-lose logic applies. So the rest remains unchanged.
  //  alert("New score: " + counter);

    //if (counter === randomNumber) {
      //alert("You win!");
    //}

    //else if (counter >= randomNumber) {
      //alert("You lose!!");
    //}

