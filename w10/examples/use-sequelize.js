const Sequelize = require("sequelize");
const sequelize = new Sequelize("company", "root", "password", {
  host: "localhost",
  dialect: "mysql",
});

const Employee = sequelize.define(
  "Employee",
  {
    SSN: { type: Sequelize.STRING, primaryKey: true },
    Fname: Sequelize.STRING,
    Lname: Sequelize.STRING,
    Salary: Sequelize.NUMBER,
  },
  { tableName: "Employee", timestamps: false }
);

const getOne = async () => {
  await sequelize.sync();
  const emp = await Employee.findOne({ where: { SSN: "123456789" } });
  console.log(emp.dataValues.SSN, emp.dataValues.Fname, emp.dataValues.Lname, emp.dataValues.Salary);
}

getOne();
