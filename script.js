const form = document.getElementById('registration-form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const phoneInput = document.getElementById('phone');
const dobInput = document.getElementById('dob');
const genderInput = document.getElementById('gender');
const appointmentDateInput = document.getElementById('appointment-date');
const appointmentTimeInput = document.getElementById('appointment-time');

form.addEventListener('submit', (event) => {
  if (!nameInput.checkValidity()) {
    alert('Please enter a valid name.');
    event.preventDefault();
  }

  if (!emailInput.checkValidity()) {
    alert('Please enter a valid email address.');
    event.preventDefault();
  }

  if (!phoneInput.checkValidity()) {
    alert('Please enter a valid phone number.');
    event.preventDefault();
  }

  if (!dobInput.checkValidity()) {
    alert('Please enter a valid date of birth.');
    event.preventDefault();
  }

  if (!genderInput.checkValidity()) {
    alert('Please select a gender.');
    event.preventDefault();
  }

  if (!appointmentDateInput.checkValidity()) {
    alert('Please enter a valid appointment date.');
    event.preventDefault();
  }

  if (!appointmentTimeInput.checkValidity()) {
    alert('Please enter a valid appointment time.');
    event.preventDefault();
  }

  event.preventDefault();
  submitForm();
});

function submitForm() {
  // Here you can add your code to submit the form to your server
  alert('Form submitted successfully!');
}
