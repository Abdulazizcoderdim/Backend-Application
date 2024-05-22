require('dotenv').config();

const express = require("express");
const fileUpload = require('express-fileupload');
const mongoose = require("mongoose");
const requestTime = require('./middllewares/request-time');

// Routes

const app = express();

// Midleware
app.use(requestTime);
app.use(express.json());
app.use(express.static('static'));
app.use(fileUpload({useTempFiles: true}));

// Routes
app.use("/api/post", require('./routes/post.route'))


const PORT = process.env.PORT || 3000

const bootstrap = async () => {
    try {
        await mongoose.connect(process.env.DB_URL)
         .then(()=>console.log("MongoDB connected...."))
         .catch((error)=>console.log("Mongo DB Ulanib bomadi",error))
        app.listen(PORT, ()=> {
            console.log(`Server is running on port - http://localhost:${PORT}`)
        })
        
    } catch (error) {
        console.log(`Server yoki Mongo DB ulanish Xato boldi...${error}`)
    }
}
bootstrap()
