const express = require("express");
const cors = require("cors");
const app = express();
const path = require("path");

app.use(express.static(path.join(__dirname, "frontend/build")));

app.use(cors());

app.get("/", (req, res) => {
  res.send("Welcome to node");
});

app.listen(3000, () => console.log("Server started..."));
