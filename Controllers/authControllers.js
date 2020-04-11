const db = require('../models');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { validationResult } = require('express-validator');


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

const logIn = async (req, res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() })
    }

    const { email, password } = req.body;
    
    try {
        //Find if user exist check email 
        let user = await db.User.findOne({ email });
        
        if(!user) {
            return res.status(400).json({ msg: 'Invalid Credentials' });
        }

        //if there is user, continue to check password 
        const isMatch = await bcrypt.compare(password, user.password);

        //return true or false if match
        if(!isMatch) {
            return res.status(400).json({ msg: 'Invalid Credentials '});
        }

        const payload = {
            user: {
                id: user.id
            }
        }

        jwt.sign(payload,process.env.JWT_SECRET, {
            expiresIn: 360000
        }, (err, token) => {
            if(err) throw err;
            res.json({ token })
        });
        
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error')
    }
}

module.exports = {
    signUp,
    getUser,
    logIn,

}