const pool = require("../../config/database");

module.exports = {
  //add employee
  addEmployee: (data, callBack) => {
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
  //view employee
  getEmployee: (callBack) => {
    pool.query(`SELECT * FROM employee`, (errors, results, fields) => {
      if (errors) {
        return callBack(errors);
      }
      return callBack(null, results);
    });
  },
  //update
  updateEmployee: (data, callBack) => {
    pool.query(
      `update employee set fullname=? , initialname=? , displayname=? , gender=? , dob=? , email=? , mobile=? , designation=? , emptype=? , joindate=? , experience=? , salary=? , personalnote=? WHERE id=? `,
      [
        data.fname,
        data.ininame,
        data.disname,
        data.gender,
        data.dob,
        data.email,
        data.mobile,
        data.designation,
        data.emptype,
        data.joindt,
        data.expr,
        data.salary,
        data.pnote,
        data.id,
      ],
      (error, results, fields) => {
        if (error) {
          console.log(error);
          return callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
  //delete
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
  }, //filter
  empFilterByType: (type, callBack) => {
    pool.query(
      `SELECT * FROM employee WHERE emptype='${type}'`,

      (error, results, fields) => {
        if (error) {
          return callBack(error);
        }
        return callBack(null, results[0]);
      }
    );
  },
};
