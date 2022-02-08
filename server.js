const express = require('express');
const mongoose = require('mongoose');
const server = express()
server.use(express.static('public'))
server.use(express.urlencoded({extended:true}))
server.use(express.json())


mongoose.connect('mongodb+srv://här kommer er connection string')
const db = mongoose.connection

db.on('open', (err)=>{
    if(err)throw err
    console.log('Database connected');
})

const userSchema = mongoose.Schema({
    name: String,
    email: String,
    password: String
})
const Users = mongoose.model('usersModel', userSchema, 'users')

server.get('/home', (req,res)=>{
    res.sendFile(__dirname + '/public' + '/home.html')
})

server.post('/register', (req, res)=>{
    const name = req.body.name
    const email = req.body.email
    const password = req.body.password
    const data = new Users({
        name: name,
        email: email,
        password: password
    })
    data.save((err)=>{
        if(err)throw err
        console.log('Saved to database');
    })
    //res.sendFile(__dirname + '/public' + '/login.html')
})
server.post('/login', (req, res)=>{
    const userEmail = req.body.login_name
    const userPassword = req.body.login_password
    async function auth() {
        const match = await Users.findOne({email:userEmail, password:userPassword})
        if(match){
            res.redirect('/home') //här lägger ni er home route
        }else {
            res.send('Login Failed')
        }
    }
    auth()
})



server.listen(3000);