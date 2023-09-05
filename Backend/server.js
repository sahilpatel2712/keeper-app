const express = require('express');
require("dotenv").config();
const cors = require('cors'); 
const router = require('./Routes/route');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
let app=express()
app.use(cors());
mongoose.connect(process.env.MONGODB_CONNECTION_STRING).then(()=>{
    console.log("Connected");
})
.catch((err)=>{
    console.log(err);
})

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


app.use("/api/v1",router)

app.listen(5000)