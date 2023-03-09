import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import authRoute from "./routes/auth.js";
import employeesRoute from "./routes/employees.js";
import departmentsRoute from "./routes/departments.js";

const app = express();
dotenv.config();

const connect = async ()=>{
    try{
        await mongoose.connect(process.env.MONGO);
        console.log("Connected to mongoDB.")
    }catch (error) {
        throw error;
    }
};

mongoose.connection.on("disconnected", ()=>{
    console.log("mongoDB disconnected!")
})

//middlewares

app.use(express.json())

app.use("/api/v1.0/auth", authRoute);
app.use("/api/v1.0/Employee", employeesRoute);
app.use("/api/v1.0/Department", departmentsRoute);



app.listen(8000, ()=>{
    connect()
    console.log("Connected to backend.")
});