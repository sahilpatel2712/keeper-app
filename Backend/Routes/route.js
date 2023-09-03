const express = require("express");
const router = express.Router();
const {validators} = require('../middlerware/validator');
const {registration,login,postData,getData} = require('../controller/controll');

router
    .post("/registration",validators,registration)
    .post("/login",login)
    .post("/postData",postData)
    .post("/getData",getData)
    ;
 

// Export router
module.exports = router;
