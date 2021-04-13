import { renderFavoriteStatus } from '../events/helpers.js';

export const toMoviesFromCategoryView = (category, movies) => `
<div id="movies">
  <h1>${category.name} movies:</h1>
  <div class="content">
    ${movies.map(toMovieSimple).join('\n')}
  </div>
</div>
`;

export const toSingleMovieView = (movie) => `
${toMovieDetailed(movie)}
`;

export const toMovieSimple = (movie) => `
<div class="movieCard">
    <p class="movieCardTitle">${movie.title}</p>
    <p class="movieCardYear">${movie.year}</p>
    <img class="posterImage" src=${movie.poster}>
    <div class="vDetails">
      <a class="dLink" id="${movie.id}" href="#">View details</a>
      ${renderFavoriteStatus(movie.id)}
    </div>
</div>
`;

const toMovieDetailed = (movie) => `
<div id="titleDiv">
  <h1>${movie.title} (${movie.year})</h1>

  <div id="detailedDiv">
  
    <div id="detailedLine">
      <div id="detailedDiv1">
        <img class="detailedPoster" src=${movie.poster}>
      </div>
    </div>

    <div id="detailedDiv2">
      <p id="detailedGenre">Genre: ${movie.genre}</p>
      <p id="detailedDirector">Director: ${movie.director}</p>
      <p id="detailedStars">Staring: ${movie.stars.join(', ')}</p>
      <p id="detailedPlot">Plot: ${movie.description}</p>
    </div>

  </div>
</div>
`;
