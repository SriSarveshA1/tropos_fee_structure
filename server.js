const express=require('express');
const app=express();
const secretConfig = require('./configs/server.configs');










app.listen(secretConfig.PORT,()=>{
    console.log(secretConfig.PORT)
})