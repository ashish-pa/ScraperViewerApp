var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
var mongoose = require('mongoose'),
User = mongoose.model('User');

function queryUser(ucid, pass){
    return new Promise((resolve, reject) => {
        // Connection URL
        var url = 'mongodb://robertkahs:Jack2849@ds115671.mlab.com:15671/heroku_8mk4pwb8';
        mongoose.connect(url);
        var db = mongoose.connection;
        User.findOne({'ucid': ucid, 'password': pass},function(err, results) {
            console.log(results);
            //found result
            if(results != null){
                resolve(true);
            }else{
                resolve(false);
            }
            db.close();
        });
        db.on('error', function () {
          throw new Error('unable to connect to database at ' + url);
          return reject(err);
        });
    })
}

module.exports.queryUser = queryUser;