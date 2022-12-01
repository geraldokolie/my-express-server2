const express = require("express");

const app = express()

app.get("/", function(req, res){
    res.send("<h1>Hello, world!</h1>");
})

app.get("/contact", function(req, res){
    res.send("contact me at: gerald@gmail.com");
});

app.get("/about", function(req, res){
    res.send("My name is Gerald and i love beer and code")
});

app.get("/hobbies", function(req, res){
    res.send("<ul><li>Coffee</li><li>Code</li><li>beer</li></ul>");
});

app.listen(3000, function(){
    console.log("Server started on port 3000");
});