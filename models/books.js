var mongoose = require('mongoose'),
Schema = mongoose.Schema;

var BookSchema = new Schema({
  sellerUcid: String,
  name: String,
  image: String,
  edition: String,
  author: String,
  cost: String,
  condition: String,
  paymentMethod: String,
  city: String,
  state: String,
  sellerEmail: String,
  isbn13: String
});

mongoose.model('Book', BookSchema, 'books'); //last param is collection name in mongo