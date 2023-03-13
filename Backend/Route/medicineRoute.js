const router = require("express").Router();
const Medicine = require("../Controller/medicineController");

router.post("/medicine", Medicine.Post_Medicine);
router.get("/medicine", Medicine.get_Medicine);
router.get("/medicine/:id", Medicine.getSingle_Medicine);
router.put("/medicine/:id", Medicine.update_Medicine);
router.delete("/medicine/:id", Medicine.delete_Medicine);

module.exports = router;
