var express = require('express');
var exphbs = require('express-handlebars');
const webRoutes = require('./routes/webRoutes');

var app = express();

app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

app.use('/', webRoutes);

app.listen(3000, function () {
    console.log('App listening on port 3000!');
});