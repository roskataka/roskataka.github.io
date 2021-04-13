export const toCategoriesView = (categories) => `
<div id="categories">
  <h1>Categories</h1>
  <div class="content"> 
    ${categories.map(toSingleCategoryView).join('\n')}
  </div>
</div>
`;

const toSingleCategoryView = (category) => `

<div class="single-box">
<div class="name-of-box">
${category.name}
</div>
<div class="movies-count">
${category.moviesCount + ' movies'}
</div>
<button type="button" class="view-category" id="${category.id}">
View category
</button>
</div>
`;