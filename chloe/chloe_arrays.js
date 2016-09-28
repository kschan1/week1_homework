// //# Your top choices
//
// Create an array to hold your top choices (colours, movies, whatever).
//
// For each choice, log to the screen a string like: "My #1 choice is blue."
//
// Bonus: Change it to log "My 1st choice, "My 2nd choice", "My 3rd choice",
// picking the right suffix for the number based on what it is.


var topChoices = ["blue", "the usual suspects", "whatever"];

var suffix = function(index) {
  if (index === 0) {
    return "st";
  } else if (index === 1) {
    return "nd";
  } else if (index === 2) {
    return "rd";
  } else {
    return "th";
  }
}

for (var i = 0; i < topChoices.length; i++) {
    console.log("My " + (i+1) + suffix(i) + " choice is " + topChoices[i]);
  }
