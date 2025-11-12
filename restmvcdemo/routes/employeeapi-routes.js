const express = require("express");
const empcontroller = require("../controller/employeeecontroller");
const router = express.Router();

router.get("/showallemp", empcontroller.getEmployees);
router.get("/:id", empcontroller.getEmployee);
router.post("/addemp", empcontroller.addEmployees);

module.exports = router;
