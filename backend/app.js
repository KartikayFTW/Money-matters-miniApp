const express = require('express');
const app = express();
const cors = require('cors');
const dotenv = require('dotenv').config();
const authRouter = require("./routes/authRoutes");
app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use("/auth",authRouter)

const connectDB = require('./db/dbConfig')

connectDB();

const PORT=3005;

app.listen(PORT, () => console.log(`Server running on ${PORT}`));


