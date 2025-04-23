document.getElementById("displayButton").addEventListener("click", function () {
    const name = document.getElementById("nameInput").value.trim();
    const age = document.getElementById("ageInput").value.trim();
    const outputBox = document.getElementById("outputBox");

    // Regex to allow only letters and spaces
    const nameRegex = /^[A-Za-z\s]+$/;

    // Name validation
    if (!nameRegex.test(name)) {
        outputBox.textContent = "Invalid name. Only alphabets and spaces are allowed.";
        outputBox.style.color = "red";
        return;
    }

    // Age validation
    if (age === "" || isNaN(age) || age <= 0) {
        outputBox.textContent = "Please enter a valid age.";
        outputBox.style.color = "red";
        return;
    }

    // Display result
    outputBox.textContent = `Hello ${name}, you are ${age} years old.`;
    outputBox.style.color = "green";
});
