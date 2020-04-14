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

const update = async (req, res) => {
    try {
        let userToUpdate = await db.User.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true });
        if(!userToUpdate) return res.status(401).json({ error: 'You are not authorized to edit User'});
        return res.json(userToUpdate);
    } catch (err) {
        console.error(err.message);
        res.status(500).json('Server Error')
    }
}



const destroy = (req, res) => {
    res.send('destroy')
}

module.exports = {
    index,
    update,
    show,
    destroy
};
