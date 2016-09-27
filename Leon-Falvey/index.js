var name = prompt("Please enter your name so that we can evaluate your life.");

console.log("Greetings" + name+ ", I hope you will enjoy your remaining life here.");

for (var i=1; i<=10;i++) {
  for (var j=1; j<=10;j++) {
    console.log((i+"*"+j)+"="+(i*j));
  }
}

var choice = prompt("On the menu tonight: Steak, fruit salad, tofurkey, pork chops. Pick one for your meal.");
if (choice==="fruit salad"||choice==="tofurkey") {
  console.log("This cuisine is vegan friendly.");
} else {
  console.log("Vegans Beware!");
}
