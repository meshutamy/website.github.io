// app.js

const express = require('express');
const app = express();

// Require modular components
const routes = require('./routes');

// Use modular components
app.use('/', routes);

const port = 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
