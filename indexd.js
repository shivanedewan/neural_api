const express=require("express");
const app=express();

app.get("/",function(req,res){
    res.sendFile(__dirname+"/api.html");
});
app.get("/docs",function(req,res){
    res.sendFile(__dirname+"/apidocs.html");
});
app.get("/weights",function(req,res){
    res.sendFile(__dirname+"/py.html");
});
app.get("/extractor",function(req,res){
    res.sendFile(__dirname+"/feature.html");
});
app.get("/replace",function(req,res){
    res.sendFile(__dirname+"/fcreplacement.html");
});
app.get("/login",function(req,res){
    res.sendFile(__dirname+"/login-page-with-background-image/index.html");
});





app.listen(3000,function(req,res){
    console.log("server started on port 3000");
});
