///*200419082*/

//link to the express package
var express = require('express');
var router = express.Router();

/* GET home page. */
//router.get('/', function(req, res, next) {
router.get('/', (req, res, next) => {
    res.render('index', { title: 'Home' });
});

/* GET about page. */
router.get('/about', (req, res, next) => {
    res.render('about', {
        message1: 'This website allows users to add products and specify the kind of cathegory of the product',
    message2:'We are a company that offer logistic solutions to manage all the products that a company sells in one platforms'});
});

/* GET projects page. */
router.get('/projects', (req, res, next) => {
    res.render('projects', { message2: 'Our Staff will develop all the projects that you need' });
});

/* GET services page. */
router.get('/services', (req, res, next) => {
    res.render('services', { message3: 'Offered' });
});
/* GET contact page. */
router.get('/contact', (req, res, next) => {
    res.render('contact', { message4: 'The easy way to Contact our company is using this bike to drive to our location or with just a mail' });
});

/* GET contact page. */
router.get('/produts', (req, res, next) => {
    res.render('produts', { message1: 'This Website Allow users to Modify Products' });
});

//express this file as public
module.exports = router;
