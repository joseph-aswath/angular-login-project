const express = require('express');
const bodyParser = require('body-parser');
const multer = require('multer');
const fs = require('fs');
const validate = require('/controllers/validate.js');
const addUser = require('/controllers/addUser.js');
/*************************************************************************** */
const routerLogin = express.Router();
const routerRegister = express.Router();
const routerWelcome = express.Router();
/*************************************************************************** */
const app = express();
//const Routers = require('./routes.js');
/***************************************************************************** */
/* app.use */
app.use(routerLogin);
app.use(routerRegister);
app.use(routerWelcome);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
/****************************************************************************** */
/*READING JSON & SAVING IT AS AN OBJECT*/
var userData = fs.readFileSync('./user.json',"utf8",(err)=> { console.log("error") });
console.log(userData);
/****************************************************************************** */
/* LOGIN SECTION */
routerLoginLogin.get('/api/login',validate(req));
/*
routerLogin.get('/api/login',(req,res)=>{
    validate(req);
    console.log("login router : working");
    //acquire login info & display on console -> test 1 
});
*/
   

/******************************************************************************* */
/* REGISTER SECTION */
routerRegister.get('api/register',addUser(req));
/*
routerRegister.get('api/register',(req,res)=>{
    addUser(req);
    console.log("register router: working");
    //acquire register info & display on console -> test 2 
});
*/

/******************************************************************************* */
/* PORT SETTINGS */
const port = process.env.PORT || 9000;
console.log(`server on port: ${port}`);




