const express = require("express");
const apiRoutes = require("./routes/apiRoutes");
const htmlRoutes = require("./routes/htmlRoutes");
const path = require("path");
const fs = require("fs");
const http = require("http");



const app = express();

//set up initial port
const PORT = process.env.PORT || 3000;


//JSON to express data parsing
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Allows app to provide static files from dir
app.use(express.static("public"));

//routing
app.use("/api", apiRoutes);
app.use("/", htmlRoutes);

//server listening @
app.listen(PORT, () =>
  console.log(`Listening on PORT: ${PORT}`));