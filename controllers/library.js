var request = require('request');
var mongoose = require('mongoose');
var mongoConnector = require('../dao/mongoConnector');
Book = mongoose.model('Book');

exports.search = function(req, res){
    var searchParam = req.query.search;

    var ebayProdAppId = "AshishPa-heroku-PRD-c132041a0-5f7406c1";
    var ebayApiUrl = "http://svcs.ebay.com/services/search/FindingService/v1"+
                     "?OPERATION-NAME=findItemsByKeywords"+
                     "&SERVICE-VERSION=1.0.0"+
                     "&SECURITY-APPNAME="+ebayProdAppId+
                     "&RESPONSE-DATA-FORMAT=JSON"+
                     "&REST-PAYLOAD"+
                     "&keywords="+searchParam;

    //query from ebay api
    request(ebayApiUrl, function (error, response, body) {
      if (!error && response.statusCode == 200) {
        body = JSON.parse(body);
        var query = {'$or':
                            [{'name':{'$regex':searchParam, '$options':'i'}},
                             {'author':{'$regex':searchParam, '$options':'i'}},
                             {'isbn13':{'$regex':searchParam, '$options':'i'}},
                             {'edition':{'$regex':searchParam, '$options':'i'}}]};

        //query njit student/professor sell requests
        mongoConnector.queryAllMatching(Book, query).then(booksRUsResults => {
            var response = {
                              "ebay":       body.findItemsByKeywordsResponse,
                              "books-r-us": booksRUsResults
                           };
            res.send(response);
        })
      }
    })
};