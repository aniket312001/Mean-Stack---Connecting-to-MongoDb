const express = require('express')
const cors = require('cors')

const mongoose = require('./db')
const routes = require('./route')

const app = express()
app.use(express.json())  // no need for body parser
app.use(cors({origin:'http://localhost:4200'}))  // angular app localhost 

app.listen(3000,()=>{
    console.log("Server started at port 3000")
})

app.use('/employee',routes)