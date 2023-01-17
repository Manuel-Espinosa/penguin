import mongoose from "mongoose";

const studentSchema = new mongoose.Schema({
  id: { type: Number, required: true },
  name: { type: String, requiered: true },
  group: { type: Number, required: true },
  mail: { type: String, required: true },
  address: { type: String, requiered: true },
  phone: { type: Number, requiered: true },
});

const Student = mongoose.model('Student', studentSchema);

export {Student};