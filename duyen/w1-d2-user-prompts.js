console.log('user prompts');

// Part 1 - Grabbing input from user in the browser

var user = prompt('Enter your name');

alert('Hello ' + user[0].toUpperCase() + user.slice(1).toLowerCase() + '.');

// Part 2 - Multiplication Tables

for (var i = 0; i < 10; i++) {
  console.log([i + 1] * 9);
}

// Bonus

for (var i = 1; i <= 10; i++) {
  for (var j = 1; j <= 10; j++) {
    console.log(i + ' * ' + j + ' = ' + (i * j));
  }
}

// Part 3 - The Vegan Test

var userChoice = prompt('Would you like steak, fruit salad, tofurkey or pork chops for dinner tonight?');

function chooseAgain() {
  userChoice = prompt('I know it\'s not very exciting but your choices again are steak, fruit salad, tofurkey or pork chops. What will it be?');
  dinnerFeedback();
}

function dinnerFeedback() {
  if (userChoice === 'tofurkey' || userChoice === 'fruit salad') {
    alert('This dish is vegan friendly.');
  } else if (userChoice === 'steak' || userChoice === 'pork chops'){
    alert('Vegans beware!');
  } else {
    alert('That\'s not on the menu.');
    chooseAgain();
  }
}

dinnerFeedback();
