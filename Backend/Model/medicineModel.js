const mongoose = require("mongoose");
const medicineSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "name is required"],
      trim: true,
    },
    category: {
      type: String,
      required: [true, "category is required"],
      trim: true,
    },
    genericName: {
      type: String,
      required: [true, "genericName is required"],
      trim: true,
    },
    supplierName: {
      type: String,
      required: [true, "manufacturerName is required"],
      trim: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Medicine", medicineSchema);
