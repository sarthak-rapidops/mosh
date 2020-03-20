const helmet = require('helmet')
const logger = require('logger')
const express = require('express')
const course = require('./routes/course')
const course = require('./routes/home')
const app = express(); 
app.use(express.json()) // return the piece of middleware and then we call app.use to use that middleware on reprocessing pipeline(use to read request)
app.use(express.urlencoded( {extended:true })) // pass incoming request with url encoded payloads (body like key value pair)
app.use(express.static('public')) 
app.use (logger) // middleware function
app.use(helmet()) // thirdparty middleware
app.use('/api/courses', course);
 


const port = process.env.PORT || 3010
app.listen(3010,  ()=>{
    console.log(`listening on ${port}`);
})