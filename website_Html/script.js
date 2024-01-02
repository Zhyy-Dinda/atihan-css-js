// JavaScript code for the website

// Add a submit event listener to the contact form
document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the default form submission
  
    // Get the values from the form inputs
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;
  
    // Perform some validation
    if (name.trim() === "" || email.trim() === "" || message.trim() === "") {
      alert("Please fill in all fields.");
      return;
    }
  
    // Display a success message
    alert("Message sent successfully!");
  });