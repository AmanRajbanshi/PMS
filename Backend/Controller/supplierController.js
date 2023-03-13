const Supplier = require("../Model/supplierModel");

module.exports.Post_Supplier = async (req, res) => {
  const newSupplier = new Supplier(req.body);
  try {
    const insertSupplier = await newSupplier.save();
    res.status(201).json(insertSupplier);
  } catch (error) {
    res.status(400).json(error);
    console.log(error);
  }
};

module.exports.get_Supplier = async (req, res) => {
  try {
    const getSupplier = await Supplier.find({});
    res.json(getSupplier);
  } catch (error) {
    res.status(400).json(error);
    // console.log(error);
  }
};

module.exports.getSingle_Supplier = async (req, res) => {
  try {
    const supplier = await Supplier.findById(req.params.id);
    res.status(200).json({
      success: true,
      supplier,
    });
  } catch (error) {
    res.status(400).json(error);
  }
};

module.exports.update_Supplier = async (req, res) => {
  try {
    const _id = req.params.id;
    const updateSupplier = await Supplier.findByIdAndUpdate({ _id }, req.body);
    res.json(updateSupplier);
  } catch (error) {
    res.status(500).json(error);
    console.log(error);
  }
};

module.exports.delete_Supplier = async (req, res) => {
  try {
    const _id = req.params.id;
    const deleteSupplier = await Supplier.findByIdAndDelete({ _id });
    res.json(deleteSupplier);
  } catch (error) {
    res.status(500).json(error);
    console.log(error);
  }
};
