const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const postRoutes = require("./routes");

const app = express();
app.set("view engine", "ejs");

mongoose.connect("mongodb://localhost:27017/blogDB", { useNewUrlParser: true, useUnifiedTopology: true });

app.use(bodyParser.urlencoded({ extended: true }));
app.use("/", postRoutes);

app.listen(3000, () => {
    console.log("Server started on port 3000");
});
