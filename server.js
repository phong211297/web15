const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const fs = require('fs');

app.use(bodyParser.urlencoded({ extended : false }));

app.get('/', (req,res) => {
    res.sendFile(__dirname + '/public/answer.html');
})

app.get('/ask', (req,res) => {
    res.sendFile(__dirname + '/public/ask.html');
})

app.get('/answer', (req,res) => {
    res.sendFile(__dirname + '/public/answer.html');
})

app.post('/creatquestion', (req,res) => {
    console.log(req.body);
    //const questionList = fs.readFileSync('./questions.json');
    let questionList = JSON.parse(fs.readFileSync('./questions.json'));
    console.log(questionList.length);

    const newQuestion = {
        id : questionList.length,
        questionContent : req.body.questionContent,
        yes : 0,
        no : 0
    };

    questionList.push(newQuestion);
    fs.writeFileSync('./questions.json', JSON.stringify(questionList));

    res.redirect('/answer');
 });

app.post('/creatquestion', (req,res) => {
   req.on('data', (data) => {
       console.log(data);
   });
});

const questionListReceived = fs.readFileSync(__dirname + '/questions.json',{encoding : 'utf-8'},(err) =>{
    if(err) console.log(err)
     else console.log("write file success!");
    });
 data1 = JSON.parse(questionListReceived);
 len = data1.length;
 var ran = Math.floor(Math.random() * len);
 var quesContent = data1[ran].questionContent;
 fs.writeFileSync('questionRandom.txt' , quesContent , (err)  => {
     if (err) console.log (err)
     else console.log("write random success");
 })

app.use(express.static('public'));

app.listen(3000, (err) => {
    if(err) console.log(err)
    else console.log("Server is listening at port 3000");

});