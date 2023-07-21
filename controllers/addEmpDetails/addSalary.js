const {Salary} = require('../../model/employeeDetailModel');

// Salary detail to db
const addSalary = (req,res)=>{
    console.log(req.body);
    const {avg_sal , emp_id , sal_detail} = req.body;

    try{
        Salary.create({avg_sal , emp_id , sal_detail });
        res.status(200).json({status : "sucessful"})
    }
    catch(err){
        res.status(400).json({error : err.message});
    }


}

module.exports = addSalary;