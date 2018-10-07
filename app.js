const fs = require('fs');
const http = require('http');
const objData = {
    name : 'huy',
    age : 18
};
const objData1 = ['phng' , 'pham ', 'aca'];
// objData.push({
//     name : 'phong',
//     age : 19
// });
objData1.push("man");
console.log(objData1.length);
const server = http.createServer();

server.listen(3000);

// console.log("Start write file");
// const fileWriterSync = fs.writeFileSync('test.txt', "dit con chi m",(err) =>{
//     if(err) console.log(err)
//     else console.log("write file success!");
// });

 console.log("Start write file");
 fs.writeFile('test.txt', JSON.stringify(objData), (err) =>{
  if(err) console.log(err)
   else console.log("write file success!");
});

// console.log("Start read file");
// const fileDataSync = fs.readFileSync('test.txt', {encoding : 'utf-8'});
// console.log("Data : " + fileDataSync);

// console.log("Start read file");
// const fileDataSync = fs.readFileSync('test.txt',{encoding : 'utf-8'});
// //const dataObj = JSON.parse(fileDataSync);
// console.log("read file success! Data :" + fileDataSync);

// // fs.writeFileSync

// console.log("End write file");

// console.log("Start read file");
// const  fileData = fs.readFile('test.txt', (err) =>{
//    if(err) console.log(err)
//    else console.log("read file success! Data :" + data);
// });

// fs.writeFileSync

// console.log("Start read file sync");
// const fileDataSync = fs.readFileSync('test.txt',{encoding : 'utf-8'});
// dataObj = JSON.parse(fileDataSync);
// console.log(dataObj.name +dataObj.age);
// console.log("End read file sync");