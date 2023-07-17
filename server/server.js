import express from 'express'
import dotenv from 'dotenv'

import cors from 'cors'
import bodyParser from 'body-parser'


import Connection from './database/db.js'
import Router from './routes/route.js'

// import path from 'path'
// import { fileURLToPath } from 'url'


//esmodule fix
// const __filename = fileURLToPath(import.meta.url)
// const __dirname =  path.dirname(__filename)
dotenv.config()

const app = express()


app.use(cors())
app.use(bodyParser.json({extended: true}))       
app.use(bodyParser.urlencoded({extended: true}))  

app.use('/', Router)     

// app.use(express.static(path.join(__dirname, './client/build')))

// app.use('*', function(req,res){
//     res.sendFile(path.join(__dirname, "./client/build/index.html"))
// })
// const PORT = process.env.PORT || 8000
const PORT = 8000;
app.listen(PORT, ()=>{
    console.log(`Server listening on port ${PORT}`)
})


const USERNAME = process.env.DB_USERNAME
const PASSWORD = process.env.DB_PASSWORD


Connection(USERNAME,PASSWORD);