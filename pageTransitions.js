// JavaScript to handle page transitions

const getStartButton = document.getElementById('getStartButton');
const page1 = document.getElementById('page1');
const page2 = document.getElementById('page2');
const loginForm = document.getElementById('loginForm'); 
const signupForm = document.getElementById('signupForm');  
const passwordResetForm = document.getElementById('passwordResetForm');
const signUpButton = document.getElementById('signUpButton');
const dashboard = document.getElementById('dashboard'); 

// Show Page 2 when "Get Start" is clicked
getStartButton.addEventListener('click', (event) => {
    event.preventDefault(); // Prevent the default anchor behavior
    page1.classList.remove('active');
    page2.classList.add('active');
});

// Optional: Actions for the buttons on Page 2
document.getElementById('loginButton').addEventListener('click', () => {
    // Show Login Form when "Log In" is clicked
    page2.classList.remove('active');
    loginForm.classList.add('active');
});
// Show Sign Up Form when "Sign Up" is clicked
document.getElementById('signUpButton').addEventListener('click', () => {
    page2.classList.remove('active');
    signupForm.classList.add('active');
});
// Switch to Sign Up Form from Login Form
document.getElementById('switchToSignUp').addEventListener('click', (event) => {
    event.preventDefault();
    loginForm.classList.remove('active');
    signupForm.classList.add('active');
});

// Switch to Login Form from Sign Up Form
document.getElementById('switchToLogin').addEventListener('click', (event) => {
    event.preventDefault();
    signupForm.classList.remove('active');
    loginForm.classList.add('active');
});

// Switch to Password Reset Form from Login Form
document.querySelector('.forgot-password').addEventListener('click', (event) => {
    event.preventDefault();
    loginForm.classList.remove('active');
    passwordResetForm.classList.add('active');
});

// Switch to Login Form from Password Reset Form
document.getElementById('backButtonReset').addEventListener('click', (event) => {
    event.preventDefault();
    passwordResetForm.classList.remove('active');
    loginForm.classList.add('active');
});

// Back Button: Return to Page 2 from login form
const backButton = document.getElementById('backButton');
backButton.addEventListener('click', (event) => {
    event.preventDefault();
    loginForm.classList.remove('active');
    page2.classList.add('active');
});
// Back Button: Return to Page 2 from sign up form
const backButtonSignUp = document.getElementById('backButtonSignUp');
backButtonSignUp.addEventListener('click', (event) => {
    event.preventDefault();
    signupForm.classList.remove('active');
    page2.classList.add('active');
});

// Handle form submission or other events if needed (e.g., validate inputs)
const loginFormElement = loginForm.querySelector('form');
loginFormElement.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent form submission for now
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Just alert the input data (you can replace this with actual form submission)
    alert(`Email: ${email}, Password: ${password}`);
});

// Example dynamic content loading (can integrate with APIs later)
document.addEventListener("DOMContentLoaded", () => {
    console.log("Welcome to Streamflix!");
  });
  