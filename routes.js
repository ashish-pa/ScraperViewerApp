module.exports = function(app){
    console.log("Exports for all routes.js");
    var login = require('./controllers/login');
    app.post('/authenticate', login.authenticate);
}