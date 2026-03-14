const express=require('express');
const userRoutes=require('./userRoutes')
const studentRoutes=require('./studentRoutes')
const cors=require('cors');
const app=express();


app.use(cors());
app.use(express.json());


app.use('/api/users',userRoutes);
app.use('/api/students',studentRoutes);

app.listen(8000,()=>{
    console.log("The server listening at 8000");
})