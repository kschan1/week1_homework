var name=prompt('Please, enter your name');

console.log('Hello '+ name );

var color = prompt('What is your favorite color?');

console.log ('I love this color as well');

for (var i=0; i<=10; i++) {
  var outcome= i*9
  console.log (9 + '*'+i+ '=' + outcome);
}



var decision= prompt ('What do u want for dinner?');

if (decision==='fruit salad' || decision=== 'tofurkey') {
  console.log ("This cuisine is vegan friendly.");
}
else if (decision==='Steak' || decision==='porkchops') {
  console.log ("Vegans beware!");
}

else console.log ("Sorry, we don't have it tonight")
