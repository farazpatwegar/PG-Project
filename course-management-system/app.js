//import all libraries
const express=require("express");
const app=express();
const path=require("path");
const routes=require("./routes/router") 
const bodyParser=require("body-parser")

//configure the app
app.set("views",path.join(__dirname,"views"))
app.set("view engine","ejs")

//to add static reference
app.set(express.static(path.join(__dirname,"public")))

//to use .js client side script or css file
app.use("/css",express.static(path.resolve(__dirname,"public/css")))
app.use("/js",express.static(path.resolve(__dirname,"public/js")))


//add middlewares
app.use(bodyParser.urlencoded({extended:false}))
// app.use(bodyParser.json())

//send control to router.js
app.use("/",routes)

app.listen(3002,function(){
    console.log("server has started at port 3002")
})
module.exports=app;