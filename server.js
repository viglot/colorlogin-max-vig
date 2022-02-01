const express = require('express');
const mongoose = require('mongoose');
const server = express()
server.use(express.static('public'))
server.use(express.urlencoded({extended:true}))

server.use(express.json())

server.post('/game', (req, res)=>{
    const userName = req.body.login_name
    const userPassword = req.body.login_password
    async function auth() {
    }
    auth()

})
server.get('/game', (req,res)=>{
    res.sendFile(__dirname)
})



server.listen(3000);