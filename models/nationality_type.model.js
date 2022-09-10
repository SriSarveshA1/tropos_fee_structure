const mongoose=require('mongoose');
const constants=require('../utils/constants');

const nationality_type=new mongoose.Schema({
    
    name:{
        type:String,
        required:true,
        default:"NATIONALITY_TYPE"
    },
    type:{
        type:String,
        required:true,
        enum:[constants.NATIONALITY_TYPE.FOREIGN, constants.NATIONALITY_TYPE.INDIAN,constants.NATIONALITY_TYPE.NRI,constants.NATIONALITY_TYPE.SAARC]
    }

});

module.exports=mongoose.model('nationality_type',nationality_type);