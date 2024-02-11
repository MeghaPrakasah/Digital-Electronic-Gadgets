
//serverv creation page
// h H
const express = require('express')
const dbConnect = require('./Config/dbConnect')
const app = express()
const dotenv = require("dotenv").config()
const PORT = process.env.PORT || 3000
const authRouter = require('./Routes/authRoutes')
const bodyParser = require('body-parser')
const { notFound, errorHandler } = require('./MiddleWares/errorHandler')
dbConnect()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))

app.use('/api/user',authRouter)

app.use(notFound)
app.use(errorHandler)

app.listen(PORT,()=>{
    console.log(`Server is running at PORT ${PORT}`)
})