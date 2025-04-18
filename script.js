document.addEventListener('DOMContentLoaded', function() {
    const nameInput = document.getElementById('name');
    const ageInput = document.getElementById('age');
    const displayBtn = document.getElementById('displayBtn');
    const outputText = document.getElementById('outputText');
    const nameError = document.getElementById('nameError');
    const ageError = document.getElementById('ageError');

    displayBtn.addEventListener('click', function() {
        // Reset errors and output
        nameError.style.display = 'none';
        ageError.style.display = 'none';
        outputText.style.color = '#333';

        const name = nameInput.value.trim();
        const age = ageInput.value.trim();

        // Validate inputs
        let isValid = true;

        if (!name) {
            nameError.textContent = 'Please enter a name';
            nameError.style.display = 'block';
            isValid = false;
        }

        if (!age) {
            ageError.textContent = 'Please enter an age';
            ageError.style.display = 'block';
            isValid = false;
        } else if (isNaN(age) || parseInt(age) <= 0) {
            ageError.textContent = 'Please enter a valid age';
            ageError.style.display = 'block';
            isValid = false;
        }

        if (isValid) {
            outputText.textContent = `${name} age is ${age}`;
        } else {
            outputText.textContent = 'Please correct the errors';
            outputText.style.color = '#ea4335';
        }
    });

    // Clear errors when typing
    nameInput.addEventListener('input', function() {
        nameError.style.display = 'none';
    });

    ageInput.addEventListener('input', function() {
        ageError.style.display = 'none';
    });
});
