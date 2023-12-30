import axios from "axios";

const movieBaseUrl = "https://api.themoviedb.org/3";
const api_key = "d1bd290a4c3659279c73cf3990e09f0b";

const movieByGenreBaseUrl =
  "https://api.themoviedb.org/3/discover/movie?api_key=" + api_key;

const getTrendingVideos = axios.get(
  movieBaseUrl + "/trending/all/day?api_key=" + api_key
);

const getMovieByGenreId = (id) =>
  axios.get(movieByGenreBaseUrl + "&with_genres=" + id);

export default {
  getTrendingVideos,
  getMovieByGenreId,
};
