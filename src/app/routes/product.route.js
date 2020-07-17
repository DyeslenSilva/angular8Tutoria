const express = require('express');
const app = express();
const productRoutes = express.Router();

let Product  = require('../model/Product');

productRoutes.route('/add').post(function(req, res){
    let product = new Product(req.body);
    product.save().then(product => {
        res.status(200).json({'Product' :'Product has been added successfully'});
    }).catch(err =>{
        res.status(400).send("unable to save to database");
    });
});

productRoutes.route('/').get(function(req, res){
    Product.find(function(err, product){
        if(err){
            console.log(err);
        }else{
            res.json(products);
        }
    });
});

productRoutes.route('/edit/:id').get(function(req, res){
    let id =  req.params.id;
    Product.findById(id,function(err, products){
        res.json(product);
    })
})

productRoutes.route('/update/:id').get(function(req, res){
    Product.findById(req.params.id, function(err,product){
        if(!product){
            res.status(404).send("Record not found");
        }else{
            product.ProductName = req.body.ProductName;
            product.ProductDescrible = req.body.ProductDescrible;
            product.ProductPrice = req.body.ProductPrice;

            product.save().then(product =>{
                res.json('Update complete')
            }).catch(err =>{
                res.status(404).send("unable to update the database")
            });
        }
    });
});

productRoutes.route('/delete/:id').get(function(req,res){
    Product.findByIdAndRemove({_id: req.params.id},function(err, product){
        if(err) err.json(err);
        else res.json('Successfully removed')
    })
})