const mongoose=require('mongoose');
const constants=require('../utils/constants');


const fee_schema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
        default:"Fee"
    },
    type:{
        type:String,
        required:true,
        enum:[constants.FEE_TYPES.EXAM_FEE, constants.FEE_TYPES.APPLICATION_FEE]
    }
});

module.exports=mongoose.model('fee_schema',fee_schema);