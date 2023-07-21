const {Employee , Salary , Leave} = require('../../model/employeeDetailModel');

// total salary of each employee in date range
const totalSalary = (req,res)=>{

    const {start , end } = req.body;
    const pipeline = [
        {
            $lookup: {                    //combine both collections 
               from: "salaries",
               localField: "emp_id",  
               foreignField: "emp_id",  
               as: "emp"
            }
         },

         {$unwind : "$emp"},          // unwind

         {$match: {                   //select the emp in mentioned date range
            date: {
              $gte: new Date(new Date(start)),
              $lte: new Date(new Date(end)),
            }
          }},

         {$group : {_id : "$emp_id" , sum : {"$sum" : "$emp.salary"}}},    //dispaly emp_id and sum of salary

    ]

    

    Leave.aggregate(pipeline)     //execute pipeline
        .then((result)=>res.status(200).json({status : "sucessful" , data : result}))
        .catch ((error)=> {res.status(400).json({status : "error" , error })});
};

module.exports = totalSalary;