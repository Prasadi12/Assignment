import mongoose from 'mongoose';
const {Schema} = mongoose;

const EmployeeSchema = new mongoose.Schema({
    empNo:{
        type: String,
        required: true,
        max: 15,
    },
    empName:{
        type: String,
        required: true,
        max: 50,
    },
    empAddressLine1:{
        type: String,
        required: true,
        max: 80,
    },
    empAddressLine2:{
        type: String,
        max: 80,
    },
    empAddressLine3:{
        type: String,
        max: 80,
    },
    departmentCode:{
        type: String,
        required: true,
        max: 15,
    },
    dateOfJoin:{
        type: String,
        required: true,
        
    },
    dateOfBirth:{
        type: String,
        required: true,
        
    },
    basicSalary:{
        type: Number,
        required: true,
        
    },
    isActive:{
        type: Boolean,
        required: true,
        default: false
    }
});

export default mongoose.model("Employee", EmployeeSchema)