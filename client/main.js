const recipeInput = document.getElementById("recipe-input")
const nameInput = document.getElementById("name-input")
const ingredientsInput = document.getElementById("ingredients-input")
const instructionsInput = document.getElementById("instructions-input")
const recipesContainer = document.getElementById("recipes-container")


function displayRecipe(arr){
  while(recipesContainer.firstChild){
    recipesContainer.removeChild(recipesContainer.firstChild)
  }

  for (let i = 0; i < arr.length; i++){
    const newRecipe = document.createElement("div");

    newRecipe.innerHTML = `<p>${arr[i].name}</p><p>${arr[i].ingredients}</p><p>${arr[i].instructions}</p><button class="delete-button value="${arr[i].id}">Delete</button><h1>`

    newRecipe.className = "recipe"

    recipesContainer.appendChild(newRecipe);

    let deleteButtons = document.getElementsByClassName("delete-button");

    for (let i = 0; i < deleteButtons.length; i++){
      deleteButtons[i].addEventListener('click', deleteRecipe)
    }
  }
}

const deleteRecipe = (e) => {
  axios.delete(`http://localhost:4000/api/recipe/${e.target.id.value}`)
    .then((res) => {
      displayRecipe(res.data);
    });
}

recipeInput.addEventListener('submit', (e) => {
  e.preventDefault();

  const newRecipeInfo = {
    name: nameInput.value,
    ingredients: ingredientsInput.value,
    instructions: instructionsInput.value
  }
  
  axios.post("http://localhost:4000/api/recipe", newRecipeInfo)
    .then(res => {
      console.log(res.data);
      displayRecipe(res.data);
    });

    nameInput.value = '';
    ingredientsInput.value = '';
    instructionsInput.value = '';
})