// require("dotenv").config();
const mongoose = require("mongoose");
mongoose.set('strictQuery', false);
db = async() => {
     try{
          await mongoose.connect(process.env.mongo_url);
          console.log("DB Connection established Successfully!!!")
     }catch(error){
          console.log("DB Error", error)
     }
}


module.exports = db;