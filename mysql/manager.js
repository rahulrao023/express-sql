const con = require('./index.js');

async function getEmpsByDept(deptId) {
    let res = await con.promise().execute(
        `SELECT * FROM emp WHERE dept_id=${deptId}`
    );
    await con.promise().commit();
    return res;
}

async function getEmpsByManager(mrgId) {
    let res = await con.promise().execute(
        `SELECT * FROM emp WHERE manager_id=${mrgId}`
    );
    await con.promise().commit();
    return res;
}

async function getAllDetails(mrgId) {
    let res = await con.promise().execute(
        `SELECT emp.emp_name, emp.emp_des,dept.dept_name 
        FROM emp JOIN dept ON 
        emp.dept_id = dept.dept_id AND emp.manager_id=${mrgId}`
    );
    await con.promise().commit();
    return res;
}

module.exports = { getEmpsByDept, getEmpsByManager, getAllDetails };
