import axios from 'axios';

const API_KEY = '0006b1cb99406ffc1edad4eac61424ca'; // Replace this with your actual TMDB API key
const BASE_URL = 'https://api.themoviedb.org/3';

const tmdbApi = {
  fetchMovies: async (category = 'popular', page = 1) => {
    try {
      const response = await axios.get(`${BASE_URL}/movie/${category}?api_key=${API_KEY}&language=en-US&page=${page}`);
      return response.data;
    } catch (error) {
      console.error('Error fetching movies:', error);
      throw error;
    }
  },
};

// Function to fetch movies based on a category
export const fetchMoviesByCategory = async (category = 'popular', page = 1) => {
try {
const response = await tmdbApi.get(`/movie/${category}`, {
params: { page }
});
return response.data;
} catch (error) {
console.error('Error fetching movies:', error);
throw error;
}
};
// Function to fetch the details of a single movie
export const fetchMovieDetails = async (movieId) => {
try {
const response = await tmdbApi.get(`/movie/${movieId}`);
return response.data;
} catch (error) {
console.error('Error fetching movie details:', error);
throw error;
}
};
// Function to search movies by a search term
export const searchMovies = async (query, page = 1) => {
try {
const response = await tmdbApi.get('/search/movie', {
params: { query, page }
});
return response.data;
} catch (error) {
console.error('Error searching movies:', error);
throw error;
}
};
export default tmdbApi;

