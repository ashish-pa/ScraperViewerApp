var mongoConnector = require('../dao/mongoConnector');
var mongoose = require('mongoose');
Book = mongoose.model('Book');

/*
 * Saves book details object to MongoDB with Book Schema defined in models/book.js
 */
exports.save = function(req, res){
    var bookDetails = req.body.book;
    console.log("Received request to sell: " + bookDetails.name);
    mongoConnector.save(new Book(bookDetails)).then(response => {
        console.log("Successful ? " + response);
        res.send(response);
    })
     .catch(err => {
         // handle errors
     })
};