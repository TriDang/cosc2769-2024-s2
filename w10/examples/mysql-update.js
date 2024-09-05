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
  conn.query("UPDATE Employee SET Salary = Salary + 1000", (err, result) => {
    if (err) {
      throw err;
    }
    console.log(`There are ${result.affectedRows} employees affected`);
    conn.destroy();
  });
});
