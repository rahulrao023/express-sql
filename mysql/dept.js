const con = require('./index.js');

async function addDept(department) {
    await con.promise().execute(
        `INSERT INTO dept (dept_name) VALUES (${department})`
    );
    await con.promise().commit();
}

async function removeDepartment(department) {
    await con.promise().execute(
        `DELETE FROM dept WHERE dept_name=${department}`
    );
    await con.promise().commit();
}

async function getAllDept() {
    let res = await con.promise().query(
        `SELECT * FROM dept`
    );
    await con.promise().commit();

    return res;
}

module.exports = { addDept, removeDepartment, getAllDept };
