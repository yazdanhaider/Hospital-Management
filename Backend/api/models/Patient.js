// models/Patient.js
import mongoose from 'mongoose';

const patientSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  gender: {
    type: String,
    required: true,
  },
  mobile: {
    type: String,
    required: true,
  },
  patientId: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    require: true
  }
}, { timestamps: true });

export const Patient = mongoose.model('Patient', patientSchema);
