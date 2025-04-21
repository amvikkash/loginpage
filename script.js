document.addEventListener('DOMContentLoaded', function() {
    // Get all elements
    const displayButton = document.getElementById('displayButton');
    const nameInput = document.getElementById('nameInput');
    const ageInput = document.getElementById('ageInput');
    const outputBox = document.getElementById('outputBox');

    // Add click event listener
    displayButton.addEventListener('click', function() {
        // Get values
        const name = nameInput.value.trim();
        const age = ageInput.value.trim();

        // Validate inputs
        if (!name) {
            showError("Please enter your name");
            return;
        }

        if (!age) {
            showError("Please enter your age");
            return;
        }

        if (isNaN(age) || age <= 0) {
            showError("Please enter a valid positive number for age");
            return;
        }

        // Show success message
        outputBox.textContent = `${name}, your age is ${age}`;
        outputBox.style.backgroundColor = "#e8f5e9";
        outputBox.style.color = "#2e7d32";
    });

    function showError(message) {
        outputBox.textContent = message;
        outputBox.style.backgroundColor = "#ffebee";
        outputBox.style.color = "#c62828";
    }
});