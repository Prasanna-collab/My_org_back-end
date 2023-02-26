const mongoose = require("mongoose");

// Schema Definition
const employeeSchema =new mongoose.Schema({
     name:{
          type: String,
          trim: true,
          required: true
     },
     email:{
          type: String,
          unique:true,
          trim:true,
          required:true,
          
     },
     mobileNumber:{
          type:String,
          unique:true,
          trim:true,
          required:true,
          
     },
     designation:{
          type:String,
          required:true,
          trim: true
     },
     address:{
          type:String,
          required:true,
          trim:true
     },
     bloodGroup:{
          type:String,
          trim:true
     }
});

// model creation and exporting the mnodel we created. here employee is the collection
module.exports = mongoose.model("employees", employeeSchema)