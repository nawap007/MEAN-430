const express = require('express');

const app= express();

app.get('/contact', function(req, res) {
    res.send('<h1>Contact Us Page!</h1>');
});
app.get('/about', function(req, res) {
    res.send('<h1>About Us Page!</h1>');
});
app.get('/', function(req, res) {
    res.send('<h1>Home Page!</h1>');
});

app.listen(3000, function() {
    console.log('App listening on port 3000!');
});