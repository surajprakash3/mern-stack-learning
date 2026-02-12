const express = require("express")
const productRoutes=require('./routes/productRoutes')
const studentRoutes= require('./routes/studentRoutes')

const port=5050;
const app = express();
app.use(express.json());


app.use('/api',productRoutes)
app.use('/student-api',studentRoutes)


app.listen(port,() =>{
    console.log("Server is running",port)
})