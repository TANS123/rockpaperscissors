// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

//GLOBAL VARIABLES
/* global $ */



// DOCUMENT READY FUNCTION BELOW

$("#shoot").click(function(){
    var rps = $("#input").val();
    if (rps === "rock"){
        $("#userChoice").text(rps);
        $("#computerChoice").text("scissors");
        // } else if (rps === scissors)
    }
});
