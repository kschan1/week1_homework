
// Part 1 - Grabbing input from user in the browser
//
// Directions to students:
//
// Create an index.html file with a script tag in it that links to a index.js where your javascript code will reside
// Prompt the user for their name using the prompt function
// Use console.log to print to the console window a message including their name

var name = prompt('What is your Name?');
console.log('Hello ' + name);

// Part 2 - Multiplication Tables
//
// Write a for loop that will iterate from 0 to 10. For each iteration of the for loop,
// it will multiply the number by 9 and log the result (e.g. "2 * 9 = 18").
//
// Bonus: Use a nested for loop to show the tables for every multiplier from 1 to 10 (100 results total).

for (var i = 0; i <= 10; i++) {
  console.log(i*9);
}

// Part 3 - The Vegan Test
//
// On the menu tonight: Steak, fruit salad, tofurkey, pork chops.
//
// Directions to students:
//
// prompts the user for their menu choice and assign it to a variable.
//
// If a vegan can eat it, return "This cuisine is vegan friendly."
// Otherwise, return "Vegans beware!"
// For the sake of this exercise. Tofurkey is definitely vegan friendly.
// Hint: Two identical strings are considered to be equal to each other.

var menu = ['Steak', 'Fruit Salad', 'Tofurkey', 'Pork Chops'];
var menuChoice = prompt('What would you like on the menu? ');

  if (prompt === 'Fruit Salad') {
      console.log('This cuisine is Vegan friendly.');
    } else if (prompt === 'Tofurkey') {
      console.log('This cuisine is Vegan friendly.');
    } else {
    console.log('Vegans Beware!');
}
