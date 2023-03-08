const { addEmployee, getEmployee, deleteEmployee } = require("./emp.service");
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
};
