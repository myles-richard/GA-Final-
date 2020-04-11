const db = require('../models');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { validationResult } = require('express-validator');

const index = (req, res) => {
    res.send('index')
}

const show = (req, res) => {
    res.send('show')
}

const update = (req, res) => {
    res.send('update')
}

const create = async (req, res) => {
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

const destroy = (req, res) => {
    res.send('destroy')
}

module.exports = {
    index,
    create,
    update,
    show,
    destroy
};
