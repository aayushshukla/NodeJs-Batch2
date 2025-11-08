const pool = require("../config/db");
const app = require("../app.js");

// add employee
app.post("/addemp", async (req, res) => {
  const empdata = req.body;
  const query = "insert into employees(ename,email,epass) values (?,?,?)";
  // execute() -> prepared query ->  mysql prepares and caches execution plan.
  // execute requires placeholders => select * from employees will raise error
  // query()-> normal query  -> mysql server parse + plans the  query everytime
  const [result] = await pool.execute(query, [
    empdata.uname,
    empdata.uemail,
    empdata.upass,
  ]);
  res.json({
    id: result.insertId,
    employeename: empdata.uname,
    employeeemail: empdata.uemail,
    message: "Employee is added successfully",
  });
});

// show all employees

app.get("/listemployees", async (req, res) => {
  const query = "select * from employees";
  const [rows] = await pool.query(query);
  res.json(rows);
});

// update employee --> password
app.put("/employee/:id", async (req, res) => {
  const empdata = req.body;
  const query = "update employees set epass=? where eid=?";
  await pool.execute(query, [empdata.newpass, req.params.id]);
  res.json({
    message: "password is updated",
  });
});

// delete employee
app.delete("/employee/:id", async (req, res) => {
  const query = "delete from employees where eid = ?";
  await pool.execute(query, [req.params.id]);
  res.json({
    message: "employee is removed",
  });
});
