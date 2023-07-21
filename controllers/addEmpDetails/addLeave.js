const {Leave} = require('../../model/employeeDetailModel');

// leave detail to db
const addLeave = (req,res)=>{
    console.log(req.body);

    const {emp_id , total_leave , reason , date } = req.body;

    try{
        Leave.create({emp_id , total_leave , reason , date});
        res.status(200).json({status : "sucessful"})
    }
    catch(err){
        res.status(400).json({error : err.message})
    }

}


module.exports = addLeave;