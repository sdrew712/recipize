let recipeId = 1;
const recipeList = [];

module.exports = {
  displayRecipe: (req, res) => {
    const { name, ingredients, instructions } = req.body;

    // console.log(name, ingredients, instructions);
    // console.log(req.body);

    const newRecipe = {
      name,
      ingredients,
      instructions,
      id: recipeId
    }

    // console.log(newRecipe);

    recipeList.push(newRecipe);

    // console.log(recipeList);

    res.status(200).send(recipeList);
  },

  deleteRecipe: (req, res) => {
    const { id } = req.params;

    // console.log(req.params);

    // console.log(id);

    const indexToDelete = recipeList.findIndex(e => e.id === +id);

    recipeList.splice(indexToDelete, 1);

    res.status(200).send(recipeList)
  }
}