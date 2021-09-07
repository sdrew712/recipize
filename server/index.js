const express = require("express");
const cors = require("cors");
const controller = require("./controller")
const path = require("path");

const app = express();

app.use(cors());
app.use(express.json());

app.use('/css', express.static(path.join(__dirname, '../client/styles.css')))

app.use('/js', express.static(path.join(__dirname, '../client/main.js')))

app.use('/getRecipe', express.static(path.join(__dirname, '../client/getRecipe.js')))

app.post("/api/recipe", controller.displayRecipe)

app.delete("/api/recipe/:id", controller.deleteRecipe)

const port = process.env.PORT || 4005;

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
})