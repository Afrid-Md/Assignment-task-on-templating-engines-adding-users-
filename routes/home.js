const express = require('express');
const path = require('path');

const routes = express.Router();

const users = [];

routes.get('/',(req,res,next)=>{
    res.render("home",{docTitle : "Add User", path : "/"});
});

routes.post('/add-user',(req,res,next)=>{
    users.push(req.body.userName);
    console.log(users);
    res.redirect('/');
})

module.exports = {
    homeRoutes : routes,
    users : users
}