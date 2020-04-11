const db = require('../models');
// const bcrypt = require('bcryptjs');
// const jwt = require('jsonwebtoken');


const signUp = (req, res) => {
    // const newUser = {
    //     username: req.body.username,
    //     password: req.body.password,
    //     email: req.body.email
    // }
    // if(!newUser.username || !newUser.password) {
    //     res.sendStatus(400);
    //     return;
    // }
    res.send('sign up')

    
}

const getUser = (req, res) => {
    res.send('get logged in user')
}

const logIn = (req, res) => {
    res.send('login user')
}

module.exports = {
    signUp,
    getUser,
    logIn,

}