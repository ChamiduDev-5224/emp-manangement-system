const { addEmployee, getEmployee } = require("./emp.controller");
const router = require("express").Router();

router.post("/addEmp", addEmployee);
router.get("/getAlldata", getEmployee);

module.exports = router;
