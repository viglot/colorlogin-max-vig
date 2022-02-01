const express = require('express');
const mongoose = require('mongoose');
const server = express()
server.use(express.static('public'))
server.use(express.urlencoded({extended:true}))

server.use(express.json())



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

=======
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

