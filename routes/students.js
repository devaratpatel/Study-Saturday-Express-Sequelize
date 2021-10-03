const Student = require("../db/models/student");
const router = require("express").Router();

router.get("/", async (req, res, next) => {
  try {
    const allStudents = await Student.findAll();
    res.send(allStudents);
  } catch (error) {
    next(error);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const id = req.params.id;
    let singleStudent = await Student.findByPk(id);
    if (singleStudent) {
      res.send(singleStudent);
    } else {
      res.status(404).send("Student not found");
    }
  } catch (error) {
    next(error);
  }
});

router.post("/", async (req, res, next) => {
  try {
    let newStudent = await Student.create(req.body);
    console.log(req.body);
    res.status(201).send(newStudent);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
