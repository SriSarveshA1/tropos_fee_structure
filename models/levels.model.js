const mongoose=require('mongoose');
const constants=require('../utils/constants');


const level_schema =new mongoose.Schema({
    name:{
        type:String,
        required:true,
        default:"Level"
    },
    type:{
        type:String,
        required:true,
        enum:[constants.LEVELS.ALL_LEVEL, constants.LEVELS.DIPLOMA,constants.LEVELS.PG,constants.LEVELS.PHD,constants.LEVELS.UG]
    }

})