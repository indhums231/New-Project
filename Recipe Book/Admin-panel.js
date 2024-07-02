document.addEventListener("DOMContentLoaded", () => {
    const recipes = []; // Array to store recipes
    const users = []; // Array to store user profiles
    const categories = []; // Array to store categories
    const tags = []; // Array to store tags

    const recipeForm = document.getElementById("recipe-form");
    const userForm = document.getElementById("user-form");
    const categoryForm = document.getElementById("category-form");
    const tagForm = document.getElementById("tag-form");
    const settingsForm = document.getElementById("settings-form");
    const adminLoginForm = document.getElementById("admin-login-form");
    const backupDataButton = document.getElementById("backup-data");
    const restoreDataButton = document.getElementById("restore-data");

    recipeForm.addEventListener("submit", addOrUpdateRecipe);
    categoryForm.addEventListener("submit", addOrUpdateCategory);
    tagForm.addEventListener("submit", addOrUpdateTag);
    settingsForm.addEventListener("submit", updateSettings);
    adminLoginForm.addEventListener("submit", loginAdmin);
    backupDataButton.addEventListener("click", backupData);
    restoreDataButton.addEventListener("click", restoreData);

    function addOrUpdateRecipe(event) {
        event.preventDefault();
        const newRecipe = {
            name: document.getElementById("recipe-name").value,
            ingredients: document.getElementById("ingredients").value.split(","),
            instructions: document.getElementById("instructions").value.split("\n"),
            cookingTime: document.getElementById("cooking-time").value,
            image: document.getElementById("image-upload").files[0] ? URL.createObjectURL(document.getElementById("image-upload").files[0]) : "default.jpg"
        };
        recipes.push(newRecipe);
        displayRecipes();
        recipeForm.reset();
    }

    function addOrUpdateCategory(event) {
        event.preventDefault();
        const newCategory = {
            name: document.getElementById("category-name").value,
        };
        categories.push(newCategory);
        displayCategories();
        categoryForm.reset();
    }

    function addOrUpdateTag(event) {
        event.preventDefault();
        const newTag = {
            name: document.getElementById("tag-name").value,
        };
        tags.push(newTag);
        displayTags();
        tagForm.reset();
    }

    function updateSettings(event) {
        event.preventDefault();
        const siteName = document.getElementById("site-name").value;
        const primaryColor = document.getElementById("primary-color").value;
        const secondaryColor = document.getElementById("secondary-color").value;
        const logo = document.getElementById("logo-upload").files[0] ? URL.createObjectURL(document.getElementById("logo-upload").files[0]) : "default-logo.jpg";

        document.documentElement.style.setProperty('--primary-color', primaryColor);
        document.documentElement.style.setProperty('--secondary-color', secondaryColor);
        document.getElementById("site-logo").src = logo;
        alert("Settings Updated!");
    }

    function loginAdmin(event) {
        event.preventDefault();
        const username = document.getElementById("admin-username").value;
        const password = document.getElementById("admin-password").value;

        if (username === "admin" && password === "admin123") {
            alert("Login Successful!");
            document.getElementById("admin-login").style.display = "none";
        } else {
            alert("Invalid Credentials!");
        }
    }

    function backupData() {
        const data = {
            recipes,
            users,
            categories,
            tags
        };
        localStorage.setItem("recipeBookBackup", JSON.stringify(data));
        alert("Data Backup Successful!");
    }

    function restoreData() {
        const data = JSON.parse(localStorage.getItem("recipeBookBackup"));
        if (data) {
            recipes.length = 0;
            users.length = 0;
            categories.length = 0;
            tags.length = 0;
            recipes.push(...data.recipes);
            users.push(...data.users);
            categories.push(...data.categories);
            tags.push(...data.tags);
            displayRecipes();
            displayUsers();
            displayCategories();
            displayTags();
            alert("Data Restore Successful!");
        } else {
            alert("No Backup Data Found!");
        }
    }

    function displayRecipes() {
        const recipeList = document.getElementById("recipe-list");
        recipeList.innerHTML = recipes.map((recipe, index) => `
            <div class="recipe-item">
                <h3>${recipe.name}</h3>
                <p>Ingredients: ${recipe.ingredients.join(", ")}</p>
                <p>Instructions: ${recipe.instructions.join("\n")}</p>
                <p>Cooking Time: ${recipe.cookingTime} minutes</p>
                <img src="${recipe.image}" alt="${recipe.name}">
                <button data-index="${index}" class="edit-recipe">Edit</button>
                <button data-index="${index}" class="delete-recipe">Delete</button>
            </div>
        `).join("");
    }

    function displayUsers() {
        const userList = document.getElementById("user-list");
        userList.innerHTML = users.map(user => `
            <div class="user-item">
                <h3>${user.username}</h3>
                <p>Email: ${user.email}</p>
                <p>Role: ${user.role}</p>
                <button data-username="${user.username}" class="edit-user">Edit</button>
                <button data-username="${user.username}" class="delete-user">Delete</button>
            </div>
        `).join("");
    }

    function displayCategories() {
        const categoryList = document.getElementById("category-list");
        categoryList.innerHTML = categories.map((category, index) => `
            <div class="category-item">
                <h3>${category.name}</h3>
                <button data-index="${index}" class="edit-category">Edit</button>
                <button data-index="${index}" class="delete-category">Delete</button>
            </div>
        `).join("");
    }

    function displayTags() {
        const tagList = document.getElementById("tag-list");
        tagList.innerHTML = tags.map((tag, index) => `
            <div class="tag-item">
                <h3>${tag.name}</h3>
                <button data-index="${index}" class="edit-tag">Edit</button>
                <button data-index="${index}" class="delete-tag">Delete</button>
            </div>
        `).join("");
    }

    displayRecipes();
    displayUsers();
    displayCategories();
    displayTags();
});