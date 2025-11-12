const emp = require("../model/empmodel");

exports.getEmployee = async (req, res) => {
  const [rows] = await emp.getById(req.params.id);
  res.json(rows[0]);
};

exports.getEmployees = async (_, res) => {
  const [rows] = await emp.getAllEmployees();
  res.json(rows);
};

exports.addEmployees = async (req, res) => {
  const empdata = req.body;
  const [result] = await emp.addEmployee(
    empdata.uname,
    empdata.uemail,
    empdata.upass
  );

  res.json({
    id: result.insertId,
    employeename: empdata.uname,
    employeeemail: empdata.uemail,
    message: "Employee is added successfully",
  });
};
