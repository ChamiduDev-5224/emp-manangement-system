const {
  addEmployee,
  getEmployee,
  deleteEmployee,
} = require("./emp.controller");
const router = require("express").Router();

router.post("/addEmp", addEmployee);
router.get("/getAlldata", getEmployee);
router.delete("/deleteEmp/:id", deleteEmployee);

module.exports = router;
