import express from "express";
import Employee from "../models/Employee.js";
const router = express.Router();

//Add new employee
router.post("/", async (req,res)=>{
    
    const newEmployee = new Employee(req.body)
    
    try{
        const savedEmployee = await newEmployee.save()
        res.status(200).json(savedEmployee)
    }catch(err){
        res.status(500).json(err)
    }
});
//Update existing employee
router.put("/:id", async (req,res)=>{
    try{
        const updatedEmployee = await Employee.findByIdAndUpdate(
            req.params.id, 
            {$set: req.body},
            {new: true}
        );
        res.status(200).json(updatedEmployee)
    }catch(err){
        res.status(500).json(err)
    }
});
//Delete existing employee
router.delete("/:empNo", async (req,res)=>{
    try{
        await Employee.findByEmpNoAndDelete(
            req.params.id
        );
        res.status(200).json("Employee has been deleted.");
    }catch(err){
        res.status(500).json(err)
    }
});
//Retrieve single employee record
router.get("/:empNo", async (req,res)=>{
    try{
        const employee = await Employee.findByEmpNo(
            req.params.id
        );
        res.status(200).json(employee)
    }catch(err){
        res.status(500).json(err)
    }
});
//Retrieve all employee records
router.get("/", async (req,res)=>{
    try{
        const employees = await Employee.find(
            req.params.id
        );
        res.status(200).json(employees)
    }catch(err){
        res.status(500).json(err)
    }
});


export default router