const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const StudentSchema = new Schema({
  Name: { type: String, required: true },
  Email: { type: String, required: true, unique: true },
  Phone: { type: String, required: true },
  Bio: { type: String, required: true },
  Gender : {type: String, required: true},
  Password : {type: String, required: true}
});

var Student = mongoose.model("Student", StudentSchema);

module.exports = Student;