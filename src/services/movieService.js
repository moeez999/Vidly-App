import http from "./httpService";

const apiEndPoint = "http://localhost:30900/api/movies";

function getMovieUrl(id) {
  return `${apiEndPoint}/${id}`;
}
export function getMovies() {
  return http.get(apiEndPoint);
}

export function getMovie(movieId) {
  http.get(getMovieUrl(movieId));
}

export function saveMovie(movie) {
  if (movie._id) {
    const body = { ...movie };
    delete body._id;
    http.put(getMovieUrl(movie._id), body);
  }

  return http.post(apiEndPoint, movie);
}

export function deleteMovie(movieId) {
  http.delete(getMovieUrl(movieId));
}
