const { validationResult } = require("express-validator");
const {Keeper} = require('../models/model');

const registration=(req,res)=>{
    let errors=validationResult(req)
    if (!errors.isEmpty()) {
        res.send(errors.array())  //here we get data from our api
    } else {
       const email=req.body.email 
       const password=req.body.password
        console.log(req.body);
       const newuser=new Keeper({
        email:email,
        password:password,
        data:[]
       })
       newuser.save().then((val) => {res.send(val) })
       .catch((error) => { res.send(error.message) });
    }
}

const login=(req,res)=>{
    const email=req.body.email 
    const password=req.body.password

    Keeper.findOne({email:email,password:password}).then((val)=>{
        if (val===null) {
            res.send("please Enter valid email or password")
        } else {
            res.send(val)
        }
        
    }).catch((err)=>{
        console.log("sdf",err);
    })
}


const postData=(req,res)=>{
    const email=req.body.email
    const data=req.body.data
    console.log(data);
    Keeper.findOneAndUpdate({email:email},{data:data}).then((val)=>{
        res.send(val)
    }).catch((err)=>{
        res.send(err);
    })
}

const getData=(req,res)=>{
    const email=req.body.email
    Keeper.findOne({email:email}).then((val)=>{
        res.send(val.data)
    }).catch((err)=>{
        res.send(err)
    })
    
}

module.exports = {
    registration,login,postData,getData
};