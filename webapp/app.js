const app = require("./server.js");
const express = require("express");
const webroute = require("./routes/webemp-routes.js");

app.set("view engine", "ejs"); // setting view  engine
app.set("views", "./views");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/web", webroute);
//app.webrouter
