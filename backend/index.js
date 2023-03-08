require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const helmet = require("helmet");

app.use(cors());
app.use(helmet());
app.use(express.json());

//call controllers
const employeeRouter = require("./api/employee/emp.router");

//api
app.use("/api/emp", employeeRouter);

//port listen
app.listen(process.env.APP_PORT, () => {
  console.log("Server up and running:", process.env.APP_PORT);
});
