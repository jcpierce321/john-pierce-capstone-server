// // const express = require('express');
// // const cors = require('cors');
// // const knex = require('knex');
// // const knexConfig = require('./knexfile');

const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Express is running!');
});

app.listen(8080, () => {
    console.log('Server Started on http://localhost:8080');
    console.log('Press CTRL + C to stop server');
});