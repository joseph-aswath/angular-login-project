var validate = (req,res)=>{

    //read the file 
    var userData = fs.readFileSync('./user.json',"utf8",(err)=> { console.log("error") });
    console.log(userData);

    //linear search 
    for (var i = 0 ; i < userData.length; i++) {
        if(req.body.name == userData[i].name && req.body.password == userData[i].pw) {

            //re route to welcome page in angular 

            res.send("login successful");
        }
    }
}

module.exports = {validate};

