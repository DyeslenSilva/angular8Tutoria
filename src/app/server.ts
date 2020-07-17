import { pathToFileURL } from "url";
import { RequiredValidator } from '@angular/forms';
//import { config } from 'process';

const express = require('express'),
    path = require('path'),
    bodyParser = require('body-parser'),
    cors = require('cors'),
    mysql = require('mysql'),
    config = require('./DB');
const app =express();

const productRoute= require('./routes/product.route');
    mysql.Promise = global.Promise;
    mysql.connect(config.DB,{useNewUrlParser: true})
            .then( ()=> {console.log('Database is connect')},
            err => {console.log('Can not connect to database')});

let port = process.env.PORT || 4200;

const server = app.listen(function(){
    console.log('Listen on port' +port);
});

app.use(bodyParser.json());
app.use(cors());
app.use('products', productRoute);

