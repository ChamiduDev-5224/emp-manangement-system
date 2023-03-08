const pool = require("../../config/database");

module.exports = {
  addEmployee: (data, callBack) => {
    console.log(data);
    pool.query(
      "INSERT INTO employee (fullname,initialname,displayname,gender,dob,email,mobile,designation,emptype,joindate,experience,salary,personalnote) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?)",
      [
        data.fullName,
        data.iniName,
        data.disName,
        data.gender,
        data.dob,
        data.email,
        data.mobile,
        data.designation,
        data.empType,
        data.joinDate,
        data.experience,
        data.salary,
        data.pNote,
      ],
      (error, results, fields) => {
        if (error) {
          return callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
  getEmployee: (callBack) => {
    pool.query(`SELECT * FROM employee`, (errors, results, fields) => {
      if (errors) {
        return callBack(errors);
      }
      return callBack(null, results);
    });
  },
  deleteEmployee: (data, callBack) => {
    pool.query(
      `delete from employee where id=?`,
      [data.id],
      (error, results) => {
        if (error) {
          return callBack(error);
        }
        console.log(results.affectedRows < 1);
        if (results.affectedRows < 1) return callBack(true);

        return callBack(null, results);
      }
    );
  },
};
