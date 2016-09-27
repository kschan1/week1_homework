// Create an array to hold your top choices (colours, movies, whatever).
//
// For each choice, log to the screen a string like: "My #1 choice is blue."
//
// Bonus: Change it to log "My 1st choice, "My 2nd choice", "My 3rd choice",
// picking the right suffix for the number based on what it is.

var topThings = ['Blue', 'Red', 'Yellow'];

for (var i = 0; i < topThings.length; i++) {
  console.log('My ' + (i+1) + ' choice is ' + topThings[i]);
}


for (var i = 0; i < topThings.length; i++) {
  if (i === 0) {
    console.log('My ' + (i+1) + 'st choice is ' + topThings[i]);
  } else if (i === 1) {
    console.log('My ' + (i+1) + 'nd choice is ' + topThings[i]);
  } else {console.log('My ' + (i+1) + 'rd choice is ' + topThings[i]);}
}
