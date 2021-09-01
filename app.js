const express = require('express')
const app = express()

app.get('/',(req,res)=>{
    res.sendFile(__dirname+'/view/index.html');
})

app.get('/red',(req,res)=>{
    res.setHeader('Content-Type','text/html');
    res.end('<h1 style="color : red">Helu wun</h1>');
})

const PORT = 5000;
app.listen(PORT);
console.log('running on port: ',PORT);