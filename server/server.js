const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const cookieParser=require('cookie-parser')



mongoose.connect("mongodb+srv://subhankashif696_db_user:cNGwhwc5H8mUsyYz@cluster0.wmn3rc3.mongodb.net/").then(()=>console.log("MongoDB Connected"))
.catch((error)=>console.log(error))

const app = express()
const PORT =process.env.PORT || 5000;

app.use(
    cors({
        origin:"http://localhost:5173",
        methods:['GET','POST','DELETE','PUT'],
        allowedHeaders:[
            "Content-Type",
            'Authorization',
            'Cache-Control',
            'Expires',
            'Pragma'
        ],
        credentials:true
    })
);

app.use(cookieParser());
app.use(express.json());

app.listen(PORT,()=>console.log(`Server running on port ${PORT}`))
