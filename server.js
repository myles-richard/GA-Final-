const express = require('express');
const app = express();
const bodyParser = require('body-parser');

require('dotenv').config()



const PORT = process.env.PORT;

const db = require('./models');
const routes = require('./routes');

//Middleware
app.use(bodyParser.json());

//API Routes
app.use('/api/v1/auth', routes.auth)
// app.use('/api/v1/workouts, routes.workouts)
app.use('/api/v1/users', routes.users)

app.listen(PORT, () => console.log(`Server running at local host ${PORT}`));