const {
  empolyeeAdd,
  deleteemployee,
  listOfEmployee,
  employeemoresalary,
  employeeMoreExpr,
  graduateEmployee,
  updateEmployeeSalary,
} = require("../controller/employeeController");

const Route = require("express").Router();

Route.post("/empolyeeAdd", empolyeeAdd);

Route.get("/listOfEmployee", listOfEmployee);

Route.get("/moresalary", employeemoresalary);

Route.get("/moreExp", employeeMoreExpr);

Route.get("/graduate", graduateEmployee);

Route.put("/update", updateEmployeeSalary);

Route.delete("/delemployee", deleteemployee);

module.exports = Route;
