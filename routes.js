module.exports = function(app){
    var login = require('./controllers/login');
    var library = require('./controllers/library')
    app.post('/authenticate', login.authenticate);
    app.get('/search', library.search);
}