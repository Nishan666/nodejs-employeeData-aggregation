const {Employee} = require("../../model/employeeDetailModel");

// get all Employee from employees 
const allEmp = async(req,res)=>{

    // directly using model.find()
    // try {
    // const employees = await Employee.find().sort({"createdAt" : -1})
    //     res.status(200).json({employees})
    // } catch (error) {
    //     res.status(400).json({error : error.message})
    // }

    //using aggregation
    const pipeline = [
        {$project : { _id : 1, emp_group : 1 , imgStore : 1 , createdAt : 1}},
        {$sort : {createdAt : -1}}
    ]
      
    Employee.aggregate(pipeline)
    .then((result)=>res.status(200).json({result}))
    .catch((error)=>res.status(400).json({error : error.message}))
}


module.exports = allEmp;