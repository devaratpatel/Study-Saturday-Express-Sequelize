const router = require("express").Router();
const Test = require("../db/models/test");
const Student = require("../db/models/student");

router.get("/", async (req, res, next) => {
  try {
    const Tests = await Test.findAll();
    res.send(Tests);
  } catch (error) {
    next(error);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    let singleTest = await Test.findByPk(req.params.id);
    if (singleTest) {
      res.send(singleTest);
    } else {
      res.status(404).send("Test not found!");
    }
  } catch (error) {
    next(error);
  }
});

router.post("/student/:studentId", async (req, res, next) => {
  try {
    let studentInstance = await Student.findByPk(req.params.studentId);
    let newTest = await Test.create(req.body);
    let studentTest = await newTest.setStudent(studentInstance);
    res.status(201).send(studentTest);
  } catch (error) {
    next(error);
  }
});

router.delete("/:id", async (req, res, next) => {
  try {
    Test.destroy({
      where: {
        id: req.params.studentId,
      },
    });
    res.status(204).send();
  } catch (error) {
    next(error);
  }
});

module.exports = router;
