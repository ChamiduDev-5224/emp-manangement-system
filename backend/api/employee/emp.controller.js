const {
  addEmployee,
  getEmployee,
  updateEmployee,
  deleteEmployee,
  empFilterByType,
} = require("./emp.service");
module.exports = {
  addEmployee: (req, res) => {
    const body = req.body;

    addEmployee(body, (err, results) => {
      if (err) {
        console.log(err);
        return res.status(500).json({
          success: 0,
          message: "Database connection error",
        });
      }
      return res.status(200).json({
        success: 1,
        data: results,
      });
    });
  },
  getEmployee: (req, res) => {
    getEmployee((err, results) => {
      if (err) {
        console.log(err);
        return;
      }
      return res.json({
        success: 1,
        data: results,
      });
    });
  },
  //update
  updateEmployee: (req, res) => {
    const body = req.body;
    updateEmployee(body, (err, results) => {
      if (err) {
        console.log(err);
      }
      if (!results) {
        return res.json({
          success: 0,
          message: "Failed to update",
        });
      }
      return res.json({
        success: 1,
        message: "update successfully",
      });
    });
  },
  //delete
  deleteEmployee: (req, res) => {
    deleteEmployee(req.params, (err, results) => {
      if (err) {
        console.log(err);
        res.json({
          success: 0,
          message: " not deleted",
        });
        return;
      }
      return res.json({
        success: 1,
        message: "succesfully deleted",
      });
    });
  },
  empFilterByType: (req, res) => {
    const type = req.params.type;
    console.log(type);
    empFilterByType(type, (err, results) => {
      if (err) {
        console.log(err);
        return;
      }
      if (!results) {
        return res.json({
          success: 0,
          message: "Record not found",
        });
      }
      return res.json({
        success: 1,
        data: results,
      });
    });
  },
};
