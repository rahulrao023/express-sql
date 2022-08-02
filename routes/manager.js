var express = require('express');
const manager = require('../mysql/manager.js');

var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Manager' });
});

router.get('/by_dept', async function(req,res) {

    let deptId = req.body.deptId;

    let result = await manager.getEmpsByDept(deptId);
    res.status(200).json(result);
})

router.get('/by_mrg', async function(req,res) {
    let mrgId = req.body.mrgId;

    let result = await manager.getEmpsByManager(mrgId);
    res.status(200).json(result);
})

router.get('/emp_details', async function(req,res) {
    let mrgId = req.body.mrgId;

    let result = await manager.getAllDetails(mrgId);
    res.status(200).json(result);
})

module.exports = router;
