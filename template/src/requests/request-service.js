import { getCategories, getMoviesGeneralInfo, getMovieById, getCategory, searchMovies } from '../data/movies.js';

export const loadCategories = () => {
  const allCategories = getCategories();
  return allCategories;
};

export const loadCategory = (id = null) => {
  const category = getCategory(id);

  return category;
}

export const loadMovies = (categoryId = null) => {
  const moviesByCategory = getMoviesGeneralInfo(categoryId);
  return moviesByCategory;
};

export const loadSingleMovie = (id) => {
  const currentMovie = getMovieById(id);
  return currentMovie;
};

export const loadSearchMovies = (searchTerm = '') => {
  return searchMovies(searchTerm);
};
