// controllers/patientController.js
import { Patient } from "../models/Patient.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { v4 as uuidv4 } from "uuid";

// Register a new patient
export const registerPatient = async (req, res) => {
  try {
    const { name, email, gender, mobile, age } = req.body;

    console.log(req.body);

    // Check if the patient already exists
    const existingPatient = await Patient.findOne({ email });
    if (existingPatient) {
      return res.status(400).json({ message: "Patient already exists" });
    }

    // Create a new patient
    const newPatient = await Patient.create({
      name,
      email,
      gender,
      mobile,
      age,
      patientId: uuidv4(),
    });

    res
      .status(201)
      .json({ message: "Patient registered successfully", newPatient });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error", error });
  }
};

export const getAllPatients = async (req, res) => {
  const patients = await Patient.find();
  return res.status(200).json({ data: patients });
};
// Login a patient
export const loginPatient = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Find the patient by email
    const patient = await Patient.findOne({ email });
    if (!patient) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    // Compare the passwords
    const isMatch = await bcrypt.compare(password, patient.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    // Generate a JWT token
    const token = jwt.sign({ id: patient._id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    res.status(200).json({ token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error", error });
  }
};

export const deletePatient = async (req, res) => {
  const { patientId } = req.body;

  const patient = await Patient.deleteOne({ _id: patientId });

  console.log(patient);

  if (!patient) {
    return res.status(400).json({
      success: false,
      message: "Patient not found",
    });
  }

  return res.status();
};
