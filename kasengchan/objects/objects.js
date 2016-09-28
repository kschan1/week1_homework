// console.log('its working');

// The Recipe Card
var favRecipe = {title: 'Mole', servings: 2, ingredients: ['cinnamon', 'cumin', 'cocoa']}
console.log(favRecipe.title);
console.log('Serves: ' + favRecipe.servings);
console.log('Ingredients:');
for (var i = 0; i < favRecipe.ingredients.length; i++) {
  console.log(favRecipe.ingredients[i]);
}

// The Reading List
var books = [
  {title: 'The Hobbit', author: 'J.R.R. Tolkien', alreadyRead: false},
  {title: 'The Lord of the Rings', author: 'J.R.R. Tolkien', alreadyRead: true}
];

for (var i = 0; i < books.length; i++) {
  // console.log(books[i].title + ' by ' + books[i].author);
  if (books[i].alreadyRead) {
    console.log('You already read "' + books[i].title + '" by ' + books[i].author + '.');
  } else {
    console.log('You still need to read "' + books[i].title + '" by ' + books[i].author + '.');
  }
}

// The Movie Database
var favMovie = {title: 'Puff the Magic Dragon', duration: 30, stars: ['Puff', 'Jackie', 'Living Sneezes']};
var movieInfo = function(){
  var allStars = favMovie.stars.join(', '); // joining all elements into a string
  console.log(favMovie.title + ' lasts for ' + favMovie.duration + ' minutes. Stars: ' + allStars + '.');
}
movieInfo();
