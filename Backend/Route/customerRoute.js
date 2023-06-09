const router = require("express").Router();
const Customer = require("../Controller/customerController");

router.post("/customer", Customer.Post_Customer);
router.get("/customer", Customer.get_Customer);
router.get("/customer/:id", Customer.getSingle_Customer);
router.put("/customer/:id", Customer.update_Customer);
router.delete("/customer/:id", Customer.delete_Customer);

module.exports = router;
