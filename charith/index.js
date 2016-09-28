console.log('Arrays:');

var favMovies = ['The Terminator 2', 'The Matrix', 'John Wick', 'Avatar', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x'];
var suffix = 'th';
var lastDigit = null;
var rank = null;

for (var i = 0; i < favMovies.length; i++) {
  suffix = 'th';
  rank = i + 1;

  lastDigit = +((rank).toString().slice(-1));

  if (rank !== 11 && rank !== 12 && rank !== 13) {
    switch (lastDigit) {
      case 1:
        suffix = 'st'
        break;
      case 2:
        suffix = 'nd'
        break;
      case 3:
        suffix = 'rd'
        break;
    }
  }

  console.log("My " + rank + suffix + " choice is " + favMovies[i]);
}

var name = prompt("Please enter your name");

console.log("Hi there " + name);

for (var i = 0; i <= 10; i++) {
  for (var j = 1; j <= 10; j++) {
    console.log(i + " * " + j + " = " + (i * j));
  }
}

var choice = prompt("*On the menu tonight: Steak, fruit salad, tofurkey, pork chops.*");

if (choice === 'fruit salad' || choice === 'tofurkey') {
  console.log("This cuisine is vegan friendly.");
}
else {
  console.log("Vegans beware!");
}
