const express = require("express");
const app = express();
const cors = require("cors");
const dotenv = require("dotenv").config();
const authRouter = require("./routes/authRoutes");
const accountRouter = require("./routes/accountRoutes");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const PORT = process.env.PORT;
const allowedOrigins = process.env.ALLOWED_ORIGINS
  ? process.env.ALLOWED_ORIGINS.split(",")
  : [];

const corsOptions = {
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
};
app.use(cors(corsOptions));
app.use("/auth", authRouter);
app.use("/account", accountRouter);

const connectDB = require("./db/dbConfig");

connectDB();

app.listen(PORT, () => console.log(`Server running on ${PORT}`));
