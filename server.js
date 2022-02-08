const express = require("express");
const server = express()
server.use(express.static("public"))


let a = 0;
server.get('/highscore', (req, res)=>{
a++;
  res.send(a.toString());
});

server.listen(3000)