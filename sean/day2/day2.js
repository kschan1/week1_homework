// Prompt user to input their name
var name = prompt("What is your name?");
console.log("Greetings, " + name + "!");


var multi = 9
for (var i = 0; i <= 10; i += 1) {
  var result = [i] * multi;
  console.log(i + " * " + multi + " = " + result)
}

for (var multi = 1; multi <= 10; multi += 1) {
  for (var i = 0; i <= 10; i += 1) {
    var result = [i] * multi;
    console.log(i + " * " + multi + " = " + result)
  }
}

var menu = prompt("On the menu tonight: steak, fruit salad, tofurkey, pork chops")

if (menu === "fruit salad" || menu === "tofurkey") {
  console.log("This cuisine is vegan friendly.");
} else {
  console.log("Vegans beware!")
}
