import React, { useState } from 'react';

const Appointments = () => {
	const initialDoctors = [
		{ id: 1, name: "Dr. Smith", specialty: "Cardiology", patients: 0 },
		{ id: 2, name: "Dr. Johnson", specialty: "Pediatrics", patients: 0 },
		{ id: 3, name: "Dr. Williams", specialty: "Orthopedics", patients: 0 },
	];

	const [doctors, setDoctors] = useState(initialDoctors);
	const [patientName, setPatientName] = useState('');
	const [appointmentDate, setAppointmentDate] = useState('');
	const [doctorId, setDoctorId] = useState('');
	const [notes, setNotes] = useState('');
	const [appointments, setAppointments] = useState([]);

	const validation = () => {
		const nameRegex = /^[a-zA-Z\s]{2,}$/;
		const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
		const doctorIdRegex = /^\d+$/;
		const notesRegex = /^[a-zA-Z0-9\s]{5,}$/;
	
		if (!nameRegex.test(patientName)) {
			alert("Invalid patient name. Only letters and spaces are allowed, and it should have at least 2 characters.");
			return false;
		}
	
		if (!dateRegex.test(appointmentDate)) {
			alert("Invalid appointment date. Please enter in YYYY-MM-DD format.");
			return false;
		}
	
		if (!doctorIdRegex.test(doctorId)) {
			alert("Invalid doctor ID. Only numeric values are allowed.");
			return false;
		}
	
		if (notes && !notesRegex.test(notes)) {
			alert("Invalid notes. Only letters, numbers, and spaces are allowed, and it should have at least 5 characters.");
			return false;
		}
	
		return true;
	};
	

	const handleSubmit = (e) => {
		if(!validation()) {
			return;
		}
		
		e.preventDefault();
		const appointment = {
			id: appointments.length + 1,
			patientName,
			appointmentDate,
			doctorId: parseInt(doctorId),
			notes,
		};

		setAppointments([...appointments, appointment]);
		updateDoctorPatients(doctorId);
		resetForm();
		alert("Appointment booked successfully!");
	};

	const updateDoctorPatients = (doctorId) => {
		setDoctors((prevDoctors) =>
			prevDoctors.map((doctor) =>
				doctor.id === parseInt(doctorId) ? { ...doctor, patients: doctor.patients + 1 } : doctor
			)
		);
	};

	const resetForm = () => {
		setPatientName('');
		setAppointmentDate('');
		setDoctorId('');
		setNotes('');
	};

	return (
		<section className="bg-gray-100 p-6 rounded-lg shadow-lg max-w-md mx-auto mt-10">
			<h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Book an Appointment</h2>
			<form id="appointment-form" className="space-y-4" onSubmit={handleSubmit}>
				<input
					type="text"
					className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
					placeholder="Patient Name"
					value={patientName}
					onChange={(e) => setPatientName(e.target.value)}
					required
				/>
				<input
					type="date"
					className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
					value={appointmentDate}
					onChange={(e) => setAppointmentDate(e.target.value)}
					required
				/>
				<select
					className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
					value={doctorId}
					onChange={(e) => setDoctorId(e.target.value)}
					required
				>
					<option value="">Select Doctor</option>
					{doctors.map((doctor) => (
						<option key={doctor.id} value={doctor.id}>
							{doctor.name} - {doctor.specialty}
						</option>
					))}
				</select>
				<textarea
					className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
					placeholder="Any additional notes"
					value={notes}
					onChange={(e) => setNotes(e.target.value)}
				></textarea>
				<button type="submit" className="w-full bg-green-600 text-white p-3 rounded-lg hover:bg-green-500 transition duration-200">
					Book Appointment
				</button>
			</form>
			{appointments.length > 0 &&
				<>
					<h3 className="text-lg font-semibold mt-6 text-gray-800">Upcoming Appointments</h3>
					<ul className="mt-2 space-y-2">
						{appointments.map((appointment) => (
							<li key={appointment.id} className="border-b py-2 text-gray-700">
								{appointment.patientName} - {appointment.appointmentDate} with
								<span className="font-semibold ml-1">
									{doctors.find((doc) => doc.id === appointment.doctorId)?.name}
								</span>
							</li>
						))}
					</ul>
				</>
			}
		</section>
	);
};

export default Appointments;
