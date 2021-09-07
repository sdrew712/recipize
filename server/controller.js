let recipeId = 1;
const recipeList = [];

module.exports = {
  displayRecipe: (req, res) => {
    const { name, ingredients, instructions } = req.body;

    const newRecipe = {
      name,
      ingredients,
      instructions,
      id: recipeId
    }

    recipeList.push(newRecipe);

    res.status(200).send(recipeList);
  },

  deleteRecipe: (req, res) => {
    const { id } = req.params;

    const indexToDelete = recipeList.findIndex(e => e.id === +id);

    recipeList.splice(indexToDelete, 1);

    res.status(200).send(recipeList)
  }
}