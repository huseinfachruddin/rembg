const express = require("express")
const Router = require("./routes/routes.js")
const cors = require('cors')
const bodyParser = require('body-parser')
var path = require('path');
const app = express() 

app.use(cors());
app.use(bodyParser());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use('/api/v1', Router);


module.exports =  app;