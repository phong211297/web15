const fs = require('fs');
const http = require('http');
const express = require('express');
const path = require('path');
const axios = require("axios");

const server = http.createServer();

var app = express();

app.use(express.static('../btvn4'));

app.get('/',(req,res) => {
      console.log(__dirname);
      res.sendFile(path.resolve(__dirname,'/index.html'));

})
app.get("/web10.json",function(req, res){
    axios.get("https://btvn-web15s.herokuapp.com/api/web10")
    .then(res => {
        fs.writeFileSync("../web10.json",JSON.stringify(res.data), (err) => {
            console.log(err);
        });
    })
    .catch(err => {console.log(err)});
    res.sendFile(__dirname + "/web10.json");
})

app.get("/web11.json",function(req, res){
    axios.get("https://btvn-web15s.herokuapp.com/api/web11")
    .then(res => {
        fs.writeFileSync("../web11.json",JSON.stringify(res.data), (err) =>{
            console.log(err);
        });
    })
    .catch(err => {console.log(err)});
    res.sendFile(__dirname + "/web11.json");
})

app.get("/web12.json",function(req, res){
    axios.get("https://btvn-web15s.herokuapp.com/api/web12")
    .then(res => {
        fs.writeFileSync("../web12.json",JSON.stringify(res.data), (err) =>{
            console.log(err);
        });
    })
    .catch(err => {console.log(err)});
    res.sendFile(__dirname + "/web12.json");
})

app.get("/web13.json",function(req, res){
    axios.get("https://btvn-web15s.herokuapp.com/api/web13")
    .then(res => {
        fs.writeFileSync("../web13.json",JSON.stringify(res.data), (err) =>{
            console.log(err);
        });
    })
    .catch(err => {console.log(err)});
    res.sendFile(__dirname + "/web13.json");
})
app.get("/web14.json",function(req, res){
    axios.get("https://btvn-web15s.herokuapp.com/api/web14")
    .then(res => {
        fs.writeFileSync("../web14.json",JSON.stringify(res.data), (err) =>{
            console.log(err);
        });
    })
    .catch(err => {console.log(err)});
    res.sendFile(__dirname + "/web14.json");
})

app.get("/web15.json",function(req, res){
    axios.get("https://btvn-web15s.herokuapp.com/api/web15")
    .then(res => {
        fs.writeFileSync("../web15.json",JSON.stringify(res.data), (err) =>{
            console.log(err);
        });
    })
    .catch(err => {console.log(err)});
    res.sendFile(__dirname + "/web15.json");
})

app.listen(3000,(err) => {
    if(err) console.log(err);
    else console.log("Server is listening at port 3000!");
    
});