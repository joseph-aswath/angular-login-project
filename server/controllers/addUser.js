var addUser = (req,res) => {
    //acquire user info & display on console -> test 2 
    //read file 
    //obj being received through http : registerFormData

    var userData = fs.readFileSync('./user.json',"utf8",(err)=> { console.log("register : error") });
    console.log(userData);

    const objTemplate = {
        "name" : req.body.name,
        "pw": req.body.password
    }

    console.log(registerFormData)

    userData.push(objTemplate);

    res.send("registration successful");
    console.log("registratoin: success");


}

module.exports = {addUser};