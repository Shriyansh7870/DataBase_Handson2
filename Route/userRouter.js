const express = require("express");
const {
  register,
  EmployeeWithSalary,
  listOf,
  greaterSalary,
  salary,
  deleteemployee,
} = require("../controller/userController");
const userRouter = express.Router();

userRouter.get("/register", register);
userRouter.get("/EmployeeWithSalary", EmployeeWithSalary);
userRouter.get("/listOf", listOf);
userRouter.get("/greaterSalary", greaterSalary);
userRouter.get("/salary", salary);
userRouter.get("/ deleteemployee", deleteemployee);
module.exports = userRouter;
