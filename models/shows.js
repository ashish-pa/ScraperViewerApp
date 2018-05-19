var mongoose = require('mongoose'),
Schema = mongoose.Schema;

var BookSchema = new Schema({
  showLinks: Object,
  showName: String,
  channelName: String,
  showImageUrl: String,
  showDate: String
});

mongoose.model('Shows', BookSchema, 'desitv'); //last param is collection name in mongo