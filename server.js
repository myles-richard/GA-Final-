const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');

require('dotenv').config()

//CORS
const corsOptions = {
    origin: ['http://localhost:3000'],
    methods: "GET,POST,PUT,DELETE",
    credintials: true,
    optionSuccessStatus: 200
}

const PORT = process.env.PORT;

const db = require('./models');
const routes = require('./routes');

//Middleware
app.use(cors(corsOptions));
app.use(bodyParser.json({ extended: false }));

//API Routes
app.use('/api/v1/auth', routes.auth)
app.use('/api/v1/workout', routes.workout)
app.use('/api/v1/users', routes.users)

app.listen(PORT, () => console.log(`Server running at local host ${PORT}`));