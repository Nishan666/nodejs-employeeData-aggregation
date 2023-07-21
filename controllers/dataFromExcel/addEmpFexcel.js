const xlsx = require("xlsx");
const {Employee} = require("../../model/employeeDetailModel");

// pushing emp detail to db from execl sheet
const readExcel = (req, res) => {
        //location of ods file
      const workbook = xlsx.readFile('/home/nick/internship/aggregation/employee.ods');  
    //   converting to js array of object
      const workbook_sheet = workbook.SheetNames;                
      const workbook_response = xlsx.utils.sheet_to_json(        
        workbook.Sheets[workbook_sheet[0]]
      );
                                        
            // pushing to db
            try {
                workbook_response.forEach(async element => {
                await Employee.create({emp_group : element.emp_group , imgStore : element.imgStore})
            });
            res.status(200).json({message : "sucessfully Added"})
            } catch (error) {
                res.status(400).json({error : error.message});
            }
        

    }

module.exports = readExcel;

