const router = require("express").Router();
const Supplier = require("../Controller/supplierController");

router.post("/supplier", Supplier.Post_Supplier);
router.get("/supplier", Supplier.get_Supplier);
router.get("/supplier/:id", Supplier.getSingle_Supplier);
router.put("/supplier/:id", Supplier.update_Supplier);
router.delete("/supplier/:id", Supplier.delete_Supplier);

module.exports = router;
