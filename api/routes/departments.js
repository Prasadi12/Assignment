import express from "express";
import Department from "../models/Department.js";
const router = express.Router();

//Add new departments
router.post("/", async (req,res)=>{
    
    const newDepartment = new Department(req.body)
    
    try{
        const savedDepartment = await newDepartment.save()
        res.status(200).json(savedDepartment)
    }catch(err){
        res.status(500).json(err)
    }
});
//Retrieve all departments records
router.get("/", async (req,res)=>{
    try{
        const departments = await Department.find(
            req.params.id
        );
        res.status(200).json(departments)
    }catch(err){
        res.status(500).json(err)
    }
});


export default router