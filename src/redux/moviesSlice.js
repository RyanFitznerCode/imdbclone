import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from "axios";

const API_KEY = '0006b1cb99406ffc1edad4eac61424ca'; // Replace this with your actual TMDB API key
const BASE_URL = 'https://api.themoviedb.org/3';

export const fetchMoviesByCategory = createAsyncThunk(
  "movies/fetchMoviesByCategory",
  async ({ category }, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${BASE_URL}/movie/${category}`, {
        params: { api_key: API_KEY, language: "en-US", page: 1 },
      });
      return { category, movies: response.data.results };
    } catch (error) {
      return rejectWithValue(error.toString());
    }
  }
);

export const fetchMoviesByGenre = createAsyncThunk(
    "movies/fetchMoviesByGenre",
    async ({ genreId, genreName }, { rejectWithValue }) => {
      try {
        const response = await axios.get(`${BASE_URL}/discover/movie`, {
          params: {
            api_key: API_KEY,
            language: "en-US",
            page: 1,
            with_genres: genreId,
          },
        });
        return { genreName, movies: response.data.results };
      } catch (error) {
        return rejectWithValue(error.toString());
      }
    }
  );

export const fetchMovieById = createAsyncThunk(
  "movies/fetchMovieById",
  async (movieId, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `${BASE_URL}/movie/${movieId}?api_key=${API_KEY}`
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.toString());
    }
  }
);

export const searchMovies = createAsyncThunk(
  "movies/searchMovies",
  async ({ query, page = 1 }, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${BASE_URL}/search/movie`, {
        params: { query, page, api_key: API_KEY },
      });
      return response.data; // Return the entire response data
    } catch (error) {
      return rejectWithValue(error.toString());
    }
  }
);

const initialState = {
  categories: {
    popular: [],
    now_playing: [],
    upcoming: [],
    top_rated: [],
  },
  movieDetails: {},
  searchResults: [],
  status: "idle",
  error: null,
};

const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMoviesByCategory.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchMoviesByCategory.fulfilled, (state, action) => {
        const { category, movies } = action.payload;
        state.categories[category] = movies;
        state.status = "succeeded";
      })
      .addCase(fetchMoviesByCategory.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(fetchMovieById.fulfilled, (state, action) => {
        state.movieDetails[action.meta.arg] = action.payload;
        state.status = "succeeded";
      })
      .addCase(fetchMovieById.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(searchMovies.fulfilled, (state, action) => {
        state.searchResults = action.payload.results;
        state.status = "succeeded";
      })
      .addCase(searchMovies.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default moviesSlice.reducer;