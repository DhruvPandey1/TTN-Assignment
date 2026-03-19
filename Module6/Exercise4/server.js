const express = require("express");
const authRoutes=require('./authRoutes');


const app = express();
app.use(express.json());

app.use('/user',authRoutes);
const PORT = 8000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});