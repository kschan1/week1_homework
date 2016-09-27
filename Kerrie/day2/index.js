
var name = prompt("Your name please?");

console.log("So your name is "+name+ "?");

for (var i = 1; i < 11; i++) {
  console.log(i + ' * 9 = ' +i*9);
}

console.log('sorry, I do not understand bonus requirement');


console.log("On the menu tonight: Steak, fruit salad, tofurkey, pork chops");
var selection = prompt("What would you like " + name +"?");
var onTheMenuTonight=['Steak', 'fruit salad', 'tofurkey', 'pork chops'];

if ((selection)===(onTheMenuTonight[0])) {
  console.log('Vegans beware');
} else if ((selection)===(onTheMenuTonight[1]))  {
  console.log('This vegan friendly');
} else if((selection)===(onTheMenuTonight[2]))  {
  console.log('This vegan friendly');
} else if ((selection)===(onTheMenuTonight[3])) {
  console.log('Vegans beware');
} else {
  console.log('Please only select from the 4 items');
}
