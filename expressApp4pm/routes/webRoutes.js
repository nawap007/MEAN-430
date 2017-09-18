const express= require('express');
const router= express.Router();

router.get('/about', function (req, res) {
    res.render('about', { Title: 'About Us Page' });
});
router.get('/', function (req, res) {
    res.render('home', { Title: 'Home Page' });
});

module.exports=router;