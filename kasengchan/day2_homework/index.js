console.log('its working');

// prompt for name
var name = prompt('What is your name?');
console.log('Hello ' + name + '!');

// multiplication
for (var i = 0; i <= 10; i++) {
  for (var j = 0; j <= 10; j++) {
    var result = i * j;
    console.log(i + ' * ' + j + ' = ' + result);
  }
}

// the vegan test
var menuChoice = prompt('On the menu tonight: steak, fruit salad, tofurkey, pork chops\nWhat is your menu choice?');
if ((menuChoice === 'fruit salad') | (menuChoice === 'tofurkey')) {
  console.log('This cuisine is vegan friendly.');
} else {
  console.log('Vegan beware!');
}
