const {Employee , Salary , Leave} = require('../../model/employeeDetailModel');

// average salary of Employee based on Employee group
const avgSalary = (req,res)=>{

    const pipeline = [
        {
            $lookup: {                  //join both table
               from: "salaries",
               localField: "_id",  
               foreignField: "emp_id",  
               as: "emp"
            }
         },
         {$unwind : "$emp"},          //unwind

         {$group : {_id : "$emp_group" , avgSalary : {"$avg" : "$emp.salary"}}}   
    ]  
    

    Employee.aggregate(pipeline)  //execute aggregate pipeline
        .then((result)=>res.status(200).json({status : "sucessful" , data : result}))
        .catch ((error)=> {res.status(400).json({status : "error" , error })});
};

module.exports = avgSalary;