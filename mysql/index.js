const mysql = require('mysql2');

const conn = mysql.createConnection({
    host : 'localhost',
    user : 'USERNAME',
    port : 3306,
    password : 'PASSWORD',
    database : "DATABASENAME"
});


conn.connect();

async function init() {
    await conn.promise().query("CREATE DATABASE IF NOT EXISTS testdb");

    await conn.promise().query(
        `CREATE TABLE IF NOT EXISTS dept 
        (
            dept_name VARCHAR(255), 
            dept_id INT AUTO_INCREMENT PRIMARY KEY 
        )`
    );

    await conn.promise().query(
        `CREATE TABLE IF NOT EXISTS managers 
        (   
            id INT AUTO_INCREMENT PRIMARY KEY,
            manager_id INT, 
            dept_id INT
        )`
    );

    await conn.promise().query(
        `CREATE TABLE IF NOT EXISTS emp 
        (
            emp_id INT AUTO_INCREMENT PRIMARY KEY, 
            emp_name VARCHAR(255), 
            emp_des VARCHAR(20),
            manager_id INT,
            dept_id INT, 
            FOREIGN KEY(dept_id) REFERENCES dept(dept_id)
        )`
    );

    conn.commit();

    console.log("done");
}

// init();

module.exports = conn;