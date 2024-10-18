// routes/patientRoutes.js
import express from 'express';
import { registerPatient, loginPatient, getAllPatients, deletePatient } from '../controllers/PatientController.js';

const router = express.Router();

// Route for registering a new patient
router.post('/register', registerPatient);

// Route for logging in a patient
router.post('/login', loginPatient);

router.get("/get-patients", getAllPatients);

router.post("/delete-patient", deletePatient);

export default router;
