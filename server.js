const express = require("express");
const server = express();
const mongoose = require("mongoose");
server.use(express.static("public"));
server.use(express.urlencoded({extended:true}));      



server.use(express.json())

server.post('/login', (req, res)=>{
    const userName = req.body.Uname
    const userPassword = req.body.Pass
    async function auth() {
    }
    auth()

})
server.get('/login', (req,res)=>{
    res.sendFile(__dirname)
})

server.listen(3000)

