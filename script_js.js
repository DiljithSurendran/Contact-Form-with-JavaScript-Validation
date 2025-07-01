// Get form and input elements
const form = document.getElementById('contactForm');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');
const resetBtn = document.getElementById('resetBtn');
const successMessage = document.getElementById('successMessage');

// Email validation regex pattern
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

// Validation functions
function validateName(name) {
    const trimmedName = name.trim();
    if (trimmedName === '') {
        return 'Name is required.';
    }
    if (trimmedName.length < 2) {
        return 'Name must be at least 2 characters long.';
    }
    if (!/^[a-zA-Z\s'-]+$/.test(trimmedName)) {
        return 'Name can only contain letters, spaces, hyphens, and apostrophes.';
    }
    return '';
}

function validateEmail(email) {
    const trimmedEmail = email.trim();
    if (trimmedEmail === '') {
        return 'Email is required.';
    }
    if (!emailRegex.test(trimmedEmail)) {
        return 'Please enter a valid email address.';
    }
    return '';
}

function validateMessage(message) {
    const trimmedMessage = message.trim();
    if (trimmedMessage === '') {
        return 'Message is required.';
    }
    if (trimmedMessage.length < 10) {
        return 'Message must be at least 10 characters long.';
    }
    if (trimmedMessage.length > 1000) {
        return 'Message must be less than 1000 characters.';
    }
    return '';
}

// Show error message function
function showError(inputElement, errorMessage) {
    const errorElement = document.getElementById(inputElement.id + 'Error');
    errorElement.textContent = errorMessage;
    errorElement.style.display = 'block';
    inputElement.classList.add('input-error');
    inputElement.classList.remove('input-success');
}

// Clear error message function
function clearError(inputElement) {
    const errorElement = document.getElementById(inputElement.id + 'Error');
    errorElement.textContent = '';
    errorElement.style.display = 'none';
    inputElement.classList.remove('input-error');
    inputElement.classList.add('input-success');
}

// Clear all errors function
function clearAllErrors() {
    [nameInput, emailInput, messageInput].forEach(input => {
        const errorElement = document.getElementById(input.id + 'Error');
        errorElement.textContent = '';
        errorElement.style.display = 'none';
        input.classList.remove('input-error', 'input-success');
    });
}

// Validate single field
function validateField(inputElement, validationFunction) {
    const value = inputElement.value;
    const errorMessage = validationFunction(value);
    
    if (errorMessage) {
        showError(inputElement, errorMessage);
        return false;
    } else {
        clearError(inputElement);
        return true;
    }
}

// Real-time validation on input
nameInput.addEventListener('input', () => {
    validateField(nameInput, validateName);
});

emailInput.addEventListener('input', () => {
    validateField(emailInput, validateEmail);
});

messageInput.addEventListener('input', () => {
    validateField(messageInput, validateMessage);
});

// Form submission handler
form.addEventListener('submit', function(event) {
    // Prevent default form submission
    event.preventDefault();

    // Hide success message
    successMessage.style.display = 'none';

    // Validate all fields
    const isNameValid = validateField(nameInput, validateName);
    const isEmailValid = validateField(emailInput, validateEmail);
    const isMessageValid = validateField(messageInput, validateMessage);

    // Check if all fields are valid
    const isFormValid = isNameValid && isEmailValid && isMessageValid;

    if (isFormValid) {
        // Show success message
        successMessage.style.display = 'block';
        
        // Scroll to success message
        successMessage.scrollIntoView({ behavior: 'smooth', block: 'center' });
        
        // Optional: Log form data (for testing purposes)
        console.log('Form submitted successfully!');
        console.log('Name:', nameInput.value.trim());
        console.log('Email:', emailInput.value.trim());
        console.log('Message:', messageInput.value.trim());
        
        // Reset form after successful submission
        setTimeout(() => {
            form.reset();
            clearAllErrors();
            successMessage.style.display = 'none';
        }, 3000);
    } else {
        // Scroll to first error
        const firstErrorInput = document.querySelector('.input-error');
        if (firstErrorInput) {
            firstErrorInput.scrollIntoView({ behavior: 'smooth', block: 'center' });
            firstErrorInput.focus();
        }
    }
});

// Reset button handler
resetBtn.addEventListener('click', function() {
    // Confirm before reset
    if (confirm('Are you sure you want to reset the form? All entered data will be lost.')) {
        form.reset();
        clearAllErrors();
        successMessage.style.display = 'none';
        nameInput.focus();
    }
});

// Additional accessibility: Focus management
form.addEventListener('keydown', function(event) {
    // Allow form submission with Ctrl+Enter
    if (event.ctrlKey && event.key === 'Enter') {
        form.dispatchEvent(new Event('submit'));
    }
});

// Set initial focus
window.addEventListener('load', function() {
    nameInput.focus();
});

// Handle browser back/forward navigation
window.addEventListener('pageshow', function() {
    clearAllErrors();
    successMessage.style.display = 'none';
});