const mongoose = require('mongoose');

const schema =new mongoose.Schema({
    email:{
        type:String,
        require:true,
        unique:true,
    },
    password:{
        type:String
    },
    data:{
        type:Object
    }
})
const Keeper=new mongoose.model("Keeper",schema)
module.exports = {
    Keeper
}