const {Employee , Salary , Leave} = require('../../model/employeeDetailModel');

// leave detail in date range
const leaveDetail = (req,res)=>{

    const {start , end } = req.body;

    const pipeline = [
        {$project : {_id : 0 , emp_id : 1 , total_leave : 1 , reason : 1 , date : 1}}, //show all details
        {$match: {  //info in mentioned date range
            date: {
              $gte: new Date(new Date(start)),
              $lte: new Date(new Date(end)),
            }
          }}
    ]

    Leave.aggregate(pipeline)   //execute aggregate pipeline
        .then((result)=>res.status(200).json({status : "sucessful" , data : result}))
        .catch ((error)=> {res.status(400).json({status : "error" , error })});

};

module.exports = leaveDetail;