"use strict";

/**
 * Represent movie genre
 * @constructor
 * @param {string} genreName - The genre name
 */
function Genre(genreName) {
  // properties
  this.name = genreName;
}

// methods
Genre.prototype.getData = function() {
  var name = this.name;
  var firstIndex = 0;
  var lastIndex = name.length - 1;
  var output = name.charAt(firstIndex) + name.charAt(lastIndex);

  return output.toUpperCase();
};

/**
 * Represent a movie
 * @constructor
 * @param {string} title - The movie title
 * @param {Genre} genreObj - The Movie Genre object
 * @param {number} length - The movie length in minutes
 */
function Movie(title, genreObj, length) {
  // properties
  this.title = title;
  this.genre = genreObj; // This is object
  this.length = length;
}

// methods
Movie.prototype.getData = function() {
  return (
    this.title +
    ", " +
    "duration: " +
    this.length +
    "min, " +
    "Genre: " +
    this.genre.getData()
  );
};

/**
 * Represents a festival program
 * @constructor
 * @param {date} date - Date object
 */
function Program(date) {
  // properties
  this.date = date;
  this.listOfMovies = [];
}

// methods
Program.prototype.getProgramDuration = function() {
  var programLength = 0;

  // Alternative way to loop arrays
  this.listOfMovies.forEach(function(movie) {
    programLength += movie.length;
  }, this);

  return programLength;
};

Program.prototype.addMovie = function(movie) {
  this.listOfMovies.push(movie);
};

Program.prototype.getData = function() {
  var date = this.date;
  var movies = this.listOfMovies;
  var programDuration = this.getProgramDuration();
  var dateStr =
    date.getDate() + "." + (date.getMonth() + 1) + "." + date.getFullYear();

  var outputStr = dateStr + ", program duration " + programDuration + "min\n";

  for (var i = 0; i < movies.length; i++) {
    var movie = movies[i];
    outputStr += "\t\t" + movie.getData() + "\n";
  }

  return outputStr;
};
