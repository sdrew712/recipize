const getRecipeButton = document.getElementById("get-recipe")
const newRecipeContainer = document.getElementById("new-recipe-container")
const bannerElement = document.getElementById("banner")
const recipeTitleElement = document.getElementById("recipe-title")
const originElement = document.getElementById("origin")
const categoryElement = document.getElementById("category")
const tagsElement = document.getElementById("tags")
const ingredientsElement = document.getElementById("ingredients")
const instructionsElement = document.getElementById("instructions")
const youtubeEmbedElement = document.getElementById("youtube-embed")

getRecipeButton.addEventListener('click', displayRandomRecipe)

async function displayRandomRecipe(){
  let response = await fetch("https://www.themealdb.com/api/json/v1/1/random.php")
    .then(res => res.json())
    .catch(console.error);
  
  const recipe = response.meals[0];
  console.log({ recipe });

  const ingredients = [];

  recipeTitleElement.innerHTML = recipe.strMeal
  originElement.innerHTML = recipe.strArea
  categoryElement.innerHTML = recipe.strCategory
  tagsElement.innerHTML = recipe.strTags

  for (let i = 1; i <= 20; i++) {
    const ingredient = recipe["strIngredient".concat(i)];
    const measurement = recipe["strMeasure".concat(i)];

    if (ingredient) {
      ingredients.push(measurement + " " + ingredient);
    }
  
  }

  ingredientsElement.innerHTML = ingredients;
  // console.log({ ingredients })
  instructionsElement.innerHTML = recipe.strInstructions
  
  bannerElement.style.backgroundImage = `url('${recipe.strMealThumb}')`

  youtubeEmbedElement.src = recipe.strYoutube.replace("watch?v=", "embed/")
}
