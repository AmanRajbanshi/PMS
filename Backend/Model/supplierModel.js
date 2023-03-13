const mongoose = require("mongoose");
const supplierSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "name is required"],
      trim: true,
    },
    sellPrice: {
      type: String,
      required: [true, "genericName is required"],
      trim: true,
    },
    costPrice: {
      type: String,
      required: [true, "genericName is required"],
      trim: true,
    },
    supplierName: {
      type: String,
      required: [true, "manufacturerName is required"],
      trim: true,
    },
    quantity: {
      type: Number,
      required: [true, "quantity is required"],
      trim: true,
    },

    productionDate: {
      type: Date,
      required: [true, "date is required"],
      trim: true,
    },
    expiryDate: {
      type: Date,
      required: [true, "date is required"],
      trim: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Supplier", supplierSchema);
