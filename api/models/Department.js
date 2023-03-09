import mongoose from 'mongoose';
const {Schema} = mongoose;

const DepartmentSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
    },
    type:{
        type: String,
        required: true,
    },
    city:{
        type: String,
        required: true,
    },
    address:{
        type: String,
        required: true,
    },
    title:{
        type: String,
        required: true,
    },
    desc:{
        type: String,
        required: true,
    }
});

export default mongoose.model("Department", DepartmentSchema)