const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  firstName: String,
  lastName: String,
  salary: Number,
  department: String,
  lastCompany: String,
  lastSalary: Number,
  overallExp: Number,
  contactInfo: String,
  yearGrad: Number,
  gradStream: String,
});

const userAccount = mongoose.model("userAccount", userSchema);
module.exports = userAccount;
