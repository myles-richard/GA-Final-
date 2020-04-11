const db = require('../models');
// const bcrypt = require('bcryptjs');


const signUp = (req, res) => {
    res.send('hi')
}

const logIn = (req, res) => {
    res.send('login')
}

module.exports = {
    signUp,
    logIn
}