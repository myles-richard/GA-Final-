const db = require('../models');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { validationResult } = require('express-validator');

const index = async (req, res) => {
    try {
        let users = await db.User.find({});
        if(!users) return res.status(404).json({ msg: 'No users found'});
        return res.json(users);
    } catch (err) {
        console.error(err.message);
        res.status(500).json('Server Error')
    }
}

const show = (req, res) => {
    res.send('show')
}

const update = async (req, res) => {
    try {
        let userToUpdate = await db.User.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true });
        if(!userToUpdate) return res.status(401).json({ msg: 'You are not authorized to edit User'});
        return res.json(userToUpdate);
    } catch (err) {
        console.error(err.message);
        res.status(500).json('Server Error')
    }
}




const destroy = async (req, res) => {
    try {
        let userToDelete = await db.User.findOneAndDelete({ _id: req.params.id });
        if(!userToDelete) return res.status(401).json({ msg: 'You are not authorized to delete User'});
        return res.json(userToDelete);
    } catch (err) {
        console.error(err.message);
        res.status(500).json('Server Error')
    }
}

module.exports = {
    index,
    update,
    show,
    destroy
};
