const mongoose = require('mongoose');
const {employeeSchema , monthlySalarySchema , leaveSchema} = require('../schema/employeeDetailSchema')

module.exports.Employee = mongoose.model('Empolyee',employeeSchema);

module.exports.Salary = mongoose.model('Salary',monthlySalarySchema);

module.exports.Leave = mongoose.model('Leave',leaveSchema);