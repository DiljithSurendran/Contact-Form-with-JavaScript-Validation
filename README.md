# Contact Form with JavaScript Validation

## Task 6 - Web Development Internship

A responsive contact form with client-side validation built using HTML, CSS, and JavaScript as per the internship requirements.

## 📋 Project Overview

This project implements a complete contact form with comprehensive input validation, error handling, and user feedback mechanisms. The form validates user inputs in real-time and provides immediate feedback for better user experience.

## ✨ Features

- **Real-time form validation** - Validates inputs as user types
- **Email format validation** - Uses regex pattern for email verification
- **Dynamic error messages** - Shows/hides error messages below input fields
- **Success feedback** - Displays confirmation message on successful submission
- **Form reset functionality** - Reset button with confirmation dialog
- **Accessible design** - ARIA labels and keyboard navigation support
- **Responsive layout** - Works on desktop and mobile devices
- **Input sanitization** - Trims whitespace and validates special characters

## 🛠 Technologies Used

- **HTML5** - Semantic markup and form structure
- **CSS3** - Modern styling with flexbox and animations
- **JavaScript (ES6+)** - Form validation logic and DOM manipulation
- **Regex** - Email format validation pattern

## 📁 File Structure

```
contact-form-validation/
├── index.html          # Main HTML file
├── styles.css          # CSS stylesheet
├── script.js           # JavaScript validation logic
└── README.md           # Project documentation
```

## 🚀 How to Use

1. **Clone or download** the repository
2. **Open `index.html`** in any modern web browser
3. **Fill out the form fields**:
   - Name (required, minimum 2 characters)
   - Email (required, valid email format)
   - Message (required, 10-1000 characters)
4. **See real-time validation** feedback as you type
5. **Click "Send Message"** to submit the form
6. **Use "Reset Form"** to clear all fields

## ✅ Validation Rules

### Name Field
- ✅ Required field
- ✅ Minimum 2 characters
- ✅ Only letters, spaces, hyphens, and apostrophes allowed
- ✅ Trims whitespace

### Email Field
- ✅ Required field
- ✅ Valid email format using regex: `/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/`
- ✅ Trims whitespace

### Message Field
- ✅ Required field
- ✅ Minimum 10 characters
- ✅ Maximum 1000 characters
- ✅ Trims whitespace

## 🔧 Key JavaScript Functions

- `validateName()` - Validates name input
- `validateEmail()` - Validates email using regex
- `validateMessage()` - Validates message length and content
- `showError()` - Displays error messages
- `clearError()` - Removes error messages
- `validateField()` - General field validation
- `event.preventDefault()` - Prevents form submission if invalid

## 🎯 Learning Outcomes

This project demonstrates understanding of:

- **Form Elements** - HTML form structure and input types
- **Event Handling** - Submit, input, and click event management
- **DOM Manipulation** - Dynamic content updates and styling
- **Input Validation** - Client-side validation techniques
- **Regex Patterns** - Email format validation
- **User Experience** - Real-time feedback and error handling
- **Accessibility** - ARIA labels and keyboard navigation
- **Responsive Design** - Mobile-friendly layouts

## 🧪 Testing Scenarios

The form has been tested with various edge cases:

- ✅ Empty form submission
- ✅ Invalid email formats (missing @, invalid domain, etc.)
- ✅ Special characters in name field
- ✅ Very short/long messages
- ✅ Whitespace-only inputs
- ✅ Copy-paste scenarios
- ✅ Keyboard navigation
- ✅ Mobile device compatibility

## 📱 Browser Compatibility

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers

## 🔮 Future Enhancements

- Server-side validation integration
- CAPTCHA implementation
- Form data persistence
- Email notification system
- Multi-language support

## 📝 Notes

- This is a client-side only validation (no actual email sending)
- Form data is logged to console for testing purposes
- Success message appears for 3 seconds after valid submission
- Reset button includes confirmation dialog to prevent accidental data loss

---

**Created for Web Development Internship Task 6**  
*Demonstrating form handling, validation, regex, and user feedback implementation*
