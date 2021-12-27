const express =require("express");
const path=require("path");

const app=express();

app.use(express.static("frontend"));
app.use("/css",express.static("frontend/css"));
app.use("/js",express.static("frontend/js"));
app.use("/images",express.static("frontend/images"));

app.get("/index",(request,response)=>{
    response.sendFile(path.join(__dirname+"/frontend/views/index.html"));

});

const port=3000;
app.listen(port,()=>{console.log("Serveri esht duke pritur kerkesa")});