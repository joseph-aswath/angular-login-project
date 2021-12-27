const express = require('express');
const bodyParser = require('body-parser');
const multer = require('multer');
const fs = require('fs');
const router = express.Router();
/*************************************************************************** */
const app = express();
//const Routers = require('./routes.js');
/***************************************************************************** */
/* app.use */
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
/****************************************************************************** */
/*READING JSON & SAVING IT AS AN OBJECT*/
var userData = fs.readFileSync('./user.json',"utf8",(err)=> { console.log("error") });
console.log(userData);
/****************************************************************************** */
/* LOGIN SECTION */
app.get('/api/login', (req,res) => {
    res.send(`node server running on : ${port}`);
    console.log("login: success");
/*
    //linear search
    for (var i=0; i< userData.length; i++){
        if( name==userData[i].name && pw == userData[i].pw){
            router.navigate('./welcome');
        }
    }
*/   
});
/******************************************************************************* */
/* REGISTER SECTION */
app.get('api/register',(req,res)=>{
    //parse data & store it as object 
    /* obj template
    var newUser = {
     name : req.body.name,
     pw : req.body.pw
    }
    */
    var newUser ={
        name:" ",
        pw:" "
    };
    userData.push(newUser);
    console.log("registration : success");
    router.navigate('./home');

    
});

/******************************************************************************* */
/* PORT SETTINGS */
const port = process.env.PORT || 9000;
console.log(`server on port: ${port}`);




