var addUser = (req,res) => {

    //read file 
    var userData = fs.readFileSync('./user.json',"utf8",(err)=> { console.log("error") });
    console.log(userData);

    const objTemplate = {
        "name" : req.body.name,
        "pw": req.body.password
    }

    userData.push(objTemplate);

    res.send("registration successful");
    console.log("registratoin: success");


}

module.exports = {addUser};