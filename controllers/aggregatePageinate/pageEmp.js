const {Employee} = require("../../model/employeeDetailModel");

//using paginate
const pageEmp = (req,res)=>{    

    const options = {       //pageemp?limit=10&page=1
        limit: req.query.limit,         
        page : req.query.page,         
      };
      //[page] {Number} - Current Page (Defaut: 1)
      //[limit] {Number} - Docs. per page (Default: 10).
      
    const myAggregate = Employee.aggregate();

      Employee.aggregatePaginate(myAggregate, options)
        // .then((result)=>res.status(200).json({result}))      //to dispaly all info abt paginate
        // or
        .then((result)=>res.status(200).json({docs : result.docs ,limit :  result.limit , page : result.page}))
        .catch((error)=>res.status(400).json({error : error.message}))
}


module.exports = pageEmp;