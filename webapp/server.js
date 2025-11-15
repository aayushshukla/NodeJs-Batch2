const express = require("express");
const app = express();

// app.get("/", (req, res) => {
//   const emp = {
//     name: "Sohan",
//     age: 20,
//     role: "Trainer",
//     skills: ["react", "node", "mongodb", "express"],
//   };

//   res.render("employee", { emp }); // express method to render and send a view
// });

// app.get("/login", (req, res) => {
//   res.render("login");
// });

// app.get("/signup", (req, res) => {
//   res.render("signup");
// });
app.listen(8000, () => {
  console.log("server is running in port no = 8000");
});

module.exports = app;
