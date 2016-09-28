var topChoices = ['blue', 'green', 'teal', 'orange'];

for (var i = 0; i < topChoices.length; i++) {
  var suffix = getSuffix(i + 1);
  console.log('My ' + (i + 1) + suffix
    + ' choice is ' + topChoices[i]);
}

// Get ordinal suffix for given number
// Assuming choice list doesn't have more than 10 items in it
function getSuffix(value) {
  if (value === 1) {
    return 'st';
  }
  else if (value === 2) {
    return 'nd';
  }
  else if (value === 3) {
    return 'rd';
  }
  else {
    return 'th';
  }
}
