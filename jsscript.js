// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

//GLOBAL VARIABLES
/* global $ */



// DOCUMENT READY FUNCTION BELOW

$("#shoot").click(function(){
  var computer = Math.random();
  var rps = $("#input").val();
    console.log(rps);
      $("#userChoice").text(rps);
    if (computer > 2/3) {
      $("#computerChoice").text('rock');
    } else if (computer > 1/3 ) {
      $('#computerChoice').text('scissors');
    } else {
      $('#computerChoice').text('paper');
    } 
    if (rps === "rock" & computer === "paper") {
      $('#winner').text("Computer won");
    } else if (rps === "rock" & computer === "scissors") {
      $('#winner').text("You won");
    } else if (rps === "rock" & computer === "rock") {
      $('#winner').text("It's a tie");
    } else if (rps === "paper" & computer === "paper") {
      $('#winner').text("It's a tie");
    } else if (rps === "paper" & computer === "rock") {
      $('#winner').text("You won");
    } else if (rps === "paper" & computer === "scissors") {
      $('#winner').text("Computer won");
    } else if (rps === "scissors" & computer === "paper") {
      $('#winner').text("You won");
    } else if (rps === "rock" & computer === "paper") {
      $('#winner').text("Computer won");
    } else if (rps === "scissors" & computer === "scissors") {
      $('#winner').text("It's a tie");
    }
    
});

