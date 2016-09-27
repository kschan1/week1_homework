var myChoices = ['Eat', 'sleep', 'game of thrones', "qqq" , "eee", "ppp","ooo",
                  "iii","eii","eeq","eqq","eww","ew", "kkk", "zzz" ,"ekkee", "euuee",
                  "eejjje", "eemmmmmme", "eemmme", "emmm", "em", "eeaae"];
var suffix = 'th';

for (var i = 1; i <= myChoices.length; i++) {
//   *********** First try, also worked but using both IF and ELSE ******
//   if (i === 11 || i === 12 || i === 13) {
//   }else{
//     var lastNum = findLastNumber(i);
//     var suffix = chooseSuffix(lastNum);
//   }
// }

// ********************* SECOND TRY (Without else statement) **********************
  if (i !== 11 && i !== 12 && i !== 13) { //
    var lastNum = findLastNumber(i);
    var suffix = chooseSuffix(lastNum);
  }
  console.log("My " + [i] + suffix + " choice is " + myChoices[i-1]);
}


function findLastNumber(number){
  var toText = number.toString(); //convert to string
  var lastChar = toText.slice(-1); //gets last character
  var lastDigit = +(lastChar); //convert last character to number
  return lastDigit; //5
}

function chooseSuffix(numFound){
  lastNumber = numFound;
  switch (lastNumber) {
    case 1:
      return "st";
      break;
    case 2:
      return "nd";
      break;
    case 3:
      return "rd";
      break;
    default:
      return "th";
  }
}
