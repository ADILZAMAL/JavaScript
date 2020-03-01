const addMovie = document.getElementById("add-movie-btn");
const search = document.getElementById("search-btn");
const Movie = [];

const renderMovie = (filter = "") => {
  const movieList = document.getElementById("movie-list");
  if (Movie.length === 0) {
    movieList.classList.remove("visible");
  } else {
    movieList.classList.add("visible");
  }
  movieList.innerHTML = "";
  const filteredMovies = !filter
    ? Movie
    : Movie.filter(movie => movie.info.title.includes(filter));
  filteredMovies.forEach(movie => {
    const movieEl = document.createElement("li");
    const { info} = movie;
    //const {title} = info;
    let {getFormatedTitle} = movie;
    getFormatedTitle = getFormatedTitle.bind(movie);
    let txt = getFormatedTitle() + "-";
    for (const key in info) {
      if (key !== "_title" && key !=='title') {
        txt += `${key}:${info[key]}`;
      }
    }
    movieEl.textContent = txt;
    movieList.append(movieEl);
  });
};

const addMovieHandler = () => {
  const title = document.getElementById("title").value;
  const extr = document.getElementById("extra-name").value;
  const value = document.getElementById("extra-value").value;

  if (title.trim() === "" || extr.trim() === "" || value.trim() === "") return;

  const newMovie = {
    info: {
      set title(val){
        if(val === '')
        {
          this._title = 'Default';
          return;
        }
        this._title=val;
      },
      get title(){
        return this._title;
      },
      [extr]: value
    },
    id: Math.random(),
    getFormatedTitle:function(){
      return this.info.title.toUpperCase();
    }
  };
  console.log(newMovie)
  newMovie.info.title = title;
  Movie.push(newMovie);
  renderMovie();
};

const searchHandler = () => {
  const fileterTitle = document.getElementById("filter-title").value;
  renderMovie(fileterTitle);
};

addMovie.addEventListener("click", addMovieHandler);
search.addEventListener("click", searchHandler);
