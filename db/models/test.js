const Sequelize = require("sequelize");
const db = require("../db");
const Student = require("./student");

const Test = db.define("test", {
  subject: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  grade: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
});

Test.belongsTo(Student, { as: "student" });
Student.hasMany(Test);

// console.log("Test ---->", Object.keys(Test.prototype));
// console.log("Student ---->", Object.keys(Student.prototype));

module.exports = Test;
