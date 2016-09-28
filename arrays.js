// # Your top choices
//
// Create an array to hold your top choices (colours, movies, whatever).
//

// For each choice, log to the screen a string like: "My #1 choice is blue."
//

var colours = ['green', 'red', 'blue', 'yellow'];

for (var index = 0; index < colours.length; index++) {
  console.log('My #1 choice is ' + colours[index])
}

// Bonus: Change it to log "My 1st choice, "My 2nd choice", "My 3rd choice", picking the right suffix for the number based on what it is.

for (var index = 0; index < colours.length; index++) {
  if(index === 0){
    console.log('My 1st choice is ' + colours[0]);
  }else if (index === 1){
    console.log('My 2nd choice is ' + colours[1]);
  }else if (index === 2){
    console.log('My 3rd choice is ' + colours[2]);
  }else {
    console.log('My 4th choice is ' + colours[3]);
  }
}
