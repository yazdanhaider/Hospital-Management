import express from "express";
import { PORT, mongoDBUrl } from "./config.js";
import cors from "cors";
import mongoose from 'mongoose';
import patientRoutes from './api/routes/PatientRoute.js';

const app = express();

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
  return res.status(234).send('hello world');
});

app.use('/api/patients', patientRoutes);

mongoose
  .connect(mongoDBUrl)
  .then(() => {
    console.log('App connected to database');
  })
  .catch((error) => {
    console.log(error);
  });

if (process.env.NODE_ENV !== 'production') {
  app.listen(PORT, () => {
    console.log(`App is listening to port: ${PORT}`);
  });
}

export default app;