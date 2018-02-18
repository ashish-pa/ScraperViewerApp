var mongoConnector = require('../dao/mongoConnector');

exports.authenticate = function(req, res){
    var usersMock = {
        'admin': {
            ucid: 'admin',
            password: '1234'
        }
    };
    var userRequest = req.body.user;
    mongoConnector.queryUser(userRequest.ucid, userRequest.password).then(user => {
        var response = {"response": ""};
        console.log("validUser? " + user);
        if(user){
            /*var user = usersMock[userRequest.ucid];
            user = ( user && ( user.password == userRequest.password ) ) ? user : "undefined";*/
            response = {"response": userRequest};
        }else{
            response = {"response": "undefined"};
        }

        console.log(response);
        console.log("Completed");
        res.send(response);
    })
    .catch(err => {
        // handle errors
    })

};