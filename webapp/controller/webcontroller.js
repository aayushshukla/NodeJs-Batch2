const empModel = require("../model/webempmodel");

exports.registerEmployee = async (req, res) => {
  const empdata = req.body;
  console.log(empdata);
  const newEmployee = await empModel.addEmployee(
    empdata.name,
    empdata.email,
    empdata.psw
  );
  console.log("afer add", newEmployee);
  if (newEmployee != null) {
    return res.render("login");
  }
};

exports.showAllEmployees = async (req, res) => {
  const allEmployeesData = await empModel.getAllEmployees();
  console.log(allEmployeesData);
  return res.render("employee", {
    allEmpDetails: allEmployeesData,
  });
};
exports.showSignUp = async (req, res) => {
  return res.render("signup");
};
exports.loginpage = async (req, res) => {
  return res.render("login");
};
exports.showHomePage = async (req, res) => {
  return res.render("home");
};

exports.removeEmployee = async (req, res) => {
  console.log(req.query.eid);
  await empModel.removeEmp(req.query.eid);
  const allEmployeesData = await empModel.getAllEmployees();

  return res.render("employee", {
    allEmpDetails: allEmployeesData,
  });
};
