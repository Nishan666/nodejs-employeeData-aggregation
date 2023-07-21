const mongoose = require('mongoose');
const aggregatePaginate = require("mongoose-aggregate-paginate-v2");

module.exports.employeeSchema = mongoose.Schema({       //here _id is automatically created which will be primary key
    emp_group : String,
    imgStore : String
},{ timestamps: true }).plugin(aggregatePaginate);

// employeeSchema.plugin(aggregatePaginate);        //how above works

module.exports.monthlySalarySchema = mongoose.Schema({
    salary : Number ,
    emp_id : { type: mongoose.SchemaTypes.ObjectId, ref: 'Employee' },      //it is the foregin key
    sal_details : String 
}).plugin(aggregatePaginate);



module.exports.leaveSchema = mongoose.Schema({
    emp_id : { type: mongoose.SchemaTypes.ObjectId, ref: 'Employee' },      //it is the foregin key
    total_leave : Number , 
    reason : String,
    date : Date
}).plugin(aggregatePaginate);

