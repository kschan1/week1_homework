console.log('its working');

var favColours = ['blue','black','yellow','purple','green','grey','red','orange','light blue','light green','pink'];

for (var i = 1; i <= favColours.length; i++) {
  var suffix = 'st';
  var iForSuffix = i % 100;
  if ((iForSuffix > 10) && (iForSuffix < 14)) {
    suffix = 'th';
  } else if (iForSuffix % 10 === 1) {
    suffix = 'st';
  } else if (iForSuffix % 10 === 2) {
    suffix = 'nd';
  } else if (iForSuffix % 10 === 3) {
    suffix = 'rd';
  } else {
    suffix = 'th';
  }
  console.log('My ' + i + suffix + ' choice is ' + favColours[i - 1]);
}
