const express = require("express");
const cors = require("cors");
const controller = require("./controller")

const app = express();
app.use(cors());

app.use(express.json());

app.post("/api/recipe", controller.displayRecipe)

app.delete("/api/recipe/:id", controller.deleteRecipe)

app.listen(4000, () => console.log("Server running on 4000"));