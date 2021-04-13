
import { ABOUT, CATEGORIES, CONTAINER_SELECTOR, FAVORITES, HOME } from '../common/constants.js';
import { toHomeView } from '../views/home-view.js';
import { toAboutView } from '../views/about-view.js';
import { toCategoriesView } from '../views/category-view.js'
import { toFavoritesView } from '../views/favorites-view.js'
import { toMoviesFromCategoryView, toSingleMovieView } from '../views/movie-views.js';
import { q, setActiveNav } from './helpers.js';
import {loadCategories, loadMovies, loadCategory} from '../requests/request-service.js'
import { getFavorites} from '../data/favorites.js';
import { getMovieById } from '../data/movies.js';

// public API
export const loadPage = (page = '') => {

  switch (page) {

    case HOME:
      setActiveNav(HOME);
      return renderHome();
    
    case CATEGORIES:
      setActiveNav(CATEGORIES);
      return renderCategories();
    case ABOUT:
      setActiveNav(ABOUT);
      return renderAbout();
    case FAVORITES:
      setActiveNav(FAVORITES);
      return renderFavorites();
    /* if the app supports error login, use default to log mapping errors */
    default: return null;
  }

};

export const renderMovieDetails = (id = null) => {
  const movie = getMovieById(id);
  q(CONTAINER_SELECTOR).innerHTML = toSingleMovieView(movie);
  
};

export const renderCategory = (categoryId = null) => {
  const category = loadCategory(categoryId);
  const movies = loadMovies(categoryId);

  q(CONTAINER_SELECTOR).innerHTML = toMoviesFromCategoryView(category, movies);
  
};

// private functions

const renderHome = () => {
  q(CONTAINER_SELECTOR).innerHTML = toHomeView();
};

const renderCategories = () => {
  q(CONTAINER_SELECTOR).innerHTML = toCategoriesView(loadCategories());
};

const renderFavorites = () => {
  q(CONTAINER_SELECTOR).innerHTML = toFavoritesView(getFavorites().map(el => getMovieById(el)))
};
const renderAbout = () => {
  q(CONTAINER_SELECTOR).innerHTML = toAboutView();
};
