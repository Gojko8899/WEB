var movieList = [];
var progList = [];

document.querySelector("#button").onclick = function() {
  var title = document.querySelector("#title").value;
  var length = document.querySelector("#length").value;
  var genre = document.querySelector("#select").value;

  var genreObj = new Genre(genre);
  var movie = new Movie(title, genreObj, length);

  movieList.push(movie);

  var list = "<ul>";

  for (i = 0; i < movieList.length; i++) {
    list += "<li>";

    list += movieList[i].getData();

    // console.log(movieList[i].getData());

    list += "</li>";
  }

  list += "</ul>";

  document.querySelector("#list").innerHTML = list;
};
