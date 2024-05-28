import Cars from '../models/Carmodel.js';
import Books from '../models/Bookmodel.js'
import dotenv from 'dotenv';
dotenv.config();
const getcars = async (req, res) => {
    try {
        const result = await Cars.find({});
        res.send(result);
        console.log(result);
    } catch (error) {
        console.error(error);
        res.status(500).send("Internal server error");
    }
};
const getbooks = async (req, res) => {
    try {
        const result = await Books.find({});
        res.send(result);
        console.log(result);
    } catch (error) {
        console.error(error);
        res.status(500).send("Internal server error");
    }
};
const createcar = async (req, res) => {
    const { Name,Rate,Year,Color,Regno,Carimg } = req.body;
    try {
        const existingCar = await Cars.findOne({ Regno });
        if (existingCar) {
            console.log(existingCar);
            console.log('Car Already Exists');
            return res.status(409).send('Car Already Exists');
        }
        const newCar = await Cars.create({Name,Rate,Year,Color,Regno,Carimg});
        res.send('Car Added Successfully');
     } catch (error) {
        console.error(error);
        res.status(500).send("Internal server error");
    }
};
const createbook = async (req, res) => {
    const { Regno, Hours, Date, CheckinTime, Aadhar } = req.body;
    try {
        // Ensure you are using the correct property name to find the car by registration number
        const existingCar = await Cars.findOne({ Regno });
        
        if (existingCar) {
            const Name=existingCar.Name;
            const Carimg=existingCar.Carimg;
            console.log(Name,Carimg)
            const newbook=await Books.create({Name,Carimg,Regno, Hours, Date, CheckinTime, Aadhar});
            res.send("Car Booked Successfully")
        } else {
            console.log('Car Not Exists');
            return res.status(404).send('Car Not Exists');
        }
    } catch (error) {
        // Handle any errors
        console.error(error);
        res.status(500).send("Internal server error");
    }
};


export { getcars, createcar,createbook,getbooks };
