// script.js
document.addEventListener('DOMContentLoaded', function() {
  // Add smooth scrolling to all links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });

  // Add animation to feature cards
  const featureCards = document.querySelectorAll('.feature-card');
  featureCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
      card.style.transform = 'scale(1.05)';
    });
    card.addEventListener('mouseleave', () => {
      card.style.transform = 'scale(1)';
    });
  });

  // Sample data (replace with actual data from backend)
  let doctors = [
    { id: 1, name: "Dr. Smith", specialty: "Cardiology", patients: 0 },
    { id: 2, name: "Dr. Johnson", specialty: "Pediatrics", patients: 0 },
    { id: 3, name: "Dr. Williams", specialty: "Orthopedics", patients: 0 },
  ];

  let patients = [
    {
      id: 1,
      name: "John Doe",
      age: 35,
      gender: "Male",
      contact: "123-456-7890",
    },
    {
      id: 2,
      name: "Jane Smith",
      age: 28,
      gender: "Female",
      contact: "987-654-3210",
    },
  ];

  let appointments = [];

  // Populate doctor select options
  function populateDoctors() {
    const doctorSelect = document.getElementById("doctor-select");
    doctorSelect.innerHTML = '<option value="">Select Doctor</option>';
    doctors.forEach((doctor) => {
      const option = document.createElement("option");
      option.value = doctor.id;
      option.textContent = `${doctor.name} - ${doctor.specialty}`;
      doctorSelect.appendChild(option);
    });

    // Add this at the end of the function
    doctorSelect.style.animation = 'fadeIn 0.5s';
  }

  // Populate patient table
  function populatePatients() {
    const patientTableBody = document.querySelector("#patient-table tbody");
    patientTableBody.innerHTML = "";
    patients.forEach((patient) => {
      const row = document.createElement("tr");
      row.innerHTML = `
              <td>${patient.name}</td>
              <td>${patient.age}</td>
              <td>${patient.gender}</td>
              <td>${patient.contact}</td>
              <td>
                  <button onclick="editPatient(${patient.id})">Edit</button>
                  <button onclick="deletePatient(${patient.id})">Delete</button>
              </td>
          `;
      patientTableBody.appendChild(row);
    });

    // Add this at the end of the function
    patientTableBody.style.animation = 'fadeIn 0.5s';
  }

  // Populate doctor list
  function populateDoctorList() {
    const doctorList = document.getElementById("doctor-list");
    doctorList.innerHTML = "";
    doctors.forEach((doctor) => {
      const card = document.createElement("div");
      card.className = "doctor-card";
      card.innerHTML = `
              <h3>${doctor.name}</h3>
              <p>Specialty: ${doctor.specialty}</p>
              <p>Patients: ${doctor.patients}</p>
          `;
      doctorList.appendChild(card);
    });

    // Add this at the end of the function
    doctorList.style.animation = 'fadeIn 0.5s';
  }

  // Appointment form submission
  const appointmentForm = document.getElementById("appointment-form");
  if (appointmentForm) {
    appointmentForm.addEventListener("submit", function (e) {
      e.preventDefault();
      const patientName = document.getElementById("patient-name").value;
      const appointmentDate = document.getElementById("appointment-date").value;
      const doctorId = document.getElementById("doctor-select").value;
      const notes = document.getElementById("appointment-notes").value;

      const appointment = {
        id: appointments.length + 1,
        patientName,
        appointmentDate,
        doctorId: parseInt(doctorId),
        notes,
      };

      appointments.push(appointment);
      updateAppointmentList();
      updateDoctorPatients(appointment.doctorId);
      this.reset();
      showNotification('Appointment booked successfully!');
    });
  }

  // Update appointment list
  function updateAppointmentList() {
    const appointmentList = document.getElementById("upcoming-appointments");
    appointmentList.innerHTML = "";
    appointments.forEach((appointment) => {
      const li = document.createElement("li");
      const doctor = doctors.find((d) => d.id === appointment.doctorId);
      li.textContent = `${appointment.patientName} - ${appointment.appointmentDate} with ${doctor.name}`;
      appointmentList.appendChild(li);
    });
  }

  // Update doctor's patient count
  function updateDoctorPatients(doctorId) {
    const doctor = doctors.find((d) => d.id === doctorId);
    if (doctor) {
      doctor.patients++;
      populateDoctorList();
    }
  }

  // Patient form submission
  const patientForm = document.getElementById("patient-form");
  if (patientForm) {
    patientForm.addEventListener("submit", function (e) {
      e.preventDefault();
      const name = document.getElementById("new-patient-name").value;
      const age = document.getElementById("new-patient-age").value;
      const gender = document.getElementById("new-patient-gender").value;
      const contact = document.getElementById("new-patient-contact").value;

      const newPatient = {
        id: patients.length + 1,
        name,
        age: parseInt(age),
        gender,
        contact,
      };

      patients.push(newPatient);
      populatePatients();
      this.reset();
      showNotification('Patient added successfully!');
    });
  }

  // Admin login form submission
  const adminLoginForm = document.getElementById("admin-login");
  if (adminLoginForm) {
    adminLoginForm.addEventListener("submit", function (e) {
      e.preventDefault();
      const username = document.getElementById("admin-username").value;
      const password = document.getElementById("admin-password").value;

      // Simple check (replace with actual authentication)
      if (username === "admin" && password === "password") {
        document.getElementById("admin-login").style.display = "none";
        document.getElementById("admin-dashboard").style.display = "block";
      } else {
        showNotification("Invalid credentials", "error");
      }
    });
  }

  // Generate PDF report
  document
    .getElementById("generate-report")
    .addEventListener("click", function () {
      const { jsPDF } = window.jspdf;
      const doc = new jsPDF();

      doc.text("Hospital Management System Report", 10, 10);
      doc.text(`Total Patients: ${patients.length}`, 10, 20);
      doc.text(`Total Doctors: ${doctors.length}`, 10, 30);
      doc.text(`Total Appointments: ${appointments.length}`, 10, 40);

      doc.save("hospital_report.pdf");
    });

  // Initialize
  populateDoctors();
  populatePatients();
  populateDoctorList();
});

// Edit patient function (to be implemented)
function editPatient(patientId) {
  alert(`Edit patient with ID: ${patientId}`);
  // Implement edit functionality
}

// Delete patient function
function deletePatient(patientId) {
  if (confirm("Are you sure you want to delete this patient?")) {
    patients = patients.filter((patient) => patient.id !== patientId);
    populatePatients();
  }
}

// Add this new function for visual feedback
function showNotification(message, type = 'success') {
  const notification = document.createElement('div');
  notification.textContent = message;
  notification.className = `notification ${type}`;
  document.body.appendChild(notification);
  
  setTimeout(() => {
    notification.style.opacity = '0';
    setTimeout(() => {
      document.body.removeChild(notification);
    }, 500);
  }, 3000);
}