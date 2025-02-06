// script.js
const loginForm = document.getElementById('login');
const dashboard = document.getElementById('dashboard');
const ingredientsList = document.getElementById('ingredients-list');
const instructionsList = document.getElementById('instructions-list');
const recipeImage = document.querySelector('.recipe-image');

// Hardcoded username and password for demonstration
const USERNAME = "admin";
const PASSWORD = "cookjoy123";

// Check session storage for login state
if (sessionStorage.getItem('isLoggedIn') === 'true') {
  dashboard.classList.remove('hidden'); // Show dashboard if logged in
}

// Handle login form submission
loginForm.addEventListener('submit', function (e) {
  e.preventDefault();

  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  if (username === USERNAME && password === PASSWORD) {
    sessionStorage.setItem('isLoggedIn', 'true'); // Store login state
    window.location.reload(); // Reload the page
  } else {
    alert("Incorrect username or password. Access denied.");
  }
});

// Update recipe content dynamically
document.getElementById('edit-form').addEventListener('submit', function (e) {
  e.preventDefault();

  // Update Ingredients
  const ingredientsText = document.getElementById('ingredients').value;
  if (ingredientsText) {
    const ingredientsArray = ingredientsText.split('\n').filter(item => item.trim() !== '');
    ingredientsList.innerHTML = ingredientsArray.map(item => `<li>${item}</li>`).join('');
  }

  // Update Instructions
  const instructionsText = document.getElementById('instructions').value;
  if (instructionsText) {
    const instructionsArray = instructionsText.split('\n').filter(step => step.trim() !== '');
    instructionsList.innerHTML = instructionsArray.map(step => `<li>${step}</li>`).join('');
  }

  // Update Photo
  const photoUrl = document.getElementById('photo').value;
  if (photoUrl) {
    recipeImage.src = photoUrl;
  }

  alert('Recipe updated successfully!');
});