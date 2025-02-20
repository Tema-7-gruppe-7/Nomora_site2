const listContainer = document.querySelector(".recipe_list");

// const myCategory = new URLSearchParams(window.location.search).get("category");

fetch(`https://dummyjson.com/recipes?limit=100`)
  .then((response) => response.json())
  .then(showList);

function showList(recipes) {
  console.log(recipes);

  let markup = "";

  recipes.recipes
    .map((recipe) => {
      markup += `
        <div class="grid_1-1">
            <img src="https://cdn.dummyjson.com/recipe-images/${recipe.id}.webp" alt="Dish">
            <p>${recipe.name}</p>
            <a href="dish.html?id=${recipe.id}" class="button">Go to recepie</a>
        </div>`;
    })
    .join("");

  console.log(markup);
  listContainer.innerHTML = markup;
}
