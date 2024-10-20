const mongoose = require('mongoose')
require('dotenv').config()

const url = process.env.db
mongoose.connect(url).then(
    ()=>{
        console.log('connected to database successfully.')
    }
).catch((error)=>{
    console.log(error.message)
})