const express = require("express");
const colors = require("colors");
const morgan = require("morgan");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const cors = require("cors");
const path = require("path");

//dotenv config
dotenv.config();

//mongodb connection
connectDB();

//rest object
const app = express();

//middlewares
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

//routes
app.use("/api/v1/user", require("./routes/userRoutes"));

//port
const PORT = process.env.PORT || 8080;

//LISTEN PORT
app.listen(PORT, () => {
  console.log(
    `SERVER IS RUNNING IN ${process.env.dev_mode} MODE ON PORT ${PORT}`
      .bgMagenta.white
  );
});
