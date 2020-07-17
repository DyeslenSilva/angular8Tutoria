const mysql = require('mysql');
const Schema = mysql.Schema;

let Product = new Schema({
    ProductName:{
        type: String
    },

    ProductDescription:{
        type: String
    },

    ProductPrice:{
        type: Number
    }
},{
    collection: 'Product'
});

module.exports = mysql.model('Product', Product);