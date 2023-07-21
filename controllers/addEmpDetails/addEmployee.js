const {Employee} = require('../../model/employeeDetailModel');

//emp detail to db
const addEmployee = (req,res)=>{
    console.log(req.body);

    const {emp_id , emp_group , salary } = req.body;
    const filePath = req.file.path;

    try{
        Employee.create({emp_id , emp_group , salary , imgStore : filePath});
        res.status(200).json({status : "sucessful"})
    }
    catch(err){
        res.status(400).json({error : err.message})
    }
}

module.exports = addEmployee;