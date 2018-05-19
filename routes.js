module.exports = function(app){
    var library = require('./controllers/library');
    app.get('/search', library.search);
    app.get('/sources', library.searchSources);
}