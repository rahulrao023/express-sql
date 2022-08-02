var express = require('express');
const emp = require('../mysql/emp.js');

var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Employee' });
});

// router.get('/add_emp', function(req, res, next) {
//   res.sendFile('/home/rahul/Desktop/rahul/express-sql/public/html/index.html');
// });

router.post('/add_emp', async function(req,res) {

    let name = `'${req.body.name}'`;
    let des = `'${req.body.des}'`;
    let mrgId = req.body.mrgId.length == 0 ? null : parseInt(req.body.mrgId);
    let deptId = parseInt(req.body.deptId);

    await emp.addEmployee(name,des,mrgId,deptId);
    res.status(200).send('done');
})

router.post('/assign_mrg', async function(req,res) {
    let empId = req.body.empid;
    let mrgId = req.body.mrgId;

    await emp.assignManager(empId,mrgId);
    res.status(200).send('updated emp');
})

router.post('/update_des', async function(req,res) {
    let empId = req.body.empid;
    let des = `'${req.body.des}'`;

    await emp.updateDesignation(empId,des);
    res.status(200).send('updated emp designation');
})

router.post('/rem_emp', async function(req,res) {
    let empId = req.body.empid;

    await emp.removeEmployee(empId);
    res.status(200).send('deleted');
})

router.get('/all_emp', async function(req,res) {
  let employees = await emp.getAllEmp();
  res.status(200).json(employees);
})

module.exports = router;
