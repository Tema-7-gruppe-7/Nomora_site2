/* API */
let mainDishId = new URLSearchParams(window.location.search).get("mainDish");

console.log("Extracted mainDishId:", mainDishId);

if (!mainDishId) {
  console.warn("Warning: No mainDishId found in URL. Defaulting to 1.");
  mainDishId = 1;
}

let mainDishElement = document.querySelector(".mainDish");

if (!mainDishElement) {
  console.error("Error: <main> element not found.");
} else {
  fetch("https://dummyjson.com/recipes")
    .then((res) => res.json())
    .then((data) => {
      console.log("API Response:", data);

      if (!data || !data.recipes) {
        console.error("Error: API response does not contain recipes.");
        return;
      }

      let recipe = data.recipes.find((r) => r.id == mainDishId);
      console.log("Recipe:", recipe);

      if (!recipe) {
        console.error("Error: Recipe not found.");
        return;
      }

      mainDishElement.innerHTML = `
        <div class="food-container">
          <h1 class="food-title">${recipe.name}</h1>
          <img class="food-image" src="${recipe.image}" alt="${recipe.name}" />
        </div>
        <div class="information-section">
          <div class="container-instruction">
            <h1>Instructions</h1>
<ol>
  <li>${recipe.instructions || "No instructions available."}</li>
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
        
      <!-- RATING -->
      <div class="rating-section">
        <h2 class="rating-text">Rating</h2>
        <div class="stars" id="starRating">
          <span data-value="1">★</span>
          <span data-value="2">★</span>
          <span data-value="3">★</span>
          <span data-value="4">★</span>
          <span data-value="5">★</span>
        </div>

        <div class="divider"></div>
        <!-- Custom-styled line -->

        <h2 class="rating-text">Reviewers</h2>
        <div class="rating-container">
          <span id="ratingValue">0</span>
          <img
            class="icon"
            src="img/icon1.png"
            alt="Rolling pin and spoon icon"
          />
        </div>
      </div>
      <!-- FOOTER -->
      <footer>
        <div>
          <h3>Contact information</h3>
          <p>+45 12 34 56 78</p>
          <p>kontak@nomora.com</p>
          <p class="adress">Smagsgade 12,</p>
          <p>2800 København Ø</p>
        </div>
        <div>
          <h3>Social Media</h3>
          <img src="img/SoMe.svg" alt="SoMo logo" />
        </div>
        <div>
          <h3>Trending now</h3>
          <p class="CTA_footer">Classic Margherita Pizza</p>
          <p class="CTA_footer">Moroccan Chickpea Tagine</p>
          <p class="CTA_footer">Chicken Alfredo Pasta</p>
        </div>
      </footer>
      `;
    })
    .catch((error) => console.error("Fetch error:", error));
}

// work in progress //
/*
document.addEventListener("DOMContentLoaded", function () {
  const stars = document.querySelectorAll("#starRating span");
  const ratingValue = document.createElement("p"); // Create a new element for rating display
  ratingValue.id = "ratingValue";
  document.querySelector(".rating-section").appendChild(ratingValue); // Append to rating section

  stars.forEach((star) => {
    star.addEventListener("click", function () {
      let value = parseInt(this.getAttribute("data-value")); // Convert to number
      ratingValue.textContent = `You rated: ${value} stars`;

      // Reset all stars
      stars.forEach((s, i) => {
        s.classList.toggle("active", i < value);
      });
    });
  });
});
 */
