import { Student } from "./schemas/student.js";
import mongoose from "mongoose";

mongoose
  .connect(
    "mongodb+srv://manuelespinosa:jbQYNwRbVsIcl3VZ@furniturebd.jqi3d.mongodb.net/penguin?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("Connected to database");
  })
  .catch(() => {
    console.log("Connection failed!");
  });

const createStudent = async (req, res, next) => {
  const createdStudent = new Student({
    id: req.body.id,
    name: req.body.name,
    group: req.body.group,
    mail: req.body.mail,
    address: req.body.address,
    phone: req.body.phone,
  });
  const result = await createdStudent.save();
  res.json(result);
};

const getStudent = async (req, res, next) => {
  const id = req.params.id;
  const students = await Student.find({ id: id }).exec();
  res.json(students);
};

const getAllStudents = async (req, res, next) => {
  const students = await Student.find().exec();
  res.json(students);
};

export { createStudent, getStudent, getAllStudents };

  
