// //# Your top choices
//
// Create an array to hold your top choices (colours, movies, whatever).
//
// For each choice, log to the screen a string like: "My #1 choice is blue."
//
// Bonus: Change it to log "My 1st choice, "My 2nd choice", "My 3rd choice",
// picking the right suffix for the number based on what it is.


var topChoices = ["blue", "the usual suspects", "whatever"];


var suffix = function() {
  if (topChoices.indexOf === 0) {
    console.log("1st");
  } else if (topChoices.indexOf === 1) {
    console.log("2nd");
  } else if (topChoices.indexOf === 2) {
    console.log("3rd");
  }
}

for (var i = 0; i < topChoices.length; i++) {
    console.log("My " + suffix() + "choice is " + topChoices[i]);
  }
