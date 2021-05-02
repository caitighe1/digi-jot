//created the modules being used

const express = require('express');
const htmlRoutes = require('./routes/htmlRoutes.js');
const apiRoutes = require('./routes/apiRoutes.js');

const app = express();
const PORT = process.env.PORT || 3000;

// middleware to parse JSON data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// paths for routes
app.use(express.static('./public'));
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

//listener
app.listen(PORT, () =>
    console.log(`Listening on PORT : ${PORT}`));