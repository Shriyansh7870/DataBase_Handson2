const { DataBase } = require("../config/db");
const collection = DataBase.collection("Employee");

const empolyeeAdd = async (req, res) => {
  const details = req.body;
  const dataadded = await collection.insertMany(details);
  console.log(dataadded);
  res.send("added Successfully to the database");
};

const listOfEmployee = async (req, res) => {
  const details = req.body;
  const listdata = await collection.find(details).toArray();
  console.log(listdata);
  res.json(listdata);
};

const employeemoresalary = async (req, res) => {
  const details = req.body;
  const moresalary = await collection
    .find({ salary: { $gt: "30000" } })
    .toArray();
  console.log(moresalary);
  res.json(moresalary);
};

const employeeMoreExpr = async (req, res) => {
  const details = req.body;
  const moreExpr = await collection
    .find({ overallExp: { $gt: "2" } })
    .toArray();
  console.log(moreExpr);
  res.json(moreExpr);
};

const graduateEmployee = async (req, res) => {
  const details = req.body;
  const graduate = await collection
    .find({ yearGrad: { $gt: "2015" }, overallExp: { $gt: "1" } })
    .toArray();
  console.log(graduate);
  res.json(graduate);
};

const updateEmployeeSalary = async (req, res) => {
  const details = req.body;
  const updatedSalary = await collection.updateMany(
    { salary: { $gt: "70000" } },
    { $set: { salary: "65000" } }
  );
  console.log(updatedSalary);
  res.json(updatedSalary);
};

const deleteemployee = async (req, res) => {
  const details = req.body;
  const deletedata = await collection.deleteMany({ lastCompany: "Y" });
  console.log(deletedata);
  res.send("Delete Successfully from the database");
};

module.exports = {
  empolyeeAdd,
  deleteemployee,
  listOfEmployee,
  employeemoresalary,
  employeeMoreExpr,
  graduateEmployee,
  updateEmployeeSalary,
};
