var validate = (req,res)=>{
    //acquire user login info & display on console -> test 1
    //read the file 
    var userData = fs.readFileSync('./user.json',"utf8",(err)=> { console.log("error") });
    console.log(userData);

    // object that is being sent by httpClient is loginFormData
    
    //linear search 
    for (var i = 0 ; i < userData.length; i++) {
        if(req.body.name == userData[i].name && req.body.password == userData[i].pw) {

            //re route to welcome page in angular 

            /*
            try to send the router link as a string 
            use a call back function in angular that takes this router link string from 
            the back end as a parameter & re routes to the desired view 
            */

            res.send("login successful");
            break;
        }
    }
}

module.exports = {validate};

