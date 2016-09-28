// Create an array to hold your top choices (colours, movies, whatever).

var colors = ['Blue', 'Red', 'Green', 'Black'];

// For each choice, log to the screen a string like: "My #1 choice is blue."

for (var i = 0; i < colors.length; i++) {
  console.log('My first choice is ' + colors[0]);
}

// Bonus: Change it to log "My 1st choice, "My 2nd choice", "My 3rd choice", picking the right suffix for the number based on what it is.

for (var i = 0; i < colors.length; i++) {
  if (i === 0) {
    console.log('My first choice is ' + colors[0]);
  } else if (i === 1) {
    console.log('My second choice is ' + colors[1]);
  } else if (i === 2) {
    console.log('My third choice is ' + colors[2]);
  } else {
    console.log('My fourth choice is ' + colors[3]);
  }
}
