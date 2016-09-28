console.log('it works');

var topMovies = ['Rocky', 'Rocky II', 'Rocky III', 'Rocky IV', 'Rocky V', 'Rocky VI', 'Rocky VII', 'Rocky VIII', 'Rocky IX', 'Rocky X', 'Rocky XI', 'Rocky XII', 'Rocky XIII', 'Rocky XIV', 'Rocky XV', 'Rocky XVI', 'Rocky', 'Rocky II', 'Rocky III', 'Rocky IV', 'Rocky V', 'Rocky VI', 'Rocky VII', 'Rocky VIII', 'Rocky IX'];

for (i = 1; i <= topMovies.length; i++) {

  var suffix = 'th';
  
  if (i % 100 !== 11 && i % 10 === 1) {
    var suffix = 'st';
  } else if (i % 100 !== 12 && i % 10 === 2) {
    var suffix = 'nd';
  } else if (i % 100 !== 13 && i % 10 === 3) {
    var suffix = 'rd';
  }
  
  console.log('My ' + i + suffix + ' choice is ' + topMovies[i -1] + '.');

}
