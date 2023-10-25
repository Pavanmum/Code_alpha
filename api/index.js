const express = require('express')
const cors = require('cors');
const mongoose = require('mongoose')
const authRoute = require("./routes/authRouter")
const cookieParser = require('cookie-parser')



const app = express()

app.use(cors({ origin: "http://localhost:3000", credentials: true }));


app.use(express.json())
app.use(cookieParser())
const dotenv = require('dotenv').config();

const connect = async () => {
    try {
        mongoose.set('strictQuery',false);
        mongoose.connect(process.env.MONGO)
        .then(()=>{
            console.log("Connected to DB");
        }).catch(err=>{
            throw err;
        })
    } catch (error) {
        console.log("Connection Error")
    }
}

app.use("/api/user/", authRoute)



app.listen(7000, () =>{
    connect();
    console.log("conneccted to server")
    
})