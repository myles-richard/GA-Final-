const db = require('../models');


const index = (req, res) => {
    res.send('index')
}

const show = (req, res) => {
    res.send('show')
}

const update = (req, res) => {
    res.send('update')
}

const create = (req, res) => {
    res.send('create user')
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
