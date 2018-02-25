module.exports = function(app){
    var login = require('./controllers/login');
    var library = require('./controllers/library');
    var sell = require('./controllers/sell');
    app.post('/authenticate', login.authenticate);
    app.get('/search', library.search);
    app.post('/sell', sell.save);
}