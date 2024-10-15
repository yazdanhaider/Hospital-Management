// routes/patientRoutes.js
import express from 'express';
import { registerPatient, loginPatient } from '../controllers/PatientController.js';

const router = express.Router();

// Route for registering a new patient
router.post('/register', registerPatient);

// Route for logging in a patient
router.post('/login', loginPatient);

export default router;
