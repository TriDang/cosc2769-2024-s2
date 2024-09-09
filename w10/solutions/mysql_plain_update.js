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
  const ssn = "123456789";
  // display current salary
  conn.query(
    "SELECT Ssn, Salary FROM Employee WHERE Ssn = ?",
    [ssn],
    (err, res) => {
      res.forEach((row) =>
        console.log(`SSN: ${row.Ssn}, Salary: ${row.Salary}`)
      );

      // update salary
      conn.query(
        "UPDATE Employee SET Salary = Salary + 1000 WHERE Ssn = ?",
        [ssn],
        (err, res) => {
          console.log(`There are ${res.affectedRows} employees affected`);

          // display updated salary
          conn.query(
            "SELECT Ssn, Salary FROM Employee WHERE Ssn = ?",
            [ssn],
            (err, res) => {
              res.forEach((row) =>
                console.log(`SSN: ${row.Ssn}, Salary: ${row.Salary}`)
              );
              conn.destroy();
            }
          );
        }
      );
    }
  );
});
