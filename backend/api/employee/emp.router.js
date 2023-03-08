const {
  addEmployee,
  getEmployee,
  updateEmployee,
  deleteEmployee,
  empFilterByType,
} = require("./emp.controller");
const router = require("express").Router();

router.post("/addEmp", addEmployee);
router.get("/getAlldata", getEmployee);
router.patch("/updateEmp/:id", updateEmployee);
router.delete("/deleteEmp/:id", deleteEmployee);
router.get("/filterEmp/:id", empFilterByType);
module.exports = router;
