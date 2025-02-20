/* API */
let mainDishId = new URLSearchParams(window.location.search).get("id");
let fetchURL;

let mainDishElement = document.querySelector(".mainDish");

if (!mainDishElement) {
  console.error("Error: <main> element not found.");
} else {
  fetchURL = `https://dummyjson.com/recipes/${mainDishId}`;
  // console.log("myfetchurl", fetchURL);
  fetch(fetchURL)
    .then((res) => res.json())
    .then((recipe) => {
      mainDishElement.innerHTML = `
        <div class="food-container">
          <h1 class="food-title">${recipe.name}</h1>
          <img class="food-image" src="${recipe.image}" alt="${recipe.name}" />
        </div>
        <div class="information-section">
          <div class="container-instruction">
            <h1>Instructions</h1>
            <ol>
              ${recipe.instructions
                .map(
                  (instruction) => `<li>
                ${instruction}</li>`
                )
                .join("")}
            </ol>
          </div>
          <div class="container-ingredients">
            <h1>Ingredients</h1>
            <ul>
              ${recipe.ingredients
                .map(
                  (ingredient) => `<li>
                <input type="checkbox">
                ${ingredient}</li>`
                )
                .join("")}
            </ul>
          </div>
        </div>
      `;
    });
}
