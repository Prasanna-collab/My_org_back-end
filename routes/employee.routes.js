const express = require("express");
const Employees = require("../models/employee.model");

const router = express.Router();

// CRUD Operations functions in mongoose {
// find() - to retrieve the data
// save()- to insert the data
//  findByIdandUpdate() - to modify the data
// deleteOne() - to delete the data}
router.get("/employees", (req, res) => {
  try {
    Employees.find((err, data) => {
      if (err) {
        return res.status(400).send({
          message:
            "Invalid request. Error while retrieving employees. Please check the data",
        });
      }
      res
        .status(200)
        .send({ message: "Employee data fetched successfully", data });
    });
  } catch (error) {
    res.status(500).send({
      message: "Internal Server Error",
      // Status code 500- Internal Server Error (server side error)
      // 200 - Success message, 300- Redirection , 404 - not found, 400- client side error, 201- success message but only while updating and adding the data
    });
  }
});
router.get("/employees/:id", (req, res) => {
     try {
       Employees.findOne({_id:req.params.id},(err, data) => {
         if (err) {
           return res.status(400).send({
             message:
               "Invalid request. Error while retrieving an employee. Please check the data",
           });
         }
         res
           .status(200)
           .send({ message: "Employee data fetched successfully", data });
       });
     } catch (error) {
       res.status(500).send({
         message: "Internal Server Error",
         // Status code 500- Internal Server Error (server side error)
         // 200 - Success message, 300- Redirection , 404 - not found, 400- client side error, 201- success message but only while updating and adding the data
       });
     }
   });
router.post("/employees", async (req, res) => {
  try {
    const payload = req.body;
    const newEmployee = Employees(payload);
    await newEmployee.save((err, data) => {
      if (err) {
        return res.status(400).send({
          message: "Error while adding the employee. Please check the data",
        });
      }
      res.status(201).send({
        employeeId: data._id,
        message: "Employee has been added Successfully!!",
      });
    });
  } catch (error) {
    res.status(500).send({ message: "Internal Server Error" });
  }
});
router.put("/employees/:id", (req, res) => {
  try {
    // const employeeID = req.params.empID;
    //     const payload = req.body;
    Employees.findByIdAndUpdate(
      { _id: req.params.id},
      { $set: req.body },
      (err, data) => {
        if (err) {
          return res.status(400).send({
            message: "Error While Updating the Employee. Please check the data",
          });
        }
        res
          .status(201)
          .send({ message: "Employee updated successfully", data });
      }
    );
  } catch (error) {
    res.status(500).send({ message: "Internal Server error" });
  }
});
router.delete("/employees/:id", (req, res) => {
  try {
     Employees.deleteOne({_id: req.params.id}, (err,data)=>{
          if(err){
               return res.status(400).send({message:"Error while deleting an employee. Please check the id"})
          }
          res.status(201).send({message:"Employee deleted Successfuly", data})

     })
  } catch (error) {
     res.status(400).send({message:"Internal Server Error"})
  }
});

module.exports = router;
