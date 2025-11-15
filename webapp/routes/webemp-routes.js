const express = require("express");
const webcontroller = require("../controller/webcontroller");
const router = express.Router();

router.route("/").get(webcontroller.showHomePage);

router
  .route("/signup")
  .get(webcontroller.showSignUp)
  .post(webcontroller.registerEmployee);

router.route("/login").get(webcontroller.loginpage);

router.route("/emplist").get(webcontroller.showAllEmployees);
router.route("/delete").get(webcontroller.removeEmployee);

module.exports = router;
