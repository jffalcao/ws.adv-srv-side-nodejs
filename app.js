const express = require('express'),
    app = express(),
    mongodb = require('mongodb'),
    mongoose = require('mongoose'),
    port = process.env.PORT || 3000,
    myDB = 'mongodb://localhost/adv-srv-side-nodejs',
    User = require('./Models/users.model.js'),
    UserRoutes = require('./Controller/userroutes.js');

mongoose.connect(myDB);
app.use('/user', UserRoutes); // http://localhost:3000/user/<route>

app.listen(port, (error) => {
    if (!error) {
        console.log('Listening on port: ', port);        
    } else {
        console.log(err);        
    }
});