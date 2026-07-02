
document.addEventListener("DOMContentLoaded", function () {

  // Get the registration form
  const form = document.getElementById("registrationForm");

  // Check if the form exists
  if (form) {

    // Run this when the user clicks Submit
    form.addEventListener("submit", function (e) {

      // Stop the page from refreshing
      e.preventDefault();

      // Assume the form is correct
      let isValid = true;

      // Get the values entered by the user
      const name = document.getElementById("fullName").value;
      const email = document.getElementById("email").value;
      const phone = document.getElementById("phone").value;
      const course = document.getElementById("course").value;

      // Check if the name has at least 3 letters
      if (name.length < 3) {
        document.getElementById("nameError").style.display = "block";
        isValid = false;
      } else {
        document.getElementById("nameError").style.display = "none";
      }

      // Check if the email contains @ and .
      if (!email.includes("@") || !email.includes(".")) {
        document.getElementById("emailError").style.display = "block";
        isValid = false;
      } else {
        document.getElementById("emailError").style.display = "none";
      }

      // Check if the phone number has exactly 10 digits
      if (phone.length !== 10 || isNaN(phone)) {
        document.getElementById("phoneError").style.display = "block";
        isValid = false;
      } else {
        document.getElementById("phoneError").style.display = "none";
      }

      // Check if a course is selected
      if (course === "") {
        document.getElementById("courseError").style.display = "block";
        isValid = false;
      } else {
        document.getElementById("courseError").style.display = "none";
      }

      // If all details are correct
      if (isValid) {
        document.getElementById("successMsg").style.display = "block";
        document.getElementById("successMsg").textContent = "Registration Successful!";
        form.reset(); // Clear all input fields
      }

    });

  }

});