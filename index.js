// Connecting to Database
import { Sequelize } from "sequelize"
import path from "path"
import dotenv from "dotenv"
import connectDB from "./DB/connectDB.js"
import User from "./Models/User.js"

dotenv.config()

try {
   
    // INSERT QUERIES

    const user = await User.create({
        first_name: "John",
        last_name: "Doe",
        email: "johndoe@gmail.com"
    })

// console.log(user);

    // SELECT QUERIES
    const users = await User.findAll()

    console.log(users);
    
} catch (error) {
    console.error(error);
}

