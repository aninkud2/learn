require("dotenv").config();
const express = require('express')
const session = require("express-session");
const MongoDBStore = require('connect-mongodb-session')(session);
const app = express()
const port = process.env.PORT
app.use(express.json())
const db = require('./config/db')
const router = require('./routers/schoolRouter')



app.use(router)

const store = new MongoDBStore({
    uri: process.env.db,
    collection: 'mySessions'
  });

  store.on('error', function(error) {
    console.log(error);
  });
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: false,
    store: store
  }));



app.listen(port, ()=>{
    console.log(`app is listening to ${port}.`)
})