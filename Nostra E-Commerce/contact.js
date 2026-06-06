var form = document.getElementById("contact-form");

form.addEventListener("submit", function(event) {
    event.preventDefault(); // Prevents page refresh

    alert("Message Sent Successfully!");

    form.reset(); // Clears the form
});
