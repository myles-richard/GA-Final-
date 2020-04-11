const express = require('express');
const app = express();
const bodyParser = require('body-parser');



const PORT = process.env.PORT || 4000;

const db = require('./models');
const routes = require('./routes');
//Middleware
app.use(bodyParser.json());

//API Routes
app.use('/api/v1/auth', routes.auth)
// app.use('/api/v1/workouts, routes.workouts)
// app.use('/api/v1/users)

app.listen(PORT, () => console.log(`Server running at local host ${PORT}`));