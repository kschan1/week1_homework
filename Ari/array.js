//console.log('hello');

var myFavColours = ['blue', 'orange', 'red', 'black', 'green']

//console.log("My #1 choice is " + myFavColours + ".");

for ( var i = 1; i <= myFavColours.length; i++) {
  if(i === 1) {
    console.log("My" + " " + i + "st" + " " + "choice");
   } else if(i === 2) {
     console.log("My" + " " + i + "nd" + " " + "choice");
   } else if (i === 3) {
     console.log("My" + " " + i + "rd" + " " + "choice");
   } else {
     console.log("My" + " " + i + "th" + " " + "choice")
   }
}
