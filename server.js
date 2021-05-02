//created the modules being used

const express = require('express');
const app = express();

const PORT = process.env.PORT || 8080;

// middleware to parse JSON data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.use(express.static('public'));

// path for routes
app.use('./routes/apiRoutes')(app);
app.use('./routes/htmlRoutes')(app);

//listener
app.listen(PORT, function() {
    console.log('App listening on PORT ' + PORT);
});