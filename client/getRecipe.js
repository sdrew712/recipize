const getRecipeButton = document.getElementById("get-recipe")
const newRecipeContainer = document.getElementById("new-recipe-container")
const recipeTitle = document.getElementById("recipe-title")
const origin = document.getElementById("origin")
const category = document.getElementById("category")
const ingredients = document.getElementById("ingredients")

getRecipeButton.addEventListener('click', displayRandomRecipe)

async function displayRandomRecipe(){
  let response = await fetch("https://www.themealdb.com/api/json/v1/1/random.php")
    .then(res => res.json())
    .catch(console.error);

  console.log(response.meals[0]);

  const recipe = response.meals[0];

  recipeTitle.innerHTML = recipe.strMeal
  origin.innerHTML = recipe.strArea
  category.innerHTML = recipe.strCategory
  ingredients.innerHTML = recipe.strIngredient1
}
