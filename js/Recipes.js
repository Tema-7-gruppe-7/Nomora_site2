const listContainer = document.querySelector(".recipe_list");
const countryFilter = document.querySelector("#countryFilter");

// const myCategory = new URLSearchParams(window.location.search).get("category");
function showRecipes(event) {
  fetch(`https://dummyjson.com/recipes?limit=100`)
    .then((response) => response.json())
    .then((recipes) => {
      let markup = recipes.recipes
        .filter((recipe) => {
          if (event) {
            if (event.target.value == "Italian") {
              return recipe.cuisine == "Italian";
            }
            if (event.target.value == "Mexican") {
              return recipe.cuisine == "Mexican";
            }
            if (event.target.value == "Indian") {
              return recipe.cuisine == "Indian";
            }
            if (event.target.value == "Asian") {
              return recipe.cuisine == "Asian";
            }
            else {
              return true;
            }
          } else {
            return true;
          }
        })
        .map((recipe) => {
          return `
          <div class="grid_1-1">
              <img src="https://cdn.dummyjson.com/recipe-images/${recipe.id}.webp" alt="Dish">
              <p>${recipe.name}</p>
              <a href="dish.html?id=${recipe.id}" class="button">Go to recepie</a>
          </div>`;
        })
        .join("");

      console.log(markup);
      listContainer.innerHTML = markup;
    });
}

countryFilter.addEventListener("change", showRecipes);

showRecipes();
