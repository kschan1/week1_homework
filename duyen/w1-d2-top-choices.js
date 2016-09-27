console.log('works')

// Your top choices

// Create an array to hold your top choices (colours, movies, whatever).

var color = ['black', 'green', 'blue'];
var city = ['NYC', 'Paris', 'Berlin'];
var dessert = ['creme brulee', 'rhubarb pie', 'ice cream'];

// For each choice, log to the screen a string like: "My #1 choice is blue."

for (var i = 0; i < color.length; i++) {
  console.log('My #' + [i + 1] + ' colour choice is ' + color[i] + '.');
  console.log('My #' + [i + 1] + ' city choice is ' + city[i] + '.');
  console.log('My #' + [i + 1] + ' dessert choice is ' + dessert[i] + '.');
}

// Bonus: Change it to log "My 1st choice, "My 2nd choice", "My 3rd choice", picking the right suffix for the number based on what it is.

var suffix = ['1st', '2nd', '3rd'];

for (var i = 0; i < color.length; i++) {
  console.log('My ' + suffix[i] + ' colour choice is ' + color[i] + '.');
  console.log('My ' + suffix[i] + ' city choice is ' + city[i] + '.');
  console.log('My ' + suffix[i] + ' dessert choice is ' + dessert[i] + '.');
}
