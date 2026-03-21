const express = require("express");
const cors = require("cors");
const todoRoutes = require("./routes/todo.js");

const app = express();

app.use(cors());

app.use(express.json());

app.use("/todos", todoRoutes);
app.listen(5000,()=>{
    console.log("server is listening at port 5000")
})

module.exports=app;