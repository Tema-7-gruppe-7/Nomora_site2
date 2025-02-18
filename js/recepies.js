console.log("script hentet");

const div = document.querySelector(".recepies_list");
fetch("https://dummyjson.com/recipes?limit=100")
  .then((res) => res.json())
  .then(console.log);

function showList(recipes) {
  console.log(recipes);

  let markup = "";

  recipes
    .map((recipe) => {
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
