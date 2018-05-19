/**
 * Node JS configs for Providers Search api end points and static resources
 * @author Ashish Patel
 */
var express = require('express');
var app = express();
var path = require('path');
var fs = require('fs');
var bodyParser = require('body-parser');
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies
require('./models/shows');
require('./routes')(app);

/*
 * Returns index.html on app start up
 */
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

//default port to run on 8080
app.listen(process.env.PORT || 8094, function(){
  console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});

/*static resources config*/
app.use('/app', express.static(path.join(__dirname + '/app')));
app.use('/node_modules', express.static(path.join(__dirname + '/node_modules')));