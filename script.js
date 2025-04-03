document.getElementById("newsletter-form").addEventListener("submit", function(event) {
    event.preventDefault();
    const email = document.getElementById("email").value;
    const message = document.getElementById("newsletter-message");

    if (email) {
        message.textContent = "Thank you for subscribing!";
        message.style.color = "#403d39";
        document.getElementById("email").value = ""; 
    } else {
        message.textContent = "Please enter a valid email.";
        message.style.color = "red";
    }
});
