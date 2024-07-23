require('dotenv').config()
const express = require('express')
const configViewEngine=require('./config/viewEngine')
const webRouter=require('./routes/web')
const connection=require('./config/database')
// import express from 'express'
const app = express()
const port = process.env.PORT||8081
const hostname=process.env.HOST_NAME

// config req.body
app.use(express.json()); // for json
app.use(express.urlencoded({extended:true}));// for data
//config template engine
configViewEngine(app)
//Define route
app.use('/',webRouter)


app.listen(port,hostname, () => {
  console.log(`Example app listening on port ${port}`)
})