var request = require('request');
var mongoose = require('mongoose');
var mongoConnector = require('../dao/mongoConnector');
var Shows = mongoose.model('Shows');

exports.search = function(req, res){
    /*var searchParam = req.query.search;
    var distinctFieldName = req.query.distinctFieldName;*/
    console.log(req.query.obj);
    var post_options = {
          url: 'http://yo-desi-scraper-api.herokuapp.com/api/search',
          method: 'POST',
          json: JSON.parse(req.query.obj)
      };
    console.log("request: "+ post_options);
    request(post_options, function (error, response, body) {
      if (!error && response.statusCode == 200) {
        res.send(body);
      }
    })
};


exports.searchSources = function(req, res){
    console.log(req.query.obj);
    var post_options = {
          url: 'http://yo-desi-scraper-api.herokuapp.com/api/search/sources',
          method: 'POST',
          json: JSON.parse(req.query.obj)
      };
    console.log("request: "+ post_options);
    request(post_options, function (error, response, body) {
      if (!error && response.statusCode == 200) {
        res.send(body);
      }
    })
};