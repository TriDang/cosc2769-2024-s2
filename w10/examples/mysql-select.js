const mysql = require("mysql");

const conn = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "company",
});

conn.connect((err) => {
  if (err) {
    throw err;
  }
  conn.query("SELECT * FROM Department", (err, rows) => {
    if (err) {
      throw err;
    }
    rows.forEach(row => console.log(row.Dnumber, row.Dname));
    conn.destroy();
  });  
});
