var request = require('request');

exports.search = function(req, res){
    var searchParam = "harry potter phoenix";
    var ebayProdAppId = "AshishPa-heroku-PRD-c132041a0-5f7406c1";
    var ebayApiUrl = "http://svcs.ebay.com/services/search/FindingService/v1"+
                     "?OPERATION-NAME=findItemsByKeywords"+
                     "&SERVICE-VERSION=1.0.0"+
                     "&SECURITY-APPNAME="+ebayProdAppId+
                     "&RESPONSE-DATA-FORMAT=JSON"+
                     "&REST-PAYLOAD"+
                     "&keywords="+searchParam;

    request(ebayApiUrl, function (error, response, body) {
      if (!error && response.statusCode == 200) {

        res.send(body);
      }
    })
};