const form = document.getElementById('form');
const fullName = document.getElementById('uname');
const email = document.getElementById('email');
const phoneNumber = document.querySelector('input[type="tel"]');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('cpassword');
const termsCheckbox = document.getElementById('tc');

form.addEventListener('submit', function (e) {
    e.preventDefault();

    let errors = [];

    // Validation for Full Name
    if (fullName.value.length < 5) {
        errors.push('Full Name must be at least 5 characters.');
    }

    // Validation for Phone Number
    const phoneNumberRegex = /^[0-9]{10}$/;
    if (!phoneNumberRegex.test(phoneNumber.value) || phoneNumber.value === '123456789') {
        errors.push('Phone Number should be a 10-digit number and should not be 123456789.');
    }

    // Validation for Password
    if (
        password.value.length < 8 ||
        password.value.toLowerCase() === 'password' ||
        password.value.toLowerCase() === fullName.value.toLowerCase()
    ) {
        errors.push('Password must be at least 8 characters and cannot be "password" or your Full Name.');
    }

    // Validation for Password match
    if (password.value !== confirmPassword.value) {
        errors.push('Passwords do not match.');
    }

    // Validation for Terms and Conditions checkbox
    if (!termsCheckbox.checked) {
        errors.push('Please agree to the terms and conditions.');
    }

    // This display errors if any condition not met
    if (errors.length > 0) {
        alert(errors.join('\n'));
    } else {
        form.reset();
        window.location.href = 'submitted.html';
    }
});
