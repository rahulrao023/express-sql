const con = require('./index.js');

async function addEmployee(name,designation,manager_id,dept_id) {
    await con.promise().execute(
        `INSERT INTO emp (emp_name,emp_des,manager_id,dept_id) VALUES 
        (
            ${name},
            ${designation},
            ${manager_id},
            ${dept_id}
        )`
    );
    await con.promise().commit();
}

async function assignManager(emp_id,manager_id) {
    await con.promise().execute(
        `UPDATE emp SET manager_id=${manager_id} WHERE emp_id=${emp_id}`
    );
    await con.promise().commit();
}

async function updateDesignation(emp_id,emp_des) {
    await con.promise().execute(
        `UPDATE emp SET emp_des=${emp_des} WHERE emp_id=${emp_id}`
    );
    await con.promise().commit();
}

async function removeEmployee(id) {
    await con.promise().execute(
        `DELETE FROM emp WHERE emp_id=${id}`
    );
    await con.promise().commit();
}

async function getAllEmp() {
    let res = await con.promise().query(
        `SELECT * FROM emp`
    );
    await con.promise().commit();

    return res;
}

module.exports = { addEmployee, assignManager, updateDesignation, removeEmployee, getAllEmp };
