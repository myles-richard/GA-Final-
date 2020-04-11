const express = require('express');
const app = express();
const bodyParser = require('body-parser');



const PORT = process.env.PORT || 4000;

const db = require('./models');

//Middleware
app.use(bodyParser.json());

//API Routes
// app.use('/api/v1', routes.api)

app.listen(PORT, () => console.log(`Server running at local host ${PORT}`));