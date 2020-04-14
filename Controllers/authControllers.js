const db = require('../models');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { validationResult } = require('express-validator');


const getUser = async (req, res) => {
    try {
        const user = await db.User.findById(req.user.id).select('-password');
        res.json(user);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error')
    }
}

// Sign Up 
const signUp = async (req, res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() })
    } 

    const { name, email, password } = req.body;

    try {
        let user = await db.User.findOne({ email });

        if(user) {
            return res.status(400).json({ msg: 'User already exist' });
        }

        user = new db.User({
            name,
            email,
            password
        });

        const salt = await bcrypt.genSalt(10);

        user.password = await bcrypt.hash(password, salt);

        await user.save();

        
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
        res.status(500).send('server error')
    }

}

// Login 
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
    getUser,
    signUp,
    logIn,

}