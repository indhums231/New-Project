document.getElementById('search-btn').addEventListener('click', function() {
    const searchQuery = document.getElementById('search-box').value.trim().toLowerCase();
    const recipes = document.querySelectorAll('.recipe-card');
 let found = false; 
    recipes.forEach(recipe => {
        const recipeName = recipe.querySelector('h2 u').textContent.trim().toLowerCase();
        
                if (recipeName.includes(searchQuery)) {
                recipe.style.display = 'block';
                found = true;
            } else {
                recipe.style.display = 'none';
            }
        });

        if (!found) {
            showNotFoundMessage();
        } else {
            hideNotFoundMessage();
        }
    });

    function showNotFoundMessage() {
        const resultContainer = document.getElementById('result');
        resultContainer.innerHTML = '<p>No recipes found.</p>';
        resultContainer.style.display = 'block';
    }

    function hideNotFoundMessage() {
        const resultContainer = document.getElementById('result');
        resultContainer.innerHTML = '';
        resultContainer.style.display = 'none';
    }
  
document.getElementById("login-button").addEventListener("click",function(){
  document.querySelector(".popup").style.display ="flex";
    });
document.querySelector(".close").addEventListener("click",function(){
    document.querySelector(".popup").style.display ="none";
    });
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
  // Event listener for view recipe buttons
   document.addEventListener('DOMContentLoaded', function() {
    const recipeCards = document.querySelectorAll('.recipe-card');

    recipeCards.forEach(card => {
        //const viewRecipeBtn = card.querySelector('.view-recipe');
        const recipeDetails = card.querySelector('.recipe-details');
        const editButtons = document.querySelectorAll('.edit-recipe');
    const deleteButtons = document.querySelectorAll('.delete-recipe');

        //viewRecipeBtn.addEventListener('click', function() {
           //recipeDetails.classList.toggle('show-details');
        });
    });
//});

