const recipeInput = document.getElementById("recipe-input")
const nameInput = document.getElementById("name-input")
const ingredientsInput = document.getElementById("ingredients-input")
const instructionsInput = document.getElementById("instructions-input")
const recipesContainer = document.getElementById("recipes-container")


function displayRecipe(arr){
  while(recipesContainer.firstChild){
    recipesContainer.removeChild(recipesContainer.firstChild)
  }

  //creates new div to hold recipe inputted
  for (let i = 0; i < arr.length; i++){
    const newRecipe = document.createElement("div");

    newRecipe.innerHTML = `<p>Name: ${arr[i].name}</p><p>Ingredients: ${arr[i].ingredients}</p><p>Instructions: ${arr[i].instructions}</p><button class="delete-button value="${arr[i].id}">Delete</button><h1>`

    newRecipe.className = "recipe"

    recipesContainer.appendChild(newRecipe);

    //creates a delete button for each recipe
    let deleteButtons = document.getElementsByClassName("delete-button");

    //deletes recipe when button is clicked
    for (let i = 0; i < deleteButtons.length; i++){
      deleteButtons[i].addEventListener('click', deleteRecipe)
    }
  }
}

//function to delete recipe from server and then return updated list
const deleteRecipe = (e) => {
  axios.delete(`http://localhost:4000/api/recipe/${e.target.id.value}`)
    .then((res) => {
      displayRecipe(res.data);
    });
}

//when recipe is submitted, it is sent to the server
recipeInput.addEventListener('submit', (e) => {
  e.preventDefault();

  const newRecipeInfo = {
    name: nameInput.value,
    ingredients: ingredientsInput.value,
    instructions: instructionsInput.value
  }
  
  axios.post("http://localhost:4000/api/recipe", newRecipeInfo)
    .then(res => {
      displayRecipe(res.data);
    });

    nameInput.value = '';
    ingredientsInput.value = '';
    instructionsInput.value = '';
})