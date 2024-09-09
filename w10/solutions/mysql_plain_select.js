const mysql = require("mysql");

const conn = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "company_withoutkey",
});

conn.connect((err) => {
  if (err) {
    throw err;
  }
  conn.query("SELECT * FROM Employee", (err, rows) => {
    if (err) {
      throw err;
    }
    rows.forEach((row) => console.log(row.Fname, row.Lname));
    conn.destroy();
  });
});
