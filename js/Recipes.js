const listContainer = document.querySelector(".recipe_list");

// const myCategory = new URLSearchParams(window.location.search).get("category");

fetch(`https://dummyjson.com/recipes?limit=100`)
  .then((response) => response.json())
  .then(showList);

function showList(products) {
  console.log(products);

  let markup = "";

  products
    .map((product) => {
      markup += `
        <h1>Recepies</h1>
        <div class="grid_1-1">
            <img src="https://cdn.dummyjson.com/recipe-images/${recipes.id}.webp" alt="Dish">
            <p>${recipes.name}</p>
            <a href="#" class="button">Go to recepie</a>
        </div>`;
    })
    .join("");

  console.log(markup);
  listContainer.innerHTML = markup;
}

console.log("script hentet");

const div = document.querySelector(".recepies_list");
fetch("https://dummyjson.com/recipes?limit=100")
  .then((res) => res.json())
  .then(console.log);

function showList(recipes) {
  console.log(recipes);

  let markup = "";

  recipes
    .map((recipes) => {
      markup += `
      <h1>Recepies</h1>
        <div class="grid_1-1">
            <img src="https://cdn.dummyjson.com/recipe-images/${recipes.id}.webp" alt="Dish">
            <p>${recipes.name}</p>
            <a href="#" class="button">Go to recepie</a>
        </div>
        `;
    })
    .join("");
  console.log(markup);
  div.innerHTML = markup;
}
