const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;
const mongoose = require("mongoose");
require("dotenv").config();
const cors = require("cors");
app.use(cors());
app.use(express.json());

//Routes
const medicineRoute = require("./Route/medicineRoute");
const supplierRoute = require("./Route/supplierRoute");
const customerRoute = require("./Route/customerRoute");

//Middlewares
app.use("/api/v1", medicineRoute);
app.use("/api/v1", supplierRoute);
app.use("/api/v1", customerRoute);

const connectDB = async () => {
  try {
    mongoose.set("strictQuery", false);
    mongoose.connect(process.env.DB_Connection);
    console.log("Mongo connected");
  } catch (error) {
    console.log(error);
    process.exit();
  }
};
connectDB();

app.listen(PORT, () => {
  console.log(`Server is running at ${PORT}`);
});
