var name = prompt("What is your name?");
console.log(name);

for (i=0; i < 10; i += 1) {

}

var menu  = prompt("On the menu tonight: steak, fruit salad, tofurkey, pork chops")

if (menu === "fruit salad" || menu === "tofurkey") {
  return "This cuisine is vegan friendly.";
} else {
  return "Vegans beware!"
}
