const userAccount = require("../model/usermodel");

const register = async (req, res) => {
  const data = [
    {
      firstName: "John",
      lastName: "Doe",
      salary: "25000",
      department: "HR",
      lastCompany: "X",
      lastSalary: "10000",
      overallExp: "2",
      contactInfo: "1234567890",
      yearGrad: "2016",
      gradStream: "CSE",
    },
    {
      firstName: "Rohan",
      lastName: "Jame",
      salary: "30000",
      department: "Technical",
      lastCompany: "Y",
      lastSalary: "15000",
      overallExp: "1",
      contactInfo: "1234567860",
      yearGrad: "2015",
      gradStream: "CSE",
    },
    {
      firstName: "Jame",
      lastName: "Doe",
      salary: "35000",
      department: "Accounts",
      lastCompany: "Z",
      lastSalary: "20000",
      overallExp: "1",
      contactInfo: "123567890",
      yearGrad: "2019",
      gradStream: "ECE",
    },
    {
      firstName: "Sao",
      lastName: "Avika",
      salary: "30000",
      department: "Sales",
      lastCompany: "Y",
      lastSalary: "15000",
      overallExp: "2",
      contactInfo: "1234567860",
      yearGrad: "2015",
      gradStream: "CSE",
    },
    {
      firstName: "Jame",
      lastName: "roh",
      salary: "35000",
      department: "Accounts",
      lastCompany: "Z",
      lastSalary: "15000",
      overallExp: "2",
      contactInfo: "123567890",
      yearGrad: "2019",
      gradStream: "EEE",
    },
    {
      firstName: "Rohan",
      lastName: "Jame",
      salary: "30000",
      department: "Technical",
      lastCompany: "Y",
      lastSalary: "15000",
      overallExp: "1",
      contactInfo: "1234567860",
      yearGrad: "2015",
      gradStream: "CSE",
    },
    {
      firstName: "Jame",
      lastName: "Doe",
      salary: "35000",
      department: "Accounts",
      lastCompany: "Z",
      lastSalary: "20000",
      overallExp: "1",
      contactInfo: "123567890",
      yearGrad: "2019",
      gradStream: "ECE",
    },
    {
      firstName: "Sao",
      lastName: "Avika",
      salary: "30000",
      department: "Sales",
      lastCompany: "Y",
      lastSalary: "15000",
      overallExp: "2",
      contactInfo: "1234567860",
      yearGrad: "2015",
      gradStream: "CSE",
    },
    {
      firstName: "Jame",
      lastName: "Doe",
      salary: "35000",
      department: "Accounts",
      lastCompany: "Z",
      lastSalary: "15000",
      overallExp: "2",
      contactInfo: "123567890",
      yearGrad: "2019",
      gradStream: "EEE",
    },
    {
      firstName: "Rohan",
      lastName: "Jame",
      salary: "30000",
      department: "Technical",
      lastCompany: "Y",
      lastSalary: "15000",
      overallExp: "1",
      contactInfo: "1234567860",
      yearGrad: "2015",
      gradStream: "CSE",
    },
    {
      firstName: "Jame",
      lastName: "Doe",
      salary: "35000",
      department: "Accounts",
      lastCompany: "Z",
      lastSalary: "20000",
      overallExp: "1",
      contactInfo: "123567890",
      yearGrad: "2019",
      gradStream: "ECE",
    },
    {
      firstName: "Sao",
      lastName: "Avika",
      salary: "30000",
      department: "Sales",
      lastCompany: "Y",
      lastSalary: "15000",
      overallExp: "2",
      contactInfo: "1234567860",
      yearGrad: "2015",
      gradStream: "CSE",
    },
    {
      firstName: "Jame",
      lastName: "Doe",
      salary: "35000",
      department: "Accounts",
      lastCompany: "Z",
      lastSalary: "15000",
      overallExp: "2",
      contactInfo: "123567890",
      yearGrad: "2019",
      gradStream: "EEE",
    },
  ];

  const response = await userAccount.create(data);
  return res.send(response);
};

const EmployeeWithSalary = async (req, res) => {
  const employees = await userAccount.find({ salary: { $gt: 30000 } });
  return res.send(employees);
};

const listOf = async (req, res) => {
  const employees = await userAccount.find({
    yearGrad: { $gt: 2015 },
    overallExp: { $gt: 1 },
  });
  return res.send(employees);
};

const greaterSalary = async (req, res) => {
  const employees = await userAccount.find({
    graduationYear: { $gt: 2015 },
    experience: { $gt: 1 },
  });
  return res.send(employees);
};
const salary = async (req, res) => {
  const employees = await userAccount.updateMany(
    { salary: { $gt: 70000 } },
    { $set: { salary: 65000 } }
  );
  return res.send(employees);
};
const deleteemployee = async (req, res) => {
  const employees = await userAccount.deleteMany({
    lastName: { Y },
  });
  return res.send(employees);
};

module.exports = {
  register,
  EmployeeWithSalary,
  listOf,
  greaterSalary,
  salary,
  deleteemployee,
};
