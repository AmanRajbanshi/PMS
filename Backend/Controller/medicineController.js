const Medicine = require("../Model/medicineModel");

module.exports.Post_Medicine = async (req, res) => {
  const newMedicine = new Medicine(req.body);
  try {
    const insertMedicine = await newMedicine.save();
    res.status(201).json(insertMedicine);
  } catch (error) {
    res.status(400).json(error);
    console.log(error);
  }
};

module.exports.get_Medicine = async (req, res) => {
  try {
    const getMedicine = await Medicine.find({});
    res.json(getMedicine);
  } catch (error) {
    res.status(400).json(error);
    // console.log(error);
  }
};

module.exports.getSingle_Medicine = async (req, res) => {
  try {
    const medicine = await Medicine.findById(req.params.id);
    res.status(200).json({
      success: true,
      medicine,
    });
  } catch (error) {
    res.status(400).json(error);
  }
};

module.exports.update_Medicine = async (req, res) => {
  try {
    const _id = req.params.id;
    const updateMedicine = await Medicine.findByIdAndUpdate({ _id }, req.body);
    res.json(updateMedicine);
  } catch (error) {
    res.status(500).json(error);
    console.log(error);
  }
};

module.exports.delete_Medicine = async (req, res) => {
  try {
    const _id = req.params.id;
    const deleteMedicine = await Medicine.findByIdAndDelete({ _id });
    res.json(deleteMedicine);
  } catch (error) {
    res.status(500).json(error);
    console.log(error);
  }
};
