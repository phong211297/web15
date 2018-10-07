const express = require('express');
const path = require('path');
let app = express();

app.use(express.static('../btvn2'))

app.get('/', (req,res) => {
          console.log(__dirname); 
        //   res.send({success: 1,data:"Hello" });
        res.sendFile(path.resolve(__dirname, '../btvn2/index.html'));
});
app.get('http://localhost:3000/style.css', (req,res) => {
    console.log(__dirname); 
  res.sendFile(path.resolve(__dirname, '../btvn2/style.css'));
});
app.listen(3000,(err) => {
    if(err) console.log(err);
    else console.log("Server is listening at port 3000!");
    
})