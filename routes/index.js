//link to the express package
var express = require('express');
var router = express.Router();

/* GET home page. */
//router.get('/', function(req, res, next) {
router.get('/', (req, res, next) => {
    res.render('index', { title: 'Home' });
});

/* GET Gelvis page. */
router.get('/about', (req, res, next) => {
    res.render('about', { message1: 'This website allows users to add products and specify the kind of cathegory of the product' });
});

/* GET Gloria page. */
router.get('/projects', (req, res, next) => {
    res.render('projects', { message2: 'Projects developed' });
});

/* GET Geidy page. */
router.get('/services', (req, res, next) => {
    res.render('services', { message3: 'Offered' });
});
/* GET Ximena page. */
router.get('/contact', (req, res, next) => {
    res.render('contact', { message4: 'Contact us' });
});
//express this file as public
module.exports = router;
