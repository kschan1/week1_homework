// Prompt the user for their name using the prompt function
// Use console.log to print to the console window a message including their name

var name = prompt('What is your name?');

console.log('Hi there ' + name + '!');

//Part 2

// Write a for loop that will iterate from 0 to 10.
//For each iteration of the for loop, it will multiply the number by 9 and log the result (e.g. "2 * 9 = 18").
// Bonus: Use a nested for loop to show the tables for every multiplier from 1 to 10 (100 results total).

for(var i = 0; i <= 10; i++){
  console.log(9 * i);
}



//Part 3

var choice = prompt('What would you like to eat steak, fruit salad, tofurkey or pork chops?');

if (choice === 'steak' || choice === 'pork'){

  console.log('Vegans beware!');

} else{
  console.log('This cuisine is vegan friendly.');
}
