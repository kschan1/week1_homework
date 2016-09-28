console.log('it works');

// Part 1.
var name = prompt('Enter your name.');
console.log('Hi ' + name + '!');

// Part 2.
for (i = 1; i <= 10; i++) {
  for (multiplier = 1; multiplier <= 10; multiplier++) {
    console.log(i + ' * ' + multiplier + ' = ' + i * multiplier);
  }
}

// Part 3.
var order = prompt('On the menu tonight: Steak, fruit salad, tofurkey, pork chops. Please enter your choice.');
var order = order.toLowerCase();

if (order === 'fruit salad' || order === 'tofurkey') {
  console.log('This cuisine is vegan friendly.');
} else if (order === 'steak' || order === 'pork chops') {
  console.log('Vegans beware!');
} else {
  console.log("That's not on the menu!");
}
