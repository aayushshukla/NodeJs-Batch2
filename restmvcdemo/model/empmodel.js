const pool = require("../config/db");

exports.getAllEmployees = () => {
  return pool.query("select * from employees");
};

exports.getById = (id) => {
  return pool.execute("select * from employees where eid =?", [id]);
};

exports.addEmployee = (uname, uemail, upass) => {
  return pool.execute(
    "insert into employees(ename,email,epass) values (?,?,?)",
    [uname, uemail, upass]
  );
};
