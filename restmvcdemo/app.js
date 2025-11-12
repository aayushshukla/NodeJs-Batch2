const express = require("express");
const emproutes = require("./routes/employeeapi-routes");
const app = express();

app.use(express.json());
app.use("/api", emproutes);

app.listen(8000, () => {
  console.log(`Server is running in 8000`);
});
module.exports = app;
