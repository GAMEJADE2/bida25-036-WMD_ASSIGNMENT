document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("bookingForm");

  if (!form) return; // safety check

  const fields = [
    { id: "firstName", err: "firstNameErr" },
    { id: "lastName", err: "lastNameErr" },
    { id: "email", err: "emailErr" },
    { id: "phone", err: "phoneErr" },
    { id: "service", err: "serviceErr" },
    { id: "apptDate", err: "apptDateErr" },
    { id: "apptTime", err: "apptTimeErr" }
  ];

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    let isValid = true;

    // Reset previous styles/errors first
    fields.forEach(field => {
      const input = document.getElementById(field.id);
      const error = document.getElementById(field.err);

      if (input && error) {
        error.textContent = "";
        input.style.borderColor = "#ccc";
      }
    });

    // Required field validation
    fields.forEach(field => {
      const input = document.getElementById(field.id);
      const error = document.getElementById(field.err);

      if (!input.value.trim()) {
        error.textContent = "This field is required";
        input.style.borderColor = "red";
        isValid = false;
      }
    });

    // Email validation
    const email = document.getElementById("email");
    const emailErr = document.getElementById("emailErr");
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if (email.value.trim() && !email.value.match(emailPattern)) {
      emailErr.textContent = "Enter a valid email";
      email.style.borderColor = "red";
      isValid = false;
    }

    // Phone validation (numbers only + length check)
    const phone = document.getElementById("phone");
    const phoneErr = document.getElementById("phoneErr");

    if (phone.value.trim() && !/^\d{8,15}$/.test(phone.value)) {
      phoneErr.textContent = "Enter a valid phone number";
      phone.style.borderColor = "red";
      isValid = false;
    }

    // Success
    if (isValid) {
      document.getElementById("bookingSuccess").style.display = "block";
      form.reset();
    }
  });
});