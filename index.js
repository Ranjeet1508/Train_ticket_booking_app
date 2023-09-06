document.addEventListener('DOMContentLoaded', function() {
    const registrationForm = document.getElementById('userForm');
    const registerButton = document.getElementById('submit-btn');

    // Load existing registrations from LocalStorage
    let registrations = JSON.parse(localStorage.getItem('registrations')) || [];

    registerButton.addEventListener('click', function() {
        // Get form input values
        const uniqueId = document.getElementById('uniqueId').value;
        const name = document.getElementById('name').value;
        const age = parseInt(document.getElementById('age').value);
        const fromStation = document.getElementById('From').value;
        const toStation = document.getElementById('To').value;
        const journeyDate = document.getElementById('date').value;
        const seatType = document.getElementById('seatType').value;

        // Validate the form inputs
        if (fromStation === toStation) {
            alert("From and To stations cannot be the same.");
        } else if (age < 18 || age > 40) {
            alert("Age should be between 18 and 40.");
        } else {
            // Create an object with registration data
            const registrationData = {
                uniqueId,
                name,
                age,
                fromStation,
                toStation,
                journeyDate,
                seatType
            };

            // Add the registration to the array
            registrations.push(registrationData);

            // Store the updated registrations array in LocalStorage
            localStorage.setItem('registrations', JSON.stringify(registrations));

            // Clear the form
            registrationForm.reset();

            alert("Registration successful!");
        }
    });
});
