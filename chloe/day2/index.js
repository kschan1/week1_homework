
var userAnswer = prompt("what's your name?")
console.log("hi" + userAnswer + "! Nice to meet you.")

for (var i = 0; i <= 10; i++) {
  for (var j = 0; j <= 10; j++) {
    console.log(i + " * " + j + " = " + (i * j));

  }
}

var menu = ["steak", "fruit salad", "tofurkey", "pork chops"]
var userChoice = prompt("On the menu tonight we have: steak, fruit salad, tofurkey, and pork chops. What would you like to eat?")

if ((userChoice == menu[1]) || (userChoice == menu[2])) {
  console.log("This cuisine is vegan friendly.");
} else {
  console.log("Vegans beware!");
}
