const express=require("express")
const app=express()
require("../DB/db")


app.listen(3000,()=>{
           console.log("running on 3000");
})