const mysql = require("mysql2/promise");
require("dotenv").config({ path: "../.env" });
//pool -> collection or group of already opened db connections
//  without pool everytime a new mysql connection created  , it is slow , heavy and can crash if many users come suddenly

// creating connection pool
const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  waitForConnections: true,
  connectionLimit: 10,
});

// test connection

pool
  .getConnection()
  .then((conn) => {
    console.log("Connection done successfully");
    conn.release(); // release connection back to pool
  })
  .catch((err) => {
    console.error("connection failed", err.message);
  });

module.exports = pool;
