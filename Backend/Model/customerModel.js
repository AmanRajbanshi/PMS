const mongoose = require("mongoose");
const customerSchema = new mongoose.Schema(
  {
    customerName: {
      type: String,
      required: [true, "customerName is required"],
      trim: true,
    },
    medicineName: {
      type: String,
      required: [true, "medicineName is required"],
      trim: true,
    },
    quantity: {
      type: String,
      required: [true, "quantity is required"],
      trim: true,
    },
    date: {
      type: String,
      required: [true, "date is required"],
      trim: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Customer", customerSchema);
