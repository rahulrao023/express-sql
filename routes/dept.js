var express = require('express');
const dept = require('../mysql/dept.js');

var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('dept', { title: 'Department' });
});

router.get('/add_dept', function(req, res, next) {
  res.sendFile('/home/rahul/Desktop/rahul/express-sql/public/html/index.html');
});

router.post('/add_dept', async function(req,res) {
  // let department = req.body.department;
  console.log(req.body.department);
  await dept.addDept(`'${req.body.department}'`);
  res.status(200).send('done');
})

router.get('/all_dept', async function(req,res) {
  let department = await dept.getAllDept();
  res.status(200).json(department);
})

module.exports = router;
