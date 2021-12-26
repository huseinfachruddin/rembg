const express = require("express")
const Router = require("./routes/routes.js")
const cors = require('cors')
const app = express() 

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/images', express.static('images'));
app.use(Router);


module.exports =  app;