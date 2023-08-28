
const cors = require('cors');
const express = require('express');
const knex = require('knex');
const knexConfig = require('./knexfile');

require('dotenv').config();

const app = express();
const routes = require('./routes/index');

app.use(cors());
app.use(express.json());

app.use('/', routes);

const PORT = process.env.PORT ||8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});