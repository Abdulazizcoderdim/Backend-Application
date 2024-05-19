const express = require("express");
const mongoose = require("mongoose");
const postModel = require("./models/post.model");

const app = express();

app.use(express.json());

app.get('/', async (req, res) => {
    try {
        const allPost = await postModel.find()
        res.status(200).json(allPost)
    } catch (error) {
        res.status(500).json(error)
    }
})

app.post('/', async (req, res) => {
    try {
        const {title, body} = req.body
        const newPost = await postModel.create({title,body})
        res.status(201).json(newPost)
    } catch (error) {
        res.status(500).json(error)          
    }
})

app.delete('/:id', (req, res) => {
    const id = req.params.id
    res.status(200).json({id})
})


const DB_URL = "mongodb+srv://coderdim:KUYg3TTRI4AVMjNj@cluster0.nkyh1sp.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
const PORT = 3000


const bootstrap = async () => {
    try {
        await mongoose.connect(DB_URL)
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