document.addEventListener('DOMContentLoaded', function() {
    const recipeCards = document.querySelectorAll('.recipe-card');

    // Add event listener for edit buttons
    recipeCards.forEach(card => {
        card.querySelector('.edit-recipe').addEventListener('click', () => {
            editRecipe(card);
        });

        card.querySelector('.delete-recipe').addEventListener('click', () => {
            deleteRecipe(card);
        });
    });

    // Function to handle editing a recipe
    function editRecipe(card) {
        const editForm = document.getElementById('edit-recipe-form');
        editForm.style.display = 'block';

        // Populate the form with current details
        document.getElementById('edit-name').value = card.querySelector('h2').innerText;
        document.getElementById('edit-ingredients').value = getTextContent(card.querySelector('.ingredients'));
        document.getElementById('edit-instructions').value = getTextContent(card.querySelector('.instructions'));
        document.getElementById('edit-cooking-time').value = card.querySelector('.cooking-time').innerText;
        document.getElementById('edit-difficulty').value = card.querySelector('.difficulty').innerText;
        document.getElementById('edit-author').value = card.querySelector('.author').innerText;

        // Save changes event
        document.getElementById('save-changes').onclick = function() {
            card.querySelector('h2').innerText = document.getElementById('edit-name').value;
            setListContent(card.querySelector('.ingredients'), document.getElementById('edit-ingredients').value);
            setListContent(card.querySelector('.instructions'), document.getElementById('edit-instructions').value);
            card.querySelector('.cooking-time').innerText = document.getElementById('edit-cooking-time').value;
            card.querySelector('.difficulty').innerText = document.getElementById('edit-difficulty').value;
            card.querySelector('.author').innerText = document.getElementById('edit-author').value;

            editForm.style.display = 'none';
        };

        // Cancel edit event
        document.getElementById('cancel-edit').onclick = function() {
            editForm.style.display = 'none';
        };
    }

    // Function to handle deleting a recipe
    function deleteRecipe(card) {
        if (confirm('Are you sure you want to delete this recipe?')) {
            card.remove();
        }
    }

    // Helper functions to manage list content
    function getTextContent(element) {
        return Array.from(element.querySelectorAll('li')).map(li => li.innerText).join('\n');
    }

    function setListContent(element, text) {
        element.innerHTML = '';
        text.split('\n').forEach(line => {
            const li = document.createElement('li');
            li.innerText = line;
            element.appendChild(li);
        });
    }
});
document.addEventListener('DOMContentLoaded', function() {
  // Add recipe button click event
  document.getElementById('add-recipe-button').addEventListener('click', function() {
    document.getElementById('add-recipe-form').style.display = 'block';
  });

  // Save button click event
  document.getElementById('save-new-recipe').addEventListener('click', function() {
    // Fetch form data
    let name = document.getElementById('add-name').value;
    let ingredients = document.getElementById('add-ingredients').value;
    let instructions = document.getElementById('add-instructions').value;
    let cookingTime = document.getElementById('add-cooking-time').value;
    let difficulty = document.getElementById('add-difficulty').value;
    let author = document.getElementById('add-author').value;

    // Example: Log the form data
    console.log('Name:', name);
    console.log('Ingredients:', ingredients);
    console.log('Instructions:', instructions);
    console.log('Cooking Time:', cookingTime);
    console.log('Difficulty:', difficulty);
    console.log('Author:', author);

    // You can add AJAX request or form submission logic here

    // Reset form and hide form
    document.getElementById('add-recipe-form').style.display = 'none';
    document.getElementById('add-name').value = '';
    document.getElementById('add-ingredients').value = '';
    document.getElementById('add-instructions').value = '';
    document.getElementById('add-cooking-time').value = '';
    document.getElementById('add-difficulty').value = '';
    document.getElementById('add-author').value = '';
  });

  // Cancel button click event
  document.getElementById('cancel-add').addEventListener('click', function() {
    // Reset form and hide form
    document.getElementById('add-recipe-form').style.display = 'none';
    document.getElementById('add-name').value = '';
    document.getElementById('add-ingredients').value = '';
    document.getElementById('add-instructions').value = '';
    document.getElementById('add-cooking-time').value = '';
    document.getElementById('add-difficulty').value = '';
    document.getElementById('add-author').value = '';
  });
});
const viewRecipeButtons = document.querySelectorAll('.view-recipe');
const viewRecipeForm = document.querySelector('.view-recipe-form');

viewRecipeButtons.forEach(button => {
    button.addEventListener('click', function() {
        // Retrieve the relevant recipe details from the clicked card
        const recipeCard = this.closest('.recipe-card');
        const recipeName = recipeCard.querySelector('h2').innerText;
        const ingredients = recipeCard.querySelector('.ingredients').innerHTML;
        const instructions = recipeCard.querySelector('.instructions').innerHTML;
        const cookingTime = recipeCard.querySelector('.cooking-time').innerText;
        const difficulty = recipeCard.querySelector('.difficulty').innerText;
        const author = recipeCard.querySelector('.author').innerText;

        // Populate the view recipe form with the retrieved details
        viewRecipeForm.querySelector('#view-name').value = recipeName;
        viewRecipeForm.querySelector('#view-ingredients').value = ingredients;
        viewRecipeForm.querySelector('#view-instructions').value = instructions;
        viewRecipeForm.querySelector('#view-cooking-time').value = cookingTime;
        viewRecipeForm.querySelector('#view-difficulty').value = difficulty;
        viewRecipeForm.querySelector('#view-author').value = author;

        // Display the view recipe form
        viewRecipeForm.style.display = 'block';
    });
});

// Function to close the view recipe form
function closeViewRecipeForm() {
    viewRecipeForm.style.display = 'none';
}

// Close button functionality
const closeButton = viewRecipeForm.querySelector('.close');
if (closeButton) {
    closeButton.addEventListener('click', closeViewRecipeForm);
}

// Additional close functionality if clicking outside the form
window.addEventListener('click', function(event) {
    if (event.target === viewRecipeForm) {
        closeViewRecipeForm();
    }
});