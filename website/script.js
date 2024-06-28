function validateEmail(email) {
    const emailPattern = /^[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*\.[a-zA-Z]{2,}$/;
    return emailPattern.test(email);
}

function validatePassword(password) {
    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;
    return passwordPattern.test(password);
}

function validateForm() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    let isValid = true;

    const emailError = document.getElementById('emailError');
    const passwordError = document.getElementById('passwordError');

    if (!validateEmail(email)) {
        emailError.textContent = 'Invalid email address.';
        isValid = false;
    } else {
        emailError.textContent = '';
    }

    if (!validatePassword(password)) {
        passwordError.textContent = 'Password must contain at least 8 characters, including uppercase, lowercase letters, numbers, and a special character.';
        isValid = false;
    } else {
        passwordError.textContent = '';
    }

    if (isValid) {
        alert('Form submitted successfully!');
    }
}