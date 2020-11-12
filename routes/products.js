//link to the express package
var express = require('express');
//instanciestes a new express route to handle http request
var router = express.Router();

//Reference the task model
const Product = require('../models/product')

/* GET Task Index view. */
//use the task model to fetch a lists of task and pass these to view for display
//if en error occurs, the error parameter will filled
//if not, the task parameter will be filled with the query result

router.get('/', function (req, res, next) {

    Product.find((err, products) => {
        if (err) {
            console.log(err)
            res.end(err)
        }
        else {
            res.render('products/index',
                {
                    products: products
                })
        }
    })
})

//GET task add view
router.get('/add', (req, res, next) => {
    res.render('products/add')
})
//POST tasks / add for submission
router.post('/add', (req, res, next) => {
    //use Mongoose to try to save a new object
    Product.create({
        name: req.body.name,
        quantity: req.body.quantity,
        price: req.body.price
    }, (err, products) => {
        if (err) {
            console.log(err)
            res.end(err)
        }
        else {
            res.redirect('/products')
        }
    })
})
//GET task/delete/ - colon in the path represents a URL parameter
router.get('/delete/:_id', (req, res, next) => {
    //store the selected id in a local variable
    var _id = req.params._id;
    //Use Mongoose to delete the selected document from the DB
    Product.remove({ _id: _id }, (err) => {
        if (err) {
            console.log(err)
            res.end(err)
        }
        else {
            res.redirect('/products')
        }

    })  
})
//GET product/ edit/.. populate edit for with my existing task values
//GET product/delete/ - colon in the path represents a URL parameter
router.get('/edit/:_id', (req, res, next) => {
    //store the selected id in a local variable
    var _id = req.params._id;
    //use this selected id to look up the matching document
    Product.findById(_id,(err, products) => {
        if (err) {
            console.log(err)
            res.end(err)
        }
        else {
            res.render('products/edit',
                {
                    products: products
                })
        }
    })
})
//POST  product/ edit/;_id -> update selected document
router.post('/edit/:_id', (req, res, next) => {
    var _id = req.params._id
    //parse checkbox to bool
    var imported = false
    if (req.body.imported == "on")
        imported = true
    console.log('Imported: ' + req.body.imported)
    //instatiate a task Object with the new values from the submission
    var product = new Product({
        _id: _id,
        name: req.body.name,
        quantity: req.body.quantity,
        imported: imported,
        price: req.body.price
    })
    Product.update({ _id: _id },product, (err) => {
        if (err) {
            console.log(err)
            res.end(err)
        }
        else {
            res.redirect('/products')
        }
    })
})


//express this file as public
module.exports = router;