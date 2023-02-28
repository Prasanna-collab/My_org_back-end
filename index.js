require('dotenv').config();
const express = require('express');
const db = require('./db/connect');
const cors = require("cors")
// import routes
const employeeRoutes = require("./routes/employee.routes")

const app = express();

// Connecting DB
db();

// to store the sensitive data we use .env file. in order to access the variables in the .env file
// we should install the dotenv npm package and acquired it to the place where we want to use.
// variables inside the .env file can be accessed globally anywhere throughout the folder.
const port = process.env.port||5000;


//middleware
app.use(express.json());
//add any routes to distinct it from the front end routes. if we see api in url we come to know it is 
// sent by backend. 
app.use("/api",employeeRoutes)

//cors - cross origin resource sharing. It is used to share the data between the servers. Initially it wont allow any servers
// as a precaution. npm i cors  yet to update cors.
app.use(cors());
app.listen(port, ()=>{
     console.log("App is running on", port)
})