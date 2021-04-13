import { CONTAINER_SELECTOR } from "../common/constants.js";
import { loadSearchMovies } from "../requests/request-service.js";
import { toSearchView } from "../views/search-view.js";
import { q } from './helpers.js';

export const renderSearchItems = (searchTerm) => {
  searchTerm
  ? q(CONTAINER_SELECTOR).innerHTML = toSearchView(loadSearchMovies(searchTerm), searchTerm)
  : q(CONTAINER_SELECTOR).innerHTML = '';  
};
