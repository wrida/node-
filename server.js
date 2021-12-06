const express = require('express')
const mongoose = require('mongoose')
const app = express()
const router = express.Router();
mongoose.connect('mongodb+srv://user:user@cluster0.653ex.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
(err)=>(err ? console.log(err) : console.log('database is connected')
))

const User = require('./Models/usersModel')
//routes
app.use('/api/users', require('./Routes/userRoute'))
app.listen(7000,() => console.log('sever is running'))