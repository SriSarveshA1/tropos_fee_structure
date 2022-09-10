const mongoose=require('mongoose');
const constants=require('../utils/constants');

const course_model=new mongoose.Schema({
    name:{
        type:String,
        required:true,
        default:"COURSE_TYPE"
    },
    type:{
        type:String,
        required:true,
        enum:[constants.COURSE_TYPE.ALL_COURSES, constants.COURSE_TYPE.AYURVEDA,constants.COURSE_TYPE.DENTAL,constants.COURSE_TYPE.MEDICAL]
    }
});

module.exports=mongoose.model('course_model',course_model);