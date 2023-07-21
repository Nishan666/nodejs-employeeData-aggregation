const express = require('express');
const upload = require('../multer/setup');

const addEmployee = require('../controllers/addEmpDetails/addEmployee');
const addSalary = require('../controllers/addEmpDetails/addSalary');
const addLeave = require('../controllers/addEmpDetails/addLeave');

const avgSalary = require('../controllers/aggregation/avgSalary');
const leavedetail = require('../controllers/aggregation/leaveDetail');
const totalSalary = require('../controllers/aggregation/totalSalary');

const allEmp = require('../controllers/displayEmp/allEmp');

const readExcel = require('../controllers/dataFromExcel/addEmpFexcel');

const pageEmp = require('../controllers/aggregatePageinate/pageEmp');


const router = express.Router();

// add new details to db
router.post('/addemp',upload.single("image"),addEmployee);
router.post('/addsalary',addSalary);
router.post('/addleave',addLeave);

// doing Aggregate on db datas
router.get('/avgsal',avgSalary);
router.post('/leavedetail',leavedetail);
router.post('/totalsal',totalSalary);

// getting all emp details
router.get('/allemp',allEmp);

// pushing emp detail to db from execl sheet
router.get('/readexcel',readExcel);

//aggregate paginate implementation
router.get('/pageemp',pageEmp);

// just to test multer
// router.post("/single", upload.single("image"), (req, res) => {
//     if (req.file) {
//       res.send("Single file uploaded successfully");
//     } else {
//       res.status(400).send("Please upload a valid image");
//     }
//   });


module.exports = router;