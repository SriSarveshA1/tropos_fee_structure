const mongoose=require('mongoose');

const fee_schema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
        default:"Fee"
    },
    type:{
        type:String,
        required:true,
        enum:[]
    }
})