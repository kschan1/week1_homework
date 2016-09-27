var choices = ['orange', 'blue', 'red', 'yellow']
var suffix = ['st', 'nd', 'rd', 'th']

for (var i = 0; i < choices.length; i++) {
  console.log('my #' + (i+1) + ' favourite colour is ' + choices[i] +'.');
  console.log('my ' + (i+1)+suffix[i] + ' choice is ' + choices[i] +'.');
}
