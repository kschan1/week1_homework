// Use console.log to print to the console window a message including their name

var userColor = prompt('What is your favorite color?');

console.log('Your favortite color is ' + userColor);

// Write a for loop that will iterate from 0 to 10. For each iteration of the for loop, it will multiply the number by 9 and log the result (e.g. "2 * 9 = 18")
for (var i = 0; i <= 10; i++) {
  console.log(9 * i);
}

// Use a nested for loop to show the tables for every multiplier from 1 to 10 (100 results total)
for (i = 1; i <= 10; i++) {
  for (j = 1; j < 10; j++) {
          total = i * j
          total = " " + total
           if (total < 10) {
              console.log(total);
            } else {
              console.log('<br>');
            }
      }
    }

// Part 3 - The Vegan Test

var menu = prompt('On the menu tonight: Steak, fruit salad, tofurkey, pork chops.');

if (menu === 'fruit salad' || menu === 'tofurkey') {
  console.log('This cuisine is vegan friendly.');
} else {
  console.log('Vegans beware');
}
