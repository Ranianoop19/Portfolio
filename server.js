process.env.NODE_ENV="development";
const express=require('./config/express');
const app=express();



app.listen(8081);
module.exports=app;
console.log("server i runninggggggggg");