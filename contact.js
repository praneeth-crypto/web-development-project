// Handle form submission (for demo purposes)
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();  // Prevent the default form submission

    // Get form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Simple validation
    if (name && email && message) {
        // In a real scenario, you'd send this data to a server
        alert('Thank you for your message, ' + name + '. We will get back to you shortly.');
        document.getElementById('contact-form').reset(); // Clear form fields
    } else {
        alert('Please fill out all fields before submitting.');
    }
});
