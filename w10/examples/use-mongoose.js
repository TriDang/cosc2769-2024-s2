const mongoose = require("mongoose");

const main = async () => {
  await mongoose.connect("mongodb://127.0.0.1:/fullstack");

  // Define a schema for student document
  const studentSchema = new mongoose.Schema({
    id: Number,
    name: String,
    major: String,
    GPA: Number,
  });

  // Create a model based on the schema
  const Student = mongoose.model("Student", studentSchema);
  // https://mongoosejs.com/docs/models.html the first argument is the singular name of the collection your model is for. Mongoose automatically looks for the plural, lowercased version of your model name

  const newStudent = new Student({
    id: 123,
    name: "Alice",
    major: "IT",
    GPA: 3.3,
  });

  // Save a new student
  await newStudent.save();

  // Find the student again
  const std = await Student.find({ GPA: { $gte: 3.0 } });
  console.log(std);
};

main();