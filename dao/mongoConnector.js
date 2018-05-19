var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
var mongoose = require('mongoose');

var url = 'mongodb://robertkahs:Jack2849@ds135747.mlab.com:35747/heroku_hd9c7qwg';

/*
 * Utility to fetch all matching objects in mongodb
 */
exports.queryAllMatching = function(schemaObject, queryObject){
    return new Promise((resolve, reject) => {
        mongoose.connect(url);
        var db = mongoose.connection;
        schemaObject.find(queryObject,function(err, results) {
            resolve(results);
            db.close();
        });
        db.on('error', function () {
          throw new Error('unable to connect to database at ' + url);
          return reject(err);
        });
    })
}

/*
 * Utility to save data to mongodb
 */
exports.save = function(object){
    return new Promise((resolve, reject) => {
        mongoose.connect(url);
        var db = mongoose.connection;

        object.save(function(error) {
            resolve(true);
            db.close();

            if (error) {
                console.error(error);
            }
        });

        db.on('error', function () {
          throw new Error('unable to connect to database at ' + url);
          return reject(err);
        });
    })
}
