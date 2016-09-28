// Dean's WDI Homework 27 Sep '16 - Day re Input from User via Browser and Using For Loops
// #### Directions to students:
//
// PART 1 PROBLEM

// 1. Create an index.html file with a script tag in it that links to a index.js where your javascript code will reside
// 2. Prompt the user for their name using the ```prompt``` function
// 3. Use ```console.log``` to print to the console window a message including their name


// PART 1 SOLUTION - Prompt for Name and Respond

var name = prompt("Hi, what's your name?");
  console.log('Thank you ' + name + ' nice to meet you. ');


// ### PART 2 PROBLEM - Multiplication Tables Fixed Multiplier

// Write a for loop that will iterate from 0 to 10. For each iteration of the for loop, it will multiply the number by 9 and log the result (e.g. "2 * 9 = 18").


// PART 2 SOLUTION - For Loop re Multiplication Tables

console.log('Part 2:  Hey ' + name + ' check out the 9 times tables below...');
for (var num = 0; num <= 10; num++) {
  console.log( num + ' x 9 = ' + num * 9)
}


// ### PART 2 * BONUS * PROBLEM - Multiplication Tables with 1 to 10 as multipliers

// Use a nested for loop to show the tables for every multiplier from 1 to 10 (100 results total).


// PART 2 * BONUS * SOLUTION - Nested For Loop for times tables with variable multipliers from 1 to 10

console.log('Part 2 Bonus:  Hey ' + name + ' check out all the times tables from 1 to 10');

for (var i = 1; i <= 10; i++) {
    for (var j = 1; j <= 10; j++) {
      var total = (i * j);
      console.log( i + ' x ' + j + ' = ' + total);
    }
}



// ### PART 3 PROBLEM - The Vegan Test

// *On the menu tonight: Steak, fruit salad, tofurkey, pork chops.*

// #### Directions to students:

// prompts the user for their menu choice and assign it to a variable.

// - If a vegan can eat it, return "This cuisine is vegan friendly."
// - Otherwise, return "Vegans beware!"
// - For the sake of this exercise. Tofurkey is definitely vegan friendly.

// **Hint**: Two identical strings are considered to be equal to each other.



// PART 3 SOLUTION - The Vegan Test


console.log("Part 3 - The Vegan Test");

// Prompt for menu choice - request a number corresponding to meal choice
var menuChoice = prompt("Please enter the number of the meal you'd like to order:     1. Steak   2. Fruit Salad   3. Tofurkey  4. Pork Chops");

// Check to see if valid response i.e. a menuChoice is a number
    if (isNaN(menuChoice) || menuChoice >4 || menuChoice <1) {

// If input is not a number as requested, alert the customer to reset and try again
        alert("Oops that was unexpected - please reset to start afresh and be sure to enter one of the meal numbers from the menu - thanks.");

// Check if menuChoice is a Vegan friendly meal
    }   else if (menuChoice == 2) {

// If menuChoice is Vegan friendly then tell them so
        alert("This cuisine is vegan friendly.");

      }   else if (menuChoice == 3) {

  // If menuChoice is Vegan friendly then tell them so
          alert("This cuisine is vegan friendly.");

// If menuChoice is NOT Vegan friendly then tell them so
    }   else {
        alert("Vegans beware!");
    }





// ##### Cheatsheet
// var color = prompt(“What is your favorite color?”)
// ```
// ---
// ---
