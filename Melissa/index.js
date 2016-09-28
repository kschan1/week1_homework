// Part 1: Get input using prompt()
var name = prompt('What is your name?');
console.log('Hello, ' + name + '!');

// Part 2: Multiplication tables
// Show multiples of 9
for (var i = 0; i <= 10; i++) {
  console.log(i + ' x ' + 9 + ' = ' + (i * 9));
}

// Nested loop
for (var i = 1; i <= 10; i++) {
  var line = '';
  for (var j = 1; j <= 10; j++) {
    line += (i * j) + ' ';
  }
  console.log(line);
}

// Part 3: Vegan Test
var choice = prompt('Choose one of the following: steak, fruit salad, tofurkey, pork chops.');
switch (choice) {
  case 'fruit salad':
  case 'tofurkey':
    console.log('This cuisine is vegan friendly.');
    break;
  case 'steak':
  case 'pork chops':
    console.log('Vegans beware!');
    break;
  default:
    console.log('Option not found');
}
