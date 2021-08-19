var express = require('express');
var app = express();
require('dotenv').config()

console.log("Hello World");
const mySecret = process.env.MESSAGE_STYLE
absolutePath = __dirname + '/views/index.html';
var response = 'Hello json'
app.use("/public", express.static(__dirname + '/public'))

 console.log(mySecret);

app.get('/json', (req, res) => {
    console.log(process.env);
  if(process.env.MESSAGE_STYLE === "uppercase"){
      response = response.toUpperCase();
    }
  res.json({
   "message":response
  })
});

app.get('/',(req,res) => {
  res.sendFile(absolutePath);
});



















 module.exports = app;
