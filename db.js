const mongoose = require('mongoose');

const mongoURL =  'mongodb://127.0.0.1:27017/hotels'

//setup the default connection
mongoose.connect(mongoURL)
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.error("MongoDB connection error:", err));


//get the deafult connection 
//mongoose maintains a default connection object representing the mongodb connection
const db = mongoose.connection;

//define event listener for databse connection

db.on('connected',()=>{
    console.log("Connected to MongoDB server");
})
db.on('error',()=>{
    console.log(" MongoDB connection error");
})
db.on('disconnected',()=>{
    console.log(" MongoDB Disconnected");
})

module.exports =db;