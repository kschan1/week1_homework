//Part 1
// 1. Create an index.html file with a script tag in it that links to a index.js where your javascript code will reside
// 2. Prompt the user for their name using the ```prompt``` function
// 3. Use ```console.log``` to print to the console window a message including their name
var name = prompt("What is your name?");
console.log("Your name is", name);

//Part 2
//Write a for loop that will iterate from 0 to 10. For each iteration of the for loop, it will multiply the number by 9 and log the result (e.g. "2 * 9 = 18").
//Bonus: Use a nested for loop to show the tables for every multiplier from 1 to 10 (100 results total).
for (var i = 1; i <= 10; i++) {
  var table = [];
  for (var j = 1; j <= 10; j++){
    table.push(i * j);
  }
  console.log(table.join(" "));
}

//Part 3
// *On the menu tonight: Steak, fruit salad, tofurkey, pork chops.*
//
// prompts the user for their menu choice and assign it to a variable.
//
//  - If a vegan can eat it, return "This cuisine is vegan friendly."
//  - Otherwise, return "Vegans beware!"
//  - For the sake of this exercise. Tofurkey is definitely vegan friendly.
//
// **Hint**: Two identical strings are considered to be equal to each other.
var dinner = prompt('On the menu tonight: steak, fruit salad, tofurkey, pork chops. What would you like to eat?');
if (dinner === 'tofurkey' || dinner === 'fruit salad'){
  console.log('This cuisine is vegan friendly.');
} else {
  console.log('Vegans beware!');
}
