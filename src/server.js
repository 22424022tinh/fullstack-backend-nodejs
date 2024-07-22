require('dotenv').config()
const express = require('express')
const configViewEngine=require('./config/viewEngine')
const webRouter=require('./routes/web')
// import express from 'express'
const app = express()
const port = process.env.PORT||8081
const hostname=process.env.HOST_NAME
//config template engine
configViewEngine(app)
//Define route
app.use('/',webRouter)



app.listen(port,hostname, () => {
  console.log(`Example app listening on port ${port}`)
})