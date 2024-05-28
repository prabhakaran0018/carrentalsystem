import express from "express";
import dotenv from "dotenv"
import cors from 'cors'
import DBConnector from "../config/dbconnector.js"
import CarRoute from '../routes/CarRoutes.js'
dotenv.config()
DBConnector()
const PORT=4004;
const app=express()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}));
app.use("/api/",CarRoute)
app.listen(PORT,()=>{
    console.log(`Server running on Port ${PORT}`)
})