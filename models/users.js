var mongoose = require('mongoose'),
Schema = mongoose.Schema;

var UserSchema = new Schema({
  _id: String,
  ucid: String,
  password: String
});

mongoose.model('User', UserSchema, 'users'); //last param is collection name in mongo