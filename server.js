const express = require("express");
const path = require("path");
const fs = require("fs");
const app = express();

//set up initial port
const PORT = process.env.PORT || 8080;


//JSON to express data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Allows app to provide static files from dir
app.use(express.static("public"));

//routing
const apiRoutes = require("./routes/apiRoutes");
app.use("/api", apiRoutes);
require("./routes/htmlRoutes")(app);

//server listening @
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});