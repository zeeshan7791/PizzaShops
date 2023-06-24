//calling Express in this file
const express=require('express')
// initiating Express to create server
const app=express();
const dotenv = require("dotenv");

//calling mongoose in this file
// const mongoose = require("mongoose");
//calling cors in this file

const cors = require("cors");

dotenv.config();
// app.use("/api/products",productRoutes)
const pizzaRoute=require("./route/pizzaroute")
app.use(express.json())
app.use(cors())
app.use("/api/v3",pizzaRoute)

// user Registration

//Server Created
app.set('port', (process.env.PORT || 4000));
app.listen(app.get('port'), function() {
    console.log('Server started on port '+app.get('port'));
});