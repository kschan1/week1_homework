console.log('its working');

// How old will I be in 2099
function calculateAge(birthYear, currentYear) {
  if (currentYear > birthYear) {
    console.log('You are ' + (currentYear - birthYear) + ' year(s) old.');
  } else if (currentYear < birthYear) {
    console.log('You will be born in ' + (birthYear - currentYear) + ' year(s).')
  } else {
    console.log('You were born this very year!');
  }
}
calculateAge(1986,2016);
calculateAge(2016,1986);
calculateAge(2016,2016);

// Sum if Multiples
function sumMul(n, m) {
  var result = 0;
  if (m <= n) {
    return 'INVALID';
  }
  for (var i = n; i < m; i+=n) {
    result += i;
  }
  return result;
}

console.log(sumMul(2,9));
console.log(sumMul(3,13));
console.log(sumMul(4,123));
console.log(sumMul(4,-7));
