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

    /*console.log("In login.js before request...")

          request({
              url : 'https://cp4.njit.edu/cp/home/login',
              method : "POST",
               headers:
                 { 'cache-control': 'no-cache',
                   'content-type': 'application/x-www-form-urlencoded; charset=UTF-8' },
              form: { pass: 'ash101292', user: 'ajp38', uuid: '0xACA021' },

          },function(err,res,body){
              console.log("body below ????.");
              console.log(body);
          });*/

};