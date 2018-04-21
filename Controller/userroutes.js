// http://localhost:3000/user/<route>

const Router = require('express').Router(),
    User = require('../Models/users.model.js');

Router.get('/index', (req, res) => {
    User.find({}).exec((error, users) => {
        if (error) {
            res.send(error);
        } else {
            res.send(users);
        }
    });
});

module.exports = Router;